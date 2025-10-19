// api/generate.js
import fetch from "node-fetch";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.MODEL || "gemini-1.5-chat";
const GEMINI_API_URL =
  process.env.GEMINI_API_URL ||
  `https://api.generativeai.google/v1/models/${MODEL}:generate`;
const USE_KEY_QUERY = !!process.env.USE_KEY_QUERY;

const SYSTEM_PROMPT = `
You are "dertme.lol Exploit Assistant". Purpose: provide factual, high-level information about Roblox exploit tooling (executors, sUNC, key systems, VNG, decompilers, multi-inject, external vs injected), status updates, feature summaries, pros/cons, and non-actionable risk advice about detection and bans.

Rules:
- Redirect users asking for exploit scripts or step-by-step bypasses to scriptblox.com and refuse to provide operational exploit code, bypasses, or instructions to evade anti-cheat.
- DO NOT provide instructions to forge keys or break payment/license systems.
- When asked about a specific exploit name, you may report non-actionable metadata if supplied (name, version, price, statusText, sUNC if present, keySystem yes/no, lastUpdate, website).
Tone: concise, informative, neutral. Avoid encouraging malicious behavior.
`.trim();

// call Gemini helper
async function callGemini(messages) {
  const payload = {
    model: MODEL,
    messages,
    temperature: 0.6,
    max_output_tokens: 512,
  };

  const url = USE_KEY_QUERY ? `${GEMINI_API_URL}?key=${API_KEY}` : GEMINI_API_URL;
  const headers = { "Content-Type": "application/json" };
  if (!USE_KEY_QUERY) headers["Authorization"] = `Bearer ${API_KEY}`;

  const r = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!r.ok) {
    const txt = await r.text().catch(() => "");
    const err = new Error(`Gemini API returned ${r.status} ${r.statusText} - ${txt}`);
    err.status = r.status;
    throw err;
  }

  const data = await r.json();

  // Try common response shapes
  if (data?.candidates?.[0]?.content) return data.candidates[0].content;
  if (data?.choices?.[0]?.message?.content) return data.choices[0].message.content;
  if (data?.output?.[0]?.content?.[0]?.text) return data.output[0].content[0].text;
  return JSON.stringify(data).slice(0, 1500);
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    if (!API_KEY) return res.status(500).json({ error: "Server missing GEMINI_API_KEY" });

    const { message, history } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Missing message (string) in body" });
    }

    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    if (Array.isArray(history)) {
      for (const h of history.slice(-12)) {
        if (h?.role && h?.content) messages.push({ role: h.role, content: h.content });
      }
    }

    messages.push({ role: "user", content: message });

    const reply = await callGemini(messages);
    return res.status(200).json({ reply, ok: true });
  } catch (err) {
    console.error("Error /api/generate:", err && (err.message || err));
    return res.status(500).json({
      error: "Gemini error",
      details: err && (err.message || String(err)),
    });
  }
}
