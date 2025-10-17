<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>EXECUTE.IO | Exploit Status Tracker (Live WEAO)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* --- Custom styles for a polished Dark Theme --- */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d0d0d;
            background-image: radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.08), transparent 30%),
                              radial-gradient(circle at 80% 90%, rgba(57, 255, 20, 0.06), transparent 25%);
            overflow-x: hidden;
        }
        .header-bg { background-color: #171717; }
        .sidebar-bg { background-color: #111111; }
        .card-bg { background-color: #1a1a1a; }
        .text-cyan { color: #00ffff; }
        .text-green-light { color: #39ff14; }
        .border-green-light { border-color: #39ff14; }
        .focus-ring-cyan { --tw-ring-color: rgba(0, 255, 255, 0.5); }
        .exploit-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.4); }

        /* --- Modal Styling --- */
        #info-modal { background-color: rgba(0,0,0,0.75); backdrop-filter: blur(5px); transition: opacity 0.3s ease-in-out; z-index:1000; }
        .modal-content { max-height: 90vh; animation: fadeInScale 0.3s ease-out; }
        @keyframes fadeInScale { from{opacity:0; transform:scale(0.95);} to{opacity:1; transform:scale(1);} }

        /* Placeholder Message Box */
        #placeholder-message { position: fixed; top: 20px; right: 20px; z-index:2000; padding:0.75rem 1.25rem; border-radius:0.5rem; box-shadow:0 4px 12px rgba(0,0,0,0.5); transition: transform .3s, opacity .3s; transform: translateX(120%); opacity:0; background-color:#00ffff; color:#171717; font-weight:600; }
        #placeholder-message.show { transform: translateX(0); opacity:1; }

        /* Floating Shapes Animation (moved to body) */
        @keyframes float-up { 0%{transform:translateY(0) scale(0.8); opacity:0.5;} 50%{opacity:0.9;} 100%{transform:translateY(-500px) scale(1.2); opacity:0;} }
        .shape { position:absolute; font-size:1rem; color:#00ffff; animation: float-up 10s infinite ease-out; pointer-events:none; z-index:0; text-shadow:0 0 10px #00ffff, 0 0 5px rgba(0,255,255,0.5); font-weight:900; }
        .shape:nth-child(1) { left:10%; top:50%; animation-delay:0s; animation-duration:8s; font-size:1.2rem; }
        .shape:nth-child(2) { left:30%; top:80%; animation-delay:2s; animation-duration:12s; }
        .shape:nth-child(3) { left:50%; top:30%; animation-delay:5s; animation-duration:9s; font-size:0.8rem; }
        .shape:nth-child(4) { left:70%; top:60%; animation-delay:8s; animation-duration:10s; }
        .shape:nth-child(5) { left:90%; top:10%; animation-delay:1s; animation-duration:14s; font-size:1.5rem; }

        .custom-scrollbar::-webkit-scrollbar { width:8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color:#00ffff; border-radius:4px;}
        .custom-scrollbar::-webkit-scrollbar-track { background-color:#171717; }

        #filters-sidebar { transition: transform .3s ease-in-out; }
        @media (max-width:767px) { #filters-sidebar { position:fixed; top:0; left:0; height:100%; z-index:60; transform:translateX(-100%);} #filters-sidebar.open { transform:translateX(0);} #sidebar-overlay { position:fixed; inset:0; background-color: rgba(0,0,0,0.5); z-index:59; transition:opacity .3s; } }
        .filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (min-width:768px) { .filter-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); } }
        .peer:checked + .filter-span { background-color:#00ffff; color:#171717; font-weight:700; border-color:#00ffff; box-shadow:0 0 8px rgba(0,255,255,0.4); }
    </style>
</head>
<body class="text-white min-h-screen relative">

    <!-- Overlay for mobile sidebar -->
    <div id="sidebar-overlay" class="hidden md:hidden"></div>
    <!-- Placeholder Message Box -->
    <div id="placeholder-message" class="font-semibold"></div>

    <!-- Floating shapes moved here (fixed stray div in style) -->
    <div class="shape">&lt;/&gt;</div>
    <div class="shape">#</div>
    <div class="shape">{ }</div>
    <div class="shape">$</div>
    <div class="shape">^</div>

    <!-- Top Banner -->
    <div class="bg-blue-600 p-2 text-center text-sm font-semibold sticky top-0 z-50">
        The #1 Roblox exploit status tracker. Live updates from WEAO when available.
    </div>

    <!-- Header -->
    <header class="header-bg p-4 sticky top-[38px] z-40 shadow-xl border-b border-gray-800">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" class="text-3xl font-black text-cyan" onclick="showPlaceholderMessage('Navigated to Home')">EXECUTE.<span class="text-white">IO</span></a>
            <div class="flex-grow max-w-lg mx-8 hidden lg:block">
                <div class="relative">
                    <input id="search-input" type="text" placeholder="Search exploits by name..." class="w-full p-2 pl-10 card-bg text-sm rounded-lg border border-gray-700 focus:border-cyan focus:ring focus-ring-cyan">
                    <svg class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <nav class="flex space-x-4 items-center">
                <button id="mobile-filter-btn" class="text-cyan hover:text-white p-2 rounded-lg bg-gray-800 md:hidden shadow-md">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                </button>
                <a href="#" class="text-gray-300 hover:text-cyan font-semibold hidden lg:inline" onclick="showPlaceholderMessage('Site Map')">Site</a>
                <a href="#" class="text-gray-300 hover:text-cyan font-semibold hidden lg:inline" onclick="showPlaceholderMessage('API Docs')">API Docs</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-4 relative z-10">
        <!-- Sidebar -->
        <aside id="filters-sidebar" class="w-64 sidebar-bg p-4 rounded-xl flex-shrink-0 md:sticky top-[108px] self-start shadow-2xl overflow-y-auto custom-scrollbar">
            <div class="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                <h3 class="text-xl font-bold text-cyan">Filters</h3>
                <button id="close-sidebar-btn" class="md:hidden text-gray-400 hover:text-white">
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <button id="reset-filters-btn" class="w-full mb-6 py-2 px-4 text-sm font-bold rounded-lg transition text-red-400 border border-red-500/50 hover:bg-red-900/20 flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.592 10l-5.6-5.6m-2.28 2.28A7 7 0 1115 10a7.002 7.002 0 01-2.28 5.28zM15 10a5 5 0 10-10 0 5 5 0 0010 0zM4.1 15H9v-5"></path></svg>
                Reset Filters
            </button>

            <div class="mb-6">
                <h4 class="font-bold text-gray-300 mb-2">Platform</h4>
                <div id="category-filters" class="grid gap-2 filter-grid text-sm"></div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-gray-300 mb-2 border-t border-gray-800 pt-4">Status & Price</h4>
                <div id="status-filters" class="grid gap-2 filter-grid text-sm">
                    <label class="filter-label"><input type="checkbox" checked class="sr-only peer" data-filter="Updated"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700">Updated</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Free"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700">Free</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Key System"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700">Key System</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Paid"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700">Paid</span></label>
                </div>
            </div>

            <div id="weao-status" class="text-xs text-gray-400 mt-4">
                Live feed status: <span id="weao-live-indicator">idle</span>
                <p id="weao-notice" class="text-yellow-400 mt-2 hidden">If live updates fail, run a proxy adding header <code>User-Agent: WEAO-3PService</code></p>
            </div>
        </aside>

        <!-- Main -->
        <main class="flex-grow w-full md:w-3/4">
            <div class="card-bg p-6 rounded-xl mb-6 shadow-2xl relative overflow-hidden border border-cyan/10">
                <div class="absolute inset-0 flex items-center justify-center opacity-10"><span class="text-9xl font-black text-white/5 select-none">EXECUTE.IO</span></div>
                <div class="relative z-10">
                    <h2 class="text-3xl font-black text-cyan mb-2">Exploit Status Tracker</h2>
                    <p class="text-gray-400">Real-time updates on exploits from WEAO (if allowed). Fallback to local data when unavailable.</p>
                </div>
            </div>

            <div class="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                <span class="text-sm text-gray-400">Showing <span id="exploit-count" class="font-bold text-white">0</span> of <span id="total-exploit-count" class="font-bold text-white">0</span> exploits</span>
            </div>

            <div id="exploit-sections" class="space-y-10"></div>

            <div id="no-results" class="hidden text-center py-16 card-bg rounded-lg mt-6">
                <h3 class="text-2xl font-bold text-cyan">No Exploits Found</h3>
                <p class="text-gray-400 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
        </main>
    </div>

    <!-- Info Modal -->
    <div id="info-modal" class="fixed inset-0 hidden items-center justify-center p-4" onclick="closeInfoModal(event)" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div id="modal-content" class="modal-content card-bg w-full max-w-xl rounded-xl shadow-2xl p-6 border border-cyan/30 overflow-y-auto" onclick="event.stopPropagation()">
            <div class="flex justify-between items-start border-b border-gray-700 pb-3 mb-4">
                <h2 id="modal-title" class="text-3xl font-black text-cyan">Exploit Name</h2>
                <button onclick="closeInfoModal()" class="text-gray-400 hover:text-white transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div id="modal-badges" class="flex flex-wrap gap-2 mb-4"></div>

            <div class="space-y-6">
                <div class="bg-gray-800/50 p-4 rounded-lg">
                    <h3 class="text-xl font-bold text-green-light mb-2 flex items-center"><i class="fas fa-check-circle mr-2"></i> Pros</h3>
                    <ul id="modal-pros" class="space-y-1 text-gray-300 ml-5 list-disc"></ul>
                </div>

                <div class="bg-gray-800/50 p-4 rounded-lg">
                    <h3 class="text-xl font-bold text-yellow-500 mb-2 flex items-center"><i class="fas fa-exclamation-triangle mr-2"></i> Neutral / Warnings</h3>
                    <ul id="modal-neutral" class="space-y-1 text-gray-300 ml-5 list-disc"></ul>
                </div>

                <div class="text-sm text-gray-500 border-t border-gray-800 pt-4">
                    <p><strong>Platform:</strong> <span id="modal-category" class="text-white"></span></p>
                    <p><strong>Last Updated:</strong> <span id="modal-last-update" class="text-white"></span></p>
                    <p><strong>Keysystem:</strong> <span id="modal-keysystem" class="text-white"></span></p>
                </div>

                <a id="modal-website-link" href="#" target="_blank" class="w-full inline-flex items-center justify-center px-4 py-3 text-lg font-bold rounded-lg shadow-xl text-white bg-cyan hover:bg-opacity-90 transition duration-150 ease-in-out uppercase focus:outline-none focus:ring-4 focus-ring-cyan focus:ring-opacity-50 tracking-wider">
                    <i class="fas fa-external-link-alt mr-2"></i> VISIT WEBSITE
                </a>
            </div>
        </div>
    </div>

    <footer class="bg-black/50 text-gray-500 text-center p-6 mt-10">
        <p class="mb-4 text-sm">
            <a href="#" onclick="showPlaceholderMessage('API Docs Page')" class="hover:text-white">API Docs</a> |
            <a href="#" onclick="showPlaceholderMessage('Privacy Policy Page')" class="hover:text-white">Privacy Policy</a> |
            <a href="#" onclick="showPlaceholderMessage('Contact Page')" class="hover:text-white">Contact</a>
        </p>
        <p class="text-xs">&copy; 2023-2025 Vienna Softworks. All rights reserved. Recreation of ExploitStatus.IO.</p>
    </footer>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        /* -------------------------
           DOM references
        ------------------------- */
        const exploitSections = document.getElementById('exploit-sections');
        const exploitCountSpan = document.getElementById('exploit-count');
        const totalExploitCountSpan = document.getElementById('total-exploit-count');
        const searchInput = document.getElementById('search-input');
        const categoryFiltersContainer = document.getElementById('category-filters');
        const statusFiltersContainer = document.getElementById('status-filters');
        const resetFiltersBtn = document.getElementById('reset-filters-btn');
        const noResultsDiv = document.getElementById('no-results');
        const mobileFilterBtn = document.getElementById('mobile-filter-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar-btn');
        const filtersSidebar = document.getElementById('filters-sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');
        const infoModal = document.getElementById('info-modal');

        const modalTitle = document.getElementById('modal-title');
        const modalBadges = document.getElementById('modal-badges');
        const modalPros = document.getElementById('modal-pros');
        const modalNeutral = document.getElementById('modal-neutral');
        const modalCategory = document.getElementById('modal-category');
        const modalLastUpdate = document.getElementById('modal-last-update');
        const modalKeysystem = document.getElementById('modal-keysystem');
        const modalWebsiteLink = document.getElementById('modal-website-link');
        const weaoLiveIndicator = document.getElementById('weao-live-indicator');
        const weaoNotice = document.getElementById('weao-notice');

        const messageBox = document.getElementById('placeholder-message');
        let messageTimeout;

        window.showPlaceholderMessage = (message) => {
            clearTimeout(messageTimeout);
            messageBox.textContent = message;
            messageBox.classList.add('show');
            messageTimeout = setTimeout(()=> messageBox.classList.remove('show'), 3000);
        };

        /* -------------------------
           Fallback local data (keeps your UI working)
           You can keep this as a baseline; WEAO merges will update these entries.
        ------------------------- */
        window.exploitsData = [
            { name: 'Zenith', version: '8', statusText: 'Premium', price: 'Paid', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'zenith.win' },
            { name: 'Wave', version: '8', statusText: 'Premium', price: 'Paid', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getwave.gg' },
            { name: 'Velocity', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['98% sUNC', 'Multi-Inject', 'Decompiler', 'No Keysystem'], pros: ['98% sUNC', 'Multi-Inject Support', 'Decompiler', 'Completely Free (No Keysystem)', 'Level 8 Execution Environment'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getvelocity.lol' },
            { name: 'Xeno', version: '3', statusText: 'Basic Features', price: 'Free', category: 'Windows Script Executor', features: ['40% sUNC', 'Decompiler', 'No Keysystem'], pros: ['Has a decompiler', 'No Keysystem', 'Free'], neutralNotes: ['Level 3 Execution Environment', '40% sUNC (Basic performance)'], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'xeno.onl' },
            { name: 'Potassium', version: '8', statusText: 'Warning', price: 'Paid', category: 'Windows Script Executor', features: ['96% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['Multi-Inject support', 'Has a decompiler', '96% sUNC', 'Level 8 Execution Environment', 'Lifetime License'], neutralNotes: [], cons: ['Lifetime license required (high initial cost)', 'Devs operate under fresh accounts, identities are unknown'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'potassium.pro' },
            // ... keep or add more fallback entries as desired
        ];

        /* -------------------------
           Rendering & UI functions (kept mostly same as original)
        ------------------------- */
        function parseWeaoDate(str) {
            if (!str) return null;
            try {
                const cleaned = str.replace(' at ', ' ').replace('UTC', 'UTC').trim();
                const d = new Date(cleaned);
                if (!isNaN(d)) return d;
            } catch(e){}
            return null;
        }

        function timeAgoFromParsed(d) {
            if (!d) return '';
            const diff = Date.now() - d.getTime();
            const mins = Math.floor(diff/60000);
            if (mins < 60) return `${mins}m ago`;
            const hrs = Math.floor(mins/60);
            if (hrs < 24) return `${hrs}h ago`;
            return `${Math.floor(hrs/24)}d ago`;
        }

        function createExploitCardHTML(exploit) {
            const isUpdated = !!exploit.updated;
            let statusClass = 'bg-gray-700 text-gray-300';

            if (exploit.statusText && exploit.statusText.toLowerCase().includes('premium')) statusClass = 'bg-yellow-500 text-white font-bold shadow-md shadow-yellow-500/30';
            else if (exploit.statusText && exploit.statusText.toLowerCase().includes('warning')) statusClass = 'bg-red-700 text-white font-bold shadow-md shadow-red-700/30';
            else if (exploit.price === 'Free') statusClass = 'bg-green-700 text-white font-bold';
            else if (exploit.statusText === 'Multi-Platform') statusClass = 'bg-purple-700 text-white font-bold';
            else if (!isUpdated) statusClass = 'bg-red-900 text-white';
            else if (exploit.price === 'Paid') statusClass = 'bg-gray-700 text-white';

            const sUNCFeature = (exploit.features || []).find(f => String(f).toLowerCase().includes('sunc'));
            const vngFeature = (exploit.features || []).find(f => String(f).toLowerCase().includes('vng'));
            let primaryBadge = '';
            if (sUNCFeature) primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-green-900 text-green-light">${sUNCFeature}</span>`;
            else if (vngFeature) primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-blue-900 text-cyan">${vngFeature}</span>`;
            else primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-gray-800 text-gray-500">No Key Feature</span>`;

            let websiteUrl = exploit.website || exploit.websitelink || '';
            if (websiteUrl && !websiteUrl.includes('://')) websiteUrl = `https://${websiteUrl}`;
            const isDiscordLink = websiteUrl && websiteUrl.includes('discord.com');
            const buttonText = isDiscordLink ? 'DISCORD' : (websiteUrl ? 'WEBSITE' : 'WEBSITE N/A');
            const buttonColor = isDiscordLink ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-cyan hover:bg-opacity-90';

            const websiteButton = websiteUrl ? `
                <a href="${websiteUrl}" onclick="showPlaceholderMessage('Navigating to: ${exploit.name}')" target="_blank" class="w-2/3 inline-flex items-center justify-center px-2 py-2 text-sm font-bold rounded-lg shadow-lg text-white ${buttonColor} transition duration-150 ease-in-out uppercase focus:outline-none focus:ring-4 focus-ring-cyan focus:ring-opacity-50 tracking-wider">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    ${buttonText}
                </a>` : `<button disabled class="w-2/3 px-2 py-2 text-sm font-bold rounded-lg bg-gray-600 text-gray-400 cursor-not-allowed">WEBSITE N/A</button>`;

            const lastDateDisplay = exploit.lastUpdateParsed ? `${timeAgoFromParsed(exploit.lastUpdateParsed)} • ${exploit.lastUpdateRaw || ''}` : (exploit.lastUpdateRaw || 'N/A');

            return `
                <div class="exploit-card card-bg rounded-xl shadow-xl p-4 border border-gray-800 hover:border-cyan/50 transition duration-300 w-full">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="text-xl font-black text-cyan">${escapeHtml(exploit.name)} <span class="text-gray-400 text-sm font-normal">${escapeHtml(exploit.version || '')}</span></h3>
                            <p class="text-sm text-gray-400 mt-1">${escapeHtml(String(exploit.category || 'Unknown'))}</p>
                        </div>
                        <div class="flex flex-col items-end space-y-1">
                            ${primaryBadge}
                            <span class="px-2 py-0.5 text-xs font-semibold rounded-lg ${statusClass}">${escapeHtml(exploit.statusText || 'Unknown')}</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center py-2 border-y border-gray-800/50">
                        <div class="flex items-center text-sm font-medium ${isUpdated ? 'text-green-light' : 'text-red-500'}">
                            <span class="w-3 h-3 rounded-full mr-2 ${isUpdated ? 'bg-green-light shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}"></span>
                            ${isUpdated ? 'Updated' : 'Not Updated'}
                        </div>
                        <p class="text-xs text-gray-500">${escapeHtml(lastDateDisplay.split('•')[0].trim())}</p>
                    </div>

                    <div class="mt-3 flex space-x-2">
                        ${websiteButton}
                        <button onclick="openInfoModal('${escapeJs(exploit.name)}')" class="w-1/3 px-2 py-2 text-sm font-bold rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition duration-150">INFO</button>
                    </div>
                </div>
            `;
        }

        function renderExploits() {
            const searchTerm = (searchInput.value || '').toLowerCase();
            const activeCategories = [...categoryFiltersContainer.querySelectorAll('input:checked')].map(el => el.dataset.category);
            const activeStatuses = [...statusFiltersContainer.querySelectorAll('input:checked')].map(el => el.dataset.filter);

            const filteredExploits = (window.exploitsData || []).filter(exploit => {
                const nameMatch = (exploit.name || '').toLowerCase().includes(searchTerm);
                const categoryMatch = activeCategories.length === 0 || activeCategories.includes(exploit.category);
                const statusMatch = activeStatuses.length === 0 ||
                    (activeStatuses.includes('Updated') && exploit.updated) ||
                    (activeStatuses.includes('Free') && exploit.free) ||
                    (activeStatuses.includes('Paid') && exploit.price && String(exploit.price).toLowerCase().includes('paid')) ||
                    (activeStatuses.includes('Key System') && exploit.keySystem);
                return nameMatch && categoryMatch && statusMatch;
            });

            exploitSections.innerHTML = '';
            exploitCountSpan.textContent = filteredExploits.length;
            totalExploitCountSpan.textContent = (window.exploitsData || []).length;

            if (filteredExploits.length === 0) {
                noResultsDiv.classList.remove('hidden');
                return;
            } else noResultsDiv.classList.add('hidden');

            const grouped = filteredExploits.reduce((acc, e) => { (acc[e.category] = acc[e.category] || []).push(e); return acc; }, {});
            for (const cat in grouped) {
                const sectionEl = document.createElement('section');
                const cardsHTML = grouped[cat].map(createExploitCardHTML).join('');
                const categoryTitle = `${cat}s`;
                sectionEl.innerHTML = `<h2 class="text-2xl font-bold mb-4 text-white">${escapeHtml(categoryTitle)}</h2><div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${cardsHTML}</div>`;
                exploitSections.appendChild(sectionEl);
            }
        }

        /* -------------------------
           Helpers & Safety
        ------------------------- */
        function escapeHtml(str) {
            if (!str && str !== 0) return '';
            return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
        }
        function escapeJs(str) {
            if (!str && str !== 0) return '';
            return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
        }

        /* -------------------------
           Filters UI population
        ------------------------- */
        function populateCategoryFilters() {
            const categories = [...new Set((window.exploitsData || []).map(e => e.category || 'Unknown'))];
            categoryFiltersContainer.innerHTML = categories.map(cat => `
                <label class="filter-label">
                    <input type="checkbox" checked class="sr-only peer" data-category="${escapeHtml(cat)}">
                    <span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700">${escapeHtml(cat.replace(' Script Executor','').replace('Windows External','External').replace('Mobile','Mobile/iOS/Android'))}</span>
                </label>
            `).join('');
        }

        /* -------------------------
           Event listeners & small UX bits
        ------------------------- */
        function debounce(fn, wait = 180) {
            let t;
            return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), wait); };
        }
        function setupEventListeners() {
            const allFilters = document.querySelectorAll('#category-filters input, #status-filters input');
            allFilters.forEach(input => input.addEventListener('change', renderExploits));
            searchInput.addEventListener('input', debounce(renderExploits, 180));

            resetFiltersBtn.addEventListener('click', () => {
                searchInput.value = '';
                document.querySelectorAll('#category-filters input').forEach(i => i.checked = true);
                document.querySelectorAll('#status-filters input').forEach(i => i.checked = false);
                document.querySelector('#status-filters input[data-filter="Updated"]').checked = true;
                renderExploits();
                showPlaceholderMessage('Filters have been reset.');
            });

            const toggleSidebar = () => {
                filtersSidebar.classList.toggle('open');
                sidebarOverlay.classList.toggle('hidden');
                document.body.style.overflow = filtersSidebar.classList.contains('open') ? 'hidden' : 'auto';
            };
            mobileFilterBtn.addEventListener('click', toggleSidebar);
            closeSidebarBtn.addEventListener('click', toggleSidebar);
            sidebarOverlay.addEventListener('click', toggleSidebar);

            // Esc to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeInfoModal();
                if (e.key === '/') { e.preventDefault(); searchInput.focus(); }
            });
        }

        /* -------------------------
           Modal functions + single-exploit fetch
        ------------------------- */
        window.openInfoModal = async (exploitName) => {
            const exploit = (window.exploitsData || []).find(e => (e.name || '').toLowerCase() === exploitName.toLowerCase()) || { name: exploitName };
            modalTitle.textContent = `${exploit.name} ${exploit.version ? '('+exploit.version+')' : ''}`;

            // Show existing data immediately
            populateModalFromExploit(exploit);

            // Try fetching single-exploit for freshest details
            try {
                const single = await fetchSingleExploit(exploit.name);
                if (single) {
                    // merge fields
                    const norm = normalizeWeao(single);
                    mergeSingleExploit(norm);
                    populateModalFromExploit(norm);
                    showPlaceholderMessage('Modal refreshed with live data.');
                }
            } catch (e) {
                // ignore; we already showed fallback
            }

            infoModal.classList.remove('hidden');
            infoModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        };

        function closeInfoModal(event) {
            if (!event || event.target === infoModal || event.target.closest('button[onclick="closeInfoModal()"]')) {
                infoModal.classList.add('hidden');
                infoModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        }

        function populateModalFromExploit(exploit) {
            modalBadges.innerHTML = `<span class="px-2 py-0.5 text-sm font-bold rounded-lg bg-gray-600 text-white">${escapeHtml(exploit.statusText || '')}</span>`;
            if (exploit.features) {
                const sUNC = (exploit.features || []).find(f => String(f).toLowerCase().includes('sunc'));
                if (sUNC) modalBadges.innerHTML += `<span class="px-2 py-0.5 text-sm font-bold rounded-lg bg-green-900 text-green-light">${escapeHtml(sUNC)}</span>`;
            }
            modalPros.innerHTML = (exploit.pros || exploit.features || []).map(p => `<li>${escapeHtml(p)}</li>`).join('') || '<li>No specific pros listed.</li>';
            const neutral = (exploit.neutralNotes || []).concat(exploit.cons || []);
            modalNeutral.innerHTML = (neutral.length ? neutral.map(n => `<li>${escapeHtml(n)}</li>`).join('') : '<li>No major neutral notes or drawbacks reported.</li>');
            modalCategory.textContent = exploit.category || 'Unknown';
            modalLastUpdate.textContent = exploit.lastUpdateRaw || (exploit.lastUpdateParsed ? exploit.lastUpdateParsed.toISOString() : 'N/A');
            modalKeysystem.textContent = exploit.keySystem ? 'Yes' : 'No';
            const websiteUrl = exploit.website && exploit.website.includes('://') ? exploit.website : (exploit.website ? 'https://' + exploit.website : '#');
            modalWebsiteLink.href = websiteUrl || '#';
            const isDiscordLink = websiteUrl && websiteUrl.includes('discord.com');
            modalWebsiteLink.textContent = isDiscordLink ? 'JOIN DISCORD' : (websiteUrl && websiteUrl !== '#' ? 'VISIT WEBSITE' : 'WEBSITE N/A');
            modalWebsiteLink.classList.toggle('bg-indigo-600', isDiscordLink);
            modalWebsiteLink.classList.toggle('bg-cyan', !isDiscordLink);
        }

        /* -------------------------
           WEAO integration: normalize & merge
        ------------------------- */
        const WEAO_ALL_URL = 'http://localhost:3000/api/status/exploits';
        const WEAO_SINGLE_URL = (title) => `http://localhost:3000/api/status/exploits/${encodeURIComponent(title)}`;


        function normalizeWeao(ex) {
            return {
                name: ex.title || ex.name || 'Unknown',
                version: ex.version || '',
                statusText: ex.updateStatus ? 'Updated' : (ex.updateStatus === false ? 'Not Updated' : 'Unknown'),
                price: ex.free ? 'Free' : (ex.cost || (ex.free === false ? 'Paid' : 'Unknown')),
                category: (ex.platform || ex.extype || 'Unknown'),
                features: [
                    ex.suncPercentage != null ? `${ex.suncPercentage}% sUNC` : (ex.sunc ? 'sUNC' : null),
                    ex.decompiler ? 'Decompiler' : null,
                    ex.multiInject ? 'Multi-Inject' : null,
                    ex.uncStatus ? 'UNC' : null
                ].filter(Boolean),
                pros: (ex.recommendedReason && ex.recommendedReason.features) ? ex.recommendedReason.features : [],
                neutralNotes: [],
                cons: [],
                updated: !!ex.updateStatus,
                keySystem: !!ex.keysystem || !!ex.keySystem,
                lastUpdateRaw: ex.updatedDate || '',
                lastUpdateParsed: parseWeaoDate(ex.updatedDate) || null,
                website: ex.websitelink || ex.websitelink || ex.website || '',
                discord: ex.discordlink || '',
                purchase: ex.purchaselink || '',
                suncPercentage: ex.suncPercentage != null ? ex.suncPercentage : (ex.uncPercentage != null ? ex.uncPercentage : null),
                detected: !!ex.detected,
                hidden: !!ex.hidden,
                free: !!ex.free,
                __raw: ex
            };
        }

        function mergeWeaoArray(arr) {
            const changed = { added:0, updated:0 };
            const localIndex = {};
            (window.exploitsData || []).forEach((l,i) => { localIndex[(l.name||'').toLowerCase()] = i; });

            arr.forEach(item => {
                const norm = normalizeWeao(item);
                const key = (norm.name || '').toLowerCase();
                if (key in localIndex) {
                    const idx = localIndex[key];
                    const local = window.exploitsData[idx];
                    const fields = ['version','features','pros','neutralNotes','cons','updated','keySystem','lastUpdateRaw','lastUpdateParsed','website','discord','purchase','suncPercentage','detected','free','statusText','price','category'];
                    let any = false;
                    fields.forEach(f => {
                        const a = JSON.stringify(local[f]||null);
                        const b = JSON.stringify(norm[f]||null);
                        if (a !== b) { local[f] = norm[f]; any = true; }
                    });
                    if (any) changed.updated++;
                } else {
                    window.exploitsData.push(norm);
                    changed.added++;
                }
            });

            if (changed.added || changed.updated) {
                totalExploitCountSpan.textContent = window.exploitsData.length;
                populateCategoryFilters();
                renderExploits();
            }
            return changed;
        }

        function mergeSingleExploit(norm) {
            const key = (norm.name||'').toLowerCase();
            const localIndex = {};
            (window.exploitsData || []).forEach((l,i) => { localIndex[(l.name||'').toLowerCase()] = i; });
            if (key in localIndex) {
                window.exploitsData[localIndex[key]] = {...window.exploitsData[localIndex[key]], ...norm};
            } else {
                window.exploitsData.push(norm);
            }
            populateCategoryFilters();
            renderExploits();
        }

        /* -------------------------
           Fetching with basic backoff and CORS detection
        ------------------------- */
        let pollingTimer = null;
        let pollingIntervalMs = 30000; // 30s

        async function fetchWithBackoff(url, opts={}, attempt=0) {
            try {
                const res = await fetch(url, opts);
                if (res.status === 429) {
                    const wait = Math.min(60000, 1000 * Math.pow(2, attempt));
                    weaoLiveIndicator.textContent = `rate limited, backing off ${Math.round(wait/1000)}s`;
                    await new Promise(r => setTimeout(r, wait));
                    return fetchWithBackoff(url, opts, attempt+1);
                }
                if (!res.ok) throw new Error('HTTP '+res.status);
                return res;
            } catch (err) {
                // network or CORS error
                throw err;
            }
        }

        async function pollWeaoAll() {
            try {
                weaoLiveIndicator.textContent = 'fetching';
                const res = await fetchWithBackoff(WEAO_ALL_URL, { cache: 'no-store' });
                const json = await res.json();
                if (!Array.isArray(json)) {
                    weaoLiveIndicator.textContent = 'unexpected response';
                    console.warn('WEAO returned non-array for all endpoint', json);
                    return;
                }
                const changed = mergeWeaoArray(json);
                weaoLiveIndicator.textContent = `live • +${changed.added} added • ${changed.updated} updated`;
                weaoNotice.classList.add('hidden');
            } catch (err) {
                console.warn('WEAO all fetch failed:', err);
                weaoLiveIndicator.textContent = 'live fetch failed';
                weaoNotice.classList.remove('hidden');
                // If CORS or network error, stop polling to avoid spammy console, user can run proxy
                clearInterval(pollingTimer);
                pollingTimer = null;
            }
        }

        async function fetchSingleExploit(title) {
            try {
                const res = await fetchWithBackoff(WEAO_SINGLE_URL(title), { cache: 'no-store' });
                const json = await res.json();
                return json;
            } catch (err) {
                console.warn('single exploit fetch failed', err);
                return null;
            }
        }

        function startPolling() {
            if (pollingTimer) clearInterval(pollingTimer);
            // attempt immediate poll
            pollWeaoAll();
            pollingTimer = setInterval(pollWeaoAll, pollingIntervalMs);
        }

        /* -------------------------
           Init & boot
        ------------------------- */
        populateCategoryFilters();
        setupEventListeners();
        renderExploits();
        startPolling();

        // expose a manual refresh for debugging in console
        window._weao_refresh = pollWeaoAll;
    });
    </script>
</body>
</html>
