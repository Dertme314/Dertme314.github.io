import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// base WEAO API endpoint
const BASE = "https://weao.xyz/api/status/exploits";

// forward all requests to WEAO with proper headers
app.get("/api/status/exploits", async (req, res) => {
  try {
    const r = await fetch(BASE, {
      headers: { "User-Agent": "WEAO-3PService" },
    });
    const data = await r.text();
    res.set("Content-Type", "application/json");
    res.status(r.status).send(data);
  } catch (err) {
    console.error("proxy error", err);
    res.status(500).json({ error: "proxy_failed" });
  }
});

// single exploit route
app.get("/api/status/exploits/:name", async (req, res) => {
  try {
    const r = await fetch(`${BASE}/${encodeURIComponent(req.params.name)}`, {
      headers: { "User-Agent": "WEAO-3PService" },
    });
    const data = await r.text();
    res.set("Content-Type", "application/json");
    res.status(r.status).send(data);
  } catch (err) {
    console.error("proxy error", err);
    res.status(500).json({ error: "proxy_failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Proxy running on http://localhost:${PORT}`)
);
