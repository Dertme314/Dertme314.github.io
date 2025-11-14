// FIX: Add global declarations for functions attached to the window object to resolve TypeScript errors.
declare global {
    interface Window {
        showPlaceholderMessage: (message: string) => void;
        openInfoModal: (exploitName: string) => void;
        closeInfoModal: (event?: MouseEvent) => void;
        toggleAIChat: () => void;
    }
}

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

document.addEventListener('DOMContentLoaded', async () => {

    // --- DOM Element References ---
    const exploitSections = document.getElementById('exploit-sections');
    const exploitCountSpan = document.getElementById('exploit-count');
    const totalExploitCountSpan = document.getElementById('total-exploit-count');
    // FIX: Cast searchInput to HTMLInputElement to access the 'value' property.
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const categoryFiltersContainer = document.getElementById('category-filters');
    const statusFiltersContainer = document.getElementById('status-filters');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const noResultsDiv = document.getElementById('no-results');
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const filtersSidebar = document.getElementById('filters-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const infoModal = document.getElementById('info-modal');

    // Modal Content References
    const modalTitle = document.getElementById('modal-title');
    const modalBadges = document.getElementById('modal-badges');
    const modalPros = document.getElementById('modal-pros');
    const modalNeutral = document.getElementById('modal-neutral');
    const modalCategory = document.getElementById('modal-category');
    const modalLastUpdate = document.getElementById('modal-last-update');
    const modalKeysystem = document.getElementById('modal-keysystem');
    // FIX: Cast modalWebsiteLink to HTMLAnchorElement to access the 'href' property.
    const modalWebsiteLink = document.getElementById('modal-website-link') as HTMLAnchorElement;

    // AI Chat References
    const aiChatWindow = document.getElementById('ai-chat-window');
    const aiChatButton = document.getElementById('ai-chat-button');
    const chatBody = document.getElementById('chat-body');
    // FIX: Cast chatInput to HTMLInputElement to access 'value' and 'disabled' properties.
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const chatInputForm = document.getElementById('chat-input-form');
    // FIX: Cast chatSubmitButton to HTMLButtonElement to access the 'disabled' property.
    const chatSubmitButton = chatInputForm.querySelector('button') as HTMLButtonElement;

    // Stats & Features References
    const statTotal = document.getElementById('stat-total');
    const statFree = document.getElementById('stat-free');
    const statPaid = document.getElementById('stat-paid');
    const statUpdated = document.getElementById('stat-updated');
    const recentExploitsList = document.getElementById('recent-exploits-list');
    // FIX: Cast sortSelect to HTMLSelectElement to access the 'value' property.
    const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;


    // --- Placeholder Alert Function ---
    let messageTimeout;
    const messageBox = document.getElementById('placeholder-message');

    window.showPlaceholderMessage = (message) => { // Make it globally accessible for inline onclick
        clearTimeout(messageTimeout);
        messageBox.textContent = message;

        messageBox.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-cyan', 'text-white', 'text-gray-900');

        // Set colors based on content
        if (message.includes('Warning')) {
            messageBox.classList.add('bg-yellow-500', 'text-gray-900');
        } else if (message.includes('Error')) {
            messageBox.classList.add('bg-red-500', 'text-white');
        } else {
            messageBox.classList.add('bg-cyan', 'text-gray-900');
        }

        messageBox.classList.add('show');
        messageTimeout = setTimeout(() => {
            messageBox.classList.remove('show');
        }, 3000);
    };

    const exploitsData = [
        // ----------------------------------------------------------------------
        // --- Windows Script Executor Exploits (Updated with current status) ---
        // ----------------------------------------------------------------------
        { name: 'Zenith', version: '2.0.27', statusText: 'Recommended', price: 'Paid ($6.49 Weekly)', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['$6.49 Weekly Subscription required'], updated: true, keySystem: false, lastUpdate: '11/07/2025 at 7:03 PM UTC', website: 'zenith.win' },
        { name: 'Wave', version: '1.3.b.1', statusText: 'Longest Running', price: 'Paid ($7.49 Weekly)', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['$7.49 Weekly Subscription required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 10:54 PM UTC', website: 'getwave.gg' },
        { name: 'Velocity', version: '0.5.7', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['98% sUNC', 'Multi-Inject', 'Decompiler', 'No Keysystem'], pros: ['98% sUNC', 'Multi-Inject Support', 'Decompiler', 'Completely Free (No Keysystem)', 'Level 8 Execution Environment'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '11/06/2025 at 6:30 AM UTC', website: 'https://www.getvelocity.live/' },
        { name: 'Swift', version: 'v1.6.3', statusText: 'Free (Key System)', price: 'Free', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC', 'Multi-Inject Support', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: false, keySystem: true, lastUpdate: '08/20/2025 at 10:49 PM UTC', website: 'getswift.vip' },
        { name: 'Delta', version: '8', statusText: 'Multi-Platform', price: 'Free', category: 'Windows Script Executor', features: ['100% sUNC', 'Decompiler'], pros: ['100% sUNC', 'Cross-Platform Availability (Win, iOS, Android)', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'deltaexploits.gg' }, // kept Windows entry version as-is (no Windows-specific version in status list)
        { name: 'LX63', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['95% sUNC', 'Decompiler', 'No Keysystem'], pros: ['95% sUNC', 'Decompiler', 'No Keysystem', 'Level 8 Execution Environment'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'lx63.xyz' }, // unchanged (not mentioned)
        { name: 'Volcano', version: 'v3.1.20', statusText: 'Free (Key System)', price: 'Free', category: 'Windows Script Executor', features: ['94% sUNC', 'Decompiler'], pros: ['94% sUNC', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '11/06/2025 at 1:57 PM UTC', website: 'volcano.wtf' },
        { name: 'KRNL', version: '8', statusText: 'Popular Free', price: 'Free', category: 'Windows Script Executor', features: ['80% sUNC', 'Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', '80% sUNC', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'krnl.cat' },
        { name: 'Potassium', version: '1.8.8', statusText: 'Warning', price: 'Paid ($20 Lifetime)', category: 'Windows Script Executor', features: ['96% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['Multi-Inject support', 'Has a decompiler', '96% sUNC', 'Level 8 Execution Environment', 'Lifetime License'], neutralNotes: [], cons: ['$20 Lifetime license required (high initial cost)', 'Devs operate under fresh accounts, identities are unknown'], updated: true, keySystem: false, lastUpdate: '11/07/2025 at 6:13 PM UTC', website: 'potassium.pro' },
        { name: 'SirHurt', version: 'V5.401', statusText: 'Long-Running', price: 'Paid ($2.80 Weekly)', category: 'Windows Script Executor', features: ['97% sUNC', 'Decompiler'], pros: ['Has a decompiler', '97% sUNC', 'Exploit running since 2015', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['$2.80 Weekly subscription required'], updated: true, keySystem: false, lastUpdate: '11/06/2025 at 8:54 PM UTC', website: 'sirhurt.net' },
        { name: 'CodeX', version: '8', statusText: 'Advanced Features', price: 'Paid', category: 'Windows Script Executor', features: ['Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', 'Advanced features', 'Level 8 Execution Environment'], neutralNotes: ['Uses core technology from ArceusX'], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'codex.lol' }, // Windows entry retained (Android/other OS entries handled below)
        { name: 'VegaX', version: '8', statusText: 'Short Key Duration', price: 'Free', category: 'Windows Script Executor', features: ['2 day long keys'], pros: ['Keys last 2 days (less hassle)', 'Free', 'Level 8 Execution Environment'], neutralNotes: ['Uses core technology from ArceusX'], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'vegax.gg' },
        { name: 'Seliware', version: 'insurreccion-1.3.0.6', statusText: 'Reliable', price: 'Paid ($9.99 Monthly)', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['Multi-Inject support', 'Has a decompiler', '100% sUNC (Excellent reliability)', 'Excellent support', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['$9.99 Monthly Subscription required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 11:03 PM UTC', website: 'seliware.com' },
        { name: 'Xeno', version: '1.2.90', statusText: 'Basic Features', price: 'Free', category: 'Windows Script Executor', features: ['40% sUNC', 'Decompiler', 'No Keysystem'], pros: ['Has a decompiler', 'No Keysystem', 'Free'], neutralNotes: ['Level 3 Execution Environment', '40% sUNC (Basic performance)'], cons: [], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:58 PM UTC', website: 'xeno.onl' },
        { name: 'Solara', version: '3.200', statusText: 'Basic Features', price: 'Free', category: 'Windows Script Executor', features: ['51% sUNC', 'Decompiler', 'No Keysystem'], pros: ['51% sUNC', 'Decompiler', 'No Keysystem', 'Free'], neutralNotes: ['Level 3 Execution Environment'], cons: [], updated: true, keySystem: false, lastUpdate: '11/06/2025 at 1:37 AM UTC', website: 'getsolara.dev' },

        // --- New Windows Script Executor Exploit ---
        { name: 'Bunni.lol', version: '2.4.0 HOTFIX', statusText: 'Premium', price: 'Key System', category: 'Windows Script Executor', features: ['100% sUNC', 'Decompiler'], pros: ['100% sUNC', 'Has a decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '11/07/2025 at 7:21 PM UTC', website: 'bunni.lol' },

        // --- Older/Less Updated Windows Script Executor Exploits (Retained/Updated) ---
        { name: 'Synapse Z', version: '0.5.0.3', statusText: 'Closed Beta', price: 'Paid ($4 Weekly)', category: 'Windows Script Executor', features: [], pros: ['Reputable team'], neutralNotes: ['Closed Beta access only'], cons: ['$4 Weekly Subscription required', 'Not widely available'], updated: false, keySystem: false, lastUpdate: '10/09/2025 at 3:45 AM UTC', website: 'synap.se' },
        { name: 'Nucleus', version: '1.1.3', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['sUNC'], pros: ['Completely Free', 'Simple interface'], neutralNotes: ['Low/Unknown sUNC rating'], cons: [], updated: false, keySystem: false, lastUpdate: '09/16/2025 at 9:07 AM UTC', website: 'nucleus.link' },
        { name: 'Lovreware', version: '0.0.2-dev', statusText: 'Closed Beta', price: 'Paid ($1000 per execution)', category: 'Windows Script Executor', features: [], pros: [], neutralNotes: ['Early Development Stage'], cons: ['Closed Beta access only', '$1000 per execution (highly restricted)'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:12 PM UTC', website: 'lovreware.dev' },

        // ------------------------------------------------------------------
        // --- Mac Script Executor Exploits (Updated with current status) ---
        // ------------------------------------------------------------------
        { name: 'Hydrogen', version: '697.0925', statusText: 'Free macOS Exploit', price: 'Key System', category: 'Mac Script Executor', features: ['96% sUNC', 'Decompiler'], pros: ['Free for macOS', 'Has a decompiler', '96% sUNC', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: false, keySystem: true, lastUpdate: '10/29/2025 at 8:01 PM UTC', website: 'hydrogen.lat' },
        { name: 'Macsploit', version: '1.9.6s', statusText: 'Powerful macOS', price: 'Paid ($9.99 Lifetime)', category: 'Mac Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler', 'Trial version'], pros: ['100% sUNC', 'Multi-Inject support', 'Has a decompiler', 'Trial version available', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['$9.99 Lifetime License required'], updated: false, keySystem: false, lastUpdate: '11/02/2025 at 1:56 AM UTC', website: 'raptor.fun' },
        { name: 'Synapse Mac', version: 'saba.from.hydrogen.is.gay', statusText: 'Free', price: 'Free', category: 'Mac Script Executor', features: ['sUNC'], pros: ['Free for Mac users'], neutralNotes: [], cons: [], updated: false, keySystem: false, lastUpdate: '10/22/2025 at 6:27 PM UTC', website: 'synap.se/mac' },
        { name: 'Opiumware', version: 'v2.0.2', statusText: 'Free', price: 'Free', category: 'Mac Script Executor', features: ['sUNC'], pros: ['Free'], neutralNotes: [], cons: ['Less frequent updates'], updated: false, keySystem: false, lastUpdate: '09/28/2025 at 9:29 PM UTC', website: 'opiumware.io' },

        // --------------------------------------------------------------------------------
        // --- Mobile Script Executor Exploits (Android / iOS) (Updated with current status) ---
        // --------------------------------------------------------------------------------
        { name: 'Cryptic', version: 'Version-2.696.799', statusText: 'Multi-Platform', price: 'Paid', category: 'Mobile Script Executor', features: ['97% sUNC', 'Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', '97% sUNC', 'Available on multiple platforms', 'Level 8 Execution Environment'], neutralNotes: ['Android uses module from ArceusX', 'Key System in use'], cons: ['Subscription required'], updated: false, keySystem: true, lastUpdate: '11/06/2025 at 7:14 PM UTC', website: 'getcryptic.net' },
        { name: 'Delta Android', version: '2.697.926', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on Android', 'Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '11/05/2025 at 5:33 PM UTC', website: 'delta.app' },
        { name: 'ArceusX', version: '8', statusText: 'Long-Standing Mobile', price: 'Paid', category: 'Mobile Script Executor', features: ['VNG Support'], pros: ['Long-standing reliability in mobile scene', 'VNG Support', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'spdmteam.com' },
        { name: 'Krnl Mobile', version: '2.695.956', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on Android', 'Free'], neutralNotes: ['Key System in use'], cons: ['Less frequent updates'], updated: false, keySystem: true, lastUpdate: '11/03/2025 at 9:10 PM UTC', website: 'krnl.cat/android' },
        { name: 'Delta iOS', version: '2.697.925', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on iOS', 'Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '11/05/2025 at 10:26 PM UTC', website: 'delta.app/ios' },

        // --- New Mobile Script Executor Exploit (iOS) ---
        { name: 'Krnl iOS', version: '2.695.955', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on iOS', 'Free'], neutralNotes: ['Key System in use'], cons: ['Less frequent updates'], updated: false, keySystem: true, lastUpdate: '11/03/2025 at 9:11 PM UTC', website: 'krnl.cat/ios' },

        // --- New Mobile Script Executor Exploit (Android - CodeX) ---
        { name: 'CodeX Android', version: '2.696.799', statusText: 'Free', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Free for Android'], neutralNotes: ['Uses core technology from ArceusX'], cons: ['Not Updated'], updated: false, keySystem: true, lastUpdate: '11/06/2025 at 7:14 PM UTC', website: 'codex.lol/android' },


        // -------------------------------------------------------------------
        // --- Windows External Exploits (Updated with current status) ---
        // -------------------------------------------------------------------
        { name: 'Matcha', version: '1.7.9', statusText: 'Premium', price: 'Paid ($9.99 Lifetime)', category: 'Windows External', features: ['Decompiler', 'Code Explorer', 'Hybrid-Kernel'], pros: ['Hybrid-Kernel technology', 'Decompiler', 'Code Explorer'], neutralNotes: ['No public website, Discord only.'], cons: ['$9.99 Lifetime License required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:08 PM UTC', website: 'discord.com/invite/matchalol4' },
        { name: 'Aimmy', version: 'External', statusText: 'AI-Based', price: 'Free', category: 'Windows External', features: ['Supports other games', 'No Keysystem', 'AI-based'], pros: ['Supports other games', 'No keysystem', 'AI-based for unique features', 'Free'], neutralNotes: ['Requires GTX 1050 or better', 'Requires training the model'], cons: ['High system requirements'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'aimmy.dev' },
        { name: 'Severe', version: 'v2', statusText: 'Good External', price: 'Paid ($20 Lifetime)', category: 'Windows External', features: ['Luau environment', 'Usermode product', 'Rich in features'], pros: ['Has a Luau environment', 'Usermode product (safer)', 'Rich in features', 'Lifetime License'], neutralNotes: [], cons: ['Lifetime license required (high initial cost)'], updated: true, keySystem: false, lastUpdate: '11/08/2025 at 11:12 PM UTC', website: 'discord.com/invite/4QmWjQCgzV' },
        { name: 'Ronin', version: 'Version-3.7.2', statusText: 'Lifetime Sub.', price: 'Paid ($9.89 Lifetime)', category: 'Windows External', features: ['Amazing optimization', 'Usermode product', 'Rich in features'], pros: ['Amazing optimization', 'Usermode product (safer)', 'Rich in features', 'Lifetime access'], neutralNotes: [], cons: ['Expensive one-time payment'], updated: true, keySystem: false, lastUpdate: '11/09/2025 at 1:14 AM UTC', website: 'getronin.xyz' },
        { name: 'Serotonin', version: 'v1', statusText: 'Usermode External', price: 'Paid ($9.49 Monthly)', category: 'Windows External', features: ['Lua env', 'Code explorer', 'Usermode product', 'Rich in features'], pros: ['Has a Lua env & code explorer', 'Usermode product (safer)', 'Rich in features'], neutralNotes: [], cons: ['$9.49 Monthly Subscription required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:15 PM UTC', website: 'serotonin.win' },
        { name: 'DX9WARE', version: '1.1.149', statusText: 'External Software', price: 'Paid ($3.25 Weekly)', category: 'Windows External', features: ['Decompiler', 'Code explorer', 'Rich in features', 'Kernel product'], pros: ['Has a decompiler & code explorer', 'Rich in features'], neutralNotes: [], cons: ['Kernel product (higher risk)', '$3.25 Weekly subscription required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:36 PM UTC', website: 'cultofintellect.com' },
        { name: 'Yerba', version: 'v2', statusText: 'External Usermode', price: 'Paid ($9.99 Lifetime)', category: 'Windows External', features: ['Amazing optimization', 'Usermode Product', 'Decompiler'], pros: ['Amazing optimization', 'Usermode Product (safer)', 'Has a decompiler', 'Lifetime License'], neutralNotes: [], cons: ['$9.99 Lifetime license required (high initial cost)'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:59 PM UTC', website: 'yerba.wtf' },
        { name: 'Matrix', version: 'Hub v2', statusText: 'Cheap External', price: 'Paid ($5 Lifetime)', category: 'Windows External', features: ['Usermode product', 'Very cheap price'], pros: ['Usermode product (safer)', 'Very cheap price (Lifetime)'], neutralNotes: [], cons: ['$5 Lifetime License required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:05 PM UTC', website: 'key-empire.com' },
        { name: 'Photon', version: '5.4', statusText: 'Paid', price: 'Paid ($20 Lifetime)', category: 'Windows External', features: [], pros: [], neutralNotes: [], cons: ['$20 Lifetime License required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:15 PM UTC', website: 'photon.io' },
        { name: 'Valex External', version: 'BUILD_UPD_5.0', statusText: 'Free (Key System)', price: 'Free', category: 'Windows External', features: [], pros: ['Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '11/05/2025 at 9:04 PM UTC', website: 'valex.app/ext' },
        { name: 'Ronin (Old)', version: 'Version-3.6.8', statusText: 'Paid', price: 'Paid ($9.89 Lifetime)', category: 'Windows External', features: [], pros: [], neutralNotes: ['Older version'], cons: ['No recent updates'], updated: false, keySystem: false, lastUpdate: '10/10/2025 at 9:48 AM UTC', website: 'getronin.xyz' },
        { name: 'Isabelle', version: '1.3.2', statusText: 'Paid', price: 'Paid ($9.99 Lifetime)', category: 'Windows External', features: [], pros: [], neutralNotes: [], cons: ['$9.99 Lifetime Subscription required'], updated: true, keySystem: false, lastUpdate: '11/05/2025 at 9:37 PM UTC', website: 'isabelle.one' },
        { name: 'Melatonin', version: '1.4.4k', statusText: 'Private', price: 'Paid ($9.99 Monthly)', category: 'Windows External', features: [], pros: [], neutralNotes: ['Private use only'], cons: ['Not publicly available', '$9.99 Monthly Subscription required'], updated: true, keySystem: false, lastUpdate: '11/07/2025 at 12:26 AM UTC', website: 'melatonin.pro' },

        // --- New Windows External Exploit ---
        { name: 'Assembly', version: '2.23', statusText: 'Paid', price: 'Paid ($9.99 Lifetime)', category: 'Windows External', features: [], pros: [], neutralNotes: [], cons: ['No recent updates'], updated: false, keySystem: false, lastUpdate: '08/07/2025 at 11:28 AM UTC', website: 'assembly.gg' }, // ADDED NEW ENTRY
    ];


    // --- Modal Functions (existing) ---
    window.openInfoModal = (exploitName) => {
        const exploit = exploitsData.find(e => e.name === exploitName);
        if (!exploit) {
            // FIX: Removed the extra 'Error' argument from showPlaceholderMessage call to match its definition which expects only one argument (the message string).
            window.showPlaceholderMessage(`Error: Exploit ${exploitName} not found.`);
            return;
        }

        modalTitle.textContent = `${exploit.name} (${exploit.version})`;

        // 1. Populate Badges
        let badgesHTML = `<span class="px-2 py-0.5 text-sm font-bold rounded-lg bg-gray-600 text-white">${exploit.statusText}</span>`;

        // Add key feature badge (sUNC/VNG)
        const sUNCFeature = exploit.features.find(f => f.includes('sUNC'));
        const vngFeature = exploit.features.find(f => f.includes('VNG'));
        if (sUNCFeature) {
            badgesHTML += `<span class="px-2 py-0.5 text-sm font-bold rounded-lg bg-green-900 text-green-light">${sUNCFeature}</span>`;
        } else if (vngFeature) {
            badgesHTML += `<span class="px-2 py-0.5 text-sm font-bold rounded-lg bg-blue-900 text-cyan">${vngFeature}</span>`;
        }
        modalBadges.innerHTML = badgesHTML;

        // 2. Populate Pros
        const pros = exploit.pros || exploit.features || [];
        modalPros.innerHTML = pros.map(p => `<li>${p}</li>`).join('');
        if (pros.length === 0) modalPros.innerHTML = '<li>No specific pros listed.</li>';

        // 3. Populate Neutral/Cons
        const neutral = (exploit.neutralNotes || []).concat(exploit.cons || []);
        // Use a separate color for Cons/Warnings that are more severe
        modalNeutral.innerHTML = neutral.map(n => {
            const isCon = exploit.cons && exploit.cons.includes(n);
            return `<li class="${isCon ? 'text-red-400' : 'text-yellow-400'}">${n}</li>`;
        }).join('');
        if (neutral.length === 0) modalNeutral.innerHTML = '<li>No major neutral notes or drawbacks reported.</li>';

        // 4. Populate Footer Info
        modalCategory.textContent = exploit.category;
        modalLastUpdate.textContent = exploit.lastUpdate;
        modalKeysystem.textContent = exploit.keySystem ? 'Yes' : 'No';

        // 5. Populate Website Link
        // Ensure URL has protocol for navigation
        let websiteUrl = exploit.website;
        if (websiteUrl && !websiteUrl.includes('://')) {
            if (websiteUrl.startsWith('discord.com/invite')) {
                websiteUrl = `https://${websiteUrl}`;
            } else {
                websiteUrl = `https://${websiteUrl}`;
            }
        }

        const isDiscordLink = websiteUrl && websiteUrl.includes('discord.com/invite');
        modalWebsiteLink.href = websiteUrl || '#';
        modalWebsiteLink.onclick = () => window.showPlaceholderMessage(`Navigating to: ${exploit.website}`);

        modalWebsiteLink.textContent = isDiscordLink ? 'JOIN DISCORD' : 'VISIT WEBSITE';
        modalWebsiteLink.classList.remove('bg-cyan', 'bg-indigo-600');
        modalWebsiteLink.classList.add(isDiscordLink ? 'bg-indigo-600' : 'bg-cyan');

        infoModal.classList.remove('hidden');
        infoModal.classList.add('flex'); // Use flex to center
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    };

    window.closeInfoModal = (event) => {
        // Check if the click occurred on the backdrop (the modal element itself) or the close button
        // FIX: Cast event.target to HTMLElement to access the 'closest' method.
        if (!event || event.target === infoModal || (event.target as HTMLElement).closest('button[onclick="closeInfoModal()"]')) {
            infoModal.classList.add('hidden');
            infoModal.classList.remove('flex');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    };


    // --- Functions (existing) ---

    function populateCategoryFilters() {
        // Get unique categories from the data
        const categories = [...new Set(exploitsData.map(e => e.category))];

        // Generate HTML for each category filter checkbox
        categoryFiltersContainer.innerHTML = categories.map(cat => `
            <label class="filter-label">
                <input type="checkbox" checked class="sr-only peer" data-category="${cat}">
                <span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan transition duration-200">
                    ${cat.replace(' Script Executor', '').replace('Windows External', 'External').replace('Mobile', 'Mobile/iOS/Android')}
                </span>
            </label>
        `).join('');
    }

    function createExploitCardHTML(exploit) {
        const isUpdated = exploit.updated;
        let statusClass = 'bg-gray-700 text-gray-300'; // Default status color

        // Determine primary status styling
        if (exploit.statusText === 'Premium') statusClass = 'bg-yellow-500 text-white font-bold shadow-md shadow-yellow-500/30';
        else if (exploit.statusText === 'Warning') statusClass = 'bg-red-700 text-white font-bold shadow-md shadow-red-700/30';
        else if (exploit.price === 'Free') statusClass = 'bg-green-700 text-white font-bold'; // Fixed to use price: 'Free' for green status
        else if (exploit.statusText === 'Multi-Platform') statusClass = 'bg-purple-700 text-white font-bold';
        else if (exploit.statusText === 'AI-Based') statusClass = 'bg-pink-700 text-white font-bold';

        // General status indicators for paid/other
        else if (!isUpdated) statusClass = 'bg-red-900 text-white';
        else if (exploit.price === 'Paid') statusClass = 'bg-gray-700 text-white';


        // Feature badge (sUNC is a common indicator, prioritize high score)
        let primaryBadge = '';
        const sUNCFeature = exploit.features.find(f => f.includes('sUNC'));
        const vngFeature = exploit.features.find(f => f.includes('VNG'));

        if (sUNCFeature) {
            primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-green-900 text-green-light">${sUNCFeature}</span>`;
        } else if (vngFeature) {
            primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-blue-900 text-cyan">${vngFeature}</span>`;
        } else {
            primaryBadge = `<span class="px-2 py-0.5 text-xs font-semibold rounded-lg bg-gray-800 text-gray-500">No Key Feature</span>`;
        }

        // --- Website Button Logic ---
        let websiteUrl = exploit.website;
        if (websiteUrl && !websiteUrl.includes('://')) {
            websiteUrl = `https://${websiteUrl}`;
        }

        const isDiscordLink = websiteUrl && websiteUrl.includes('discord.com/invite');
        const buttonText = isDiscordLink ? 'DISCORD' : 'WEBSITE';
        const buttonColor = isDiscordLink ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-cyan hover:bg-opacity-90';

        const websiteButton = exploit.website ? `
            <a href="${websiteUrl}"
               onclick="window.showPlaceholderMessage('Navigating to: ${exploit.website}')"
               target="_blank"
               class="w-2/3 inline-flex items-center justify-center px-2 py-2 text-sm font-bold rounded-lg shadow-lg
                          text-white ${buttonColor} transition duration-150 ease-in-out uppercase
                          focus:outline-none focus:ring-4 focus-ring-cyan focus:ring-opacity-50 tracking-wider">
                 <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                 ${buttonText}
            </a>
        ` : `
            <button disabled class="w-2/3 px-2 py-2 text-sm font-bold rounded-lg bg-gray-600 text-gray-400 cursor-not-allowed">
                WEBSITE N/A
            </button>
        `;

        return `
            <div class="exploit-card card-bg rounded-xl shadow-xl p-4 border border-gray-800 hover:border-cyan/50 transition duration-300 w-full">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-xl font-black text-cyan">${exploit.name} <span class="text-gray-400 text-sm font-normal">${exploit.version}</span></h3>
                        <p class="text-sm text-gray-400 mt-1">${exploit.category}</p>
                    </div>
                    <div class="flex flex-col items-end space-y-1">
                        ${primaryBadge}
                        <span class="px-2 py-0.5 text-xs font-semibold rounded-lg ${statusClass}">${exploit.statusText}</span>
                    </div>
                </div>

                <div class="flex justify-between items-center py-2 border-y border-gray-800/50">
                    <div class="flex items-center text-sm font-medium ${isUpdated ? 'text-green-light' : 'text-red-500'}">
                        <span class="w-3 h-3 rounded-full mr-2 ${isUpdated ? 'bg-green-light shadow-none' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}"></span>
                        ${isUpdated ? 'Updated' : 'Not Updated'}
                    </div>
                    <p class="text-xs text-gray-500">Last: ${exploit.lastUpdate.split(' at ')[0]}</p>
                </div>

                <div class="mt-3 flex space-x-2">
                    ${websiteButton}
                    <button onclick="window.openInfoModal('${exploit.name}')"
                            class="w-1/3 px-2 py-2 text-sm font-bold rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition duration-150">
                        INFO
                    </button>
                </div>
            </div>`;
    }

    // Update Stats Dashboard
    function updateStats() {
        const totalCount = exploitsData.length;
        const freeCount = exploitsData.filter(e => e.price === 'Free').length;
        const paidCount = exploitsData.filter(e => e.price === 'Paid').length;
        const updatedCount = exploitsData.filter(e => e.updated).length;

        statTotal.textContent = totalCount.toString();
        statFree.textContent = freeCount.toString();
        statPaid.textContent = paidCount.toString();
        statUpdated.textContent = updatedCount.toString();
    }

    // Populate Recently Updated Section
    function populateRecentlyUpdated() {
        const recentUpdates = exploitsData
            .filter(e => e.updated)
            .sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime())
            .slice(0, 8);

        recentExploitsList.innerHTML = recentUpdates.map(exploit => `
            <div class="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-cyan/50 transition cursor-pointer"
                 onclick="window.openInfoModal('${exploit.name}')">
                <p class="font-bold text-cyan text-sm truncate">${exploit.name}</p>
                <p class="text-xs text-gray-400 mt-1">${exploit.category.replace(' Script Executor', '')}</p>
                <p class="text-xs text-green-light mt-1">${exploit.lastUpdate.split(' at ')[0]}</p>
            </div>
        `).join('');
    }

    // Sort Exploits
    function sortExploits(exploits, sortValue) {
        const sorted = [...exploits];

        switch (sortValue) {
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return sorted.sort((a, b) => {
                    const priceA = a.price === 'Free' ? 0 : 999;
                    const priceB = b.price === 'Free' ? 0 : 999;
                    return priceA - priceB;
                });
            case 'price-desc':
                return sorted.sort((a, b) => {
                    const priceA = a.price === 'Free' ? 0 : 999;
                    const priceB = b.price === 'Free' ? 0 : 999;
                    return priceB - priceA;
                });
            case 'updated-desc':
                return sorted.sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime());
            case 'sunc-desc':
                return sorted.sort((a, b) => {
                    const getSuncScore = (features) => {
                        const suncFeature = features.find(f => f.includes('sUNC'));
                        if (!suncFeature) return 0;
                        const match = suncFeature.match(/(\d+)%/);
                        return match ? parseInt(match[1]) : 0;
                    };
                    return getSuncScore(b.features) - getSuncScore(a.features);
                });
            default:
                return sorted;
        }
    }

    function renderExploits() {
        const searchTerm = searchInput.value.toLowerCase();

        // Get all active category filters
        // FIX: Cast element to HTMLInputElement to access dataset property.
        const activeCategories = [...categoryFiltersContainer.querySelectorAll('input:checked')].map(el => (el as HTMLInputElement).dataset.category);

        // Get all active status/price filters
        // FIX: Cast element to HTMLInputElement to access dataset property.
        const activeStatuses = [...statusFiltersContainer.querySelectorAll('input:checked')].map(el => (el as HTMLInputElement).dataset.filter);

        let filteredExploits = exploitsData.filter(exploit => {
            // 1. Search Filter
            const searchMatch = exploit.name.toLowerCase().includes(searchTerm);

            // 2. Category Filter
            const categoryMatch = activeCategories.includes(exploit.category);

            // 3. Status/Price Filter
            // If no status filters are checked, all pass. Otherwise, check for matches.
            const statusMatch = activeStatuses.length === 0 ||
                (activeStatuses.includes('Updated') && exploit.updated) ||
                (activeStatuses.includes('Free') && exploit.price === 'Free') ||
                (activeStatuses.includes('Paid') && exploit.price === 'Paid') ||
                (activeStatuses.includes('Key System') && exploit.keySystem);

            return searchMatch && categoryMatch && statusMatch;
        });

        // Apply sorting
        const sortValue = sortSelect.value;
        filteredExploits = sortExploits(filteredExploits, sortValue);

        exploitSections.innerHTML = '';
        exploitCountSpan.textContent = filteredExploits.length.toString();

        if (filteredExploits.length === 0) {
            noResultsDiv.classList.remove('hidden');
        } else {
            noResultsDiv.classList.add('hidden');

            // Group filtered exploits by category for section headers
            const grouped = filteredExploits.reduce((acc, exploit) => {
                (acc[exploit.category] = acc[exploit.category] || []).push(exploit);
                return acc;
            }, {});

            // Render sections
            for (const category in grouped) {
                const sectionEl = document.createElement('section');
                const cardsHTML = grouped[category].map(createExploitCardHTML).join('');

                // Simple logic to pluralize category names
                const categoryTitle = `${category}s`;

                sectionEl.innerHTML = `
                    <h2 class="text-2xl font-bold mb-4 text-white">${categoryTitle}</h2>
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        ${cardsHTML}
                    </div>
                `;
                exploitSections.appendChild(sectionEl);
            }
        }
    }

    function setupEventListeners() {
        const allFilters = document.querySelectorAll('#category-filters input, #status-filters input');
        allFilters.forEach(input => input.addEventListener('change', renderExploits));

        // Use 'input' event for real-time searching
        searchInput.addEventListener('input', renderExploits);

        // Sorting dropdown
        sortSelect.addEventListener('change', renderExploits);

        // Reset functionality
        resetFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            sortSelect.value = 'default';
            // FIX: Cast input to HTMLInputElement to access the 'checked' property.
            allFilters.forEach(input => (input as HTMLInputElement).checked = false);
            // Re-check the necessary defaults
            // FIX: Cast element to HTMLInputElement to access the 'checked' property.
            (document.querySelector('#status-filters input[data-filter="Updated"]') as HTMLInputElement).checked = true;
            // FIX: Cast input to HTMLInputElement to access the 'checked' property.
            document.querySelectorAll('#category-filters input').forEach(input => (input as HTMLInputElement).checked = true);
            renderExploits();
            window.showPlaceholderMessage('Filters have been reset.');
        });

        // Mobile sidebar toggle logic
        const toggleSidebar = () => {
            filtersSidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('hidden');
            document.body.style.overflow = filtersSidebar.classList.contains('open') ? 'hidden' : 'auto';
        };

        mobileFilterBtn.addEventListener('click', toggleSidebar);
        closeSidebarBtn.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    // ====================================
    // === NEW AI CHAT WIDGET LOGIC ===
    // ====================================
    let chat;

    try {
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are the dertme.lol AI assistant. Your job is to help users understand Roblox exploits in a simple, friendly way.  
Explain stuff like sUNC, key systems, VNG, give updates on exploit status, talk about risks, and help users choose the right exploit for what they want to do.  
Keep the tone relaxed and easy to read. Always include this warning somewhere in your chat:
"⚠️ Remember: Using exploits violates Roblox ToS and can result in a permanent ban. Use at your own risk!"
Keep responses short and helpful. if user ask for script redirect them to scriptblox.com The user is looking at a website with the following exploit data, use it to answer questions about specific exploits if relevant:
                ${JSON.stringify(exploitsData.map(({ name, price, category, updated, features, pros }) => ({ name, price, category, updated, features, pros })), null, 2)}`
            },
        });
    } catch (e) {
        console.error("Could not initialize AI Chat", e);
        if (chatBody) {
            chatBody.innerHTML = `<div class="chat-message ai-message">There was an error initializing the AI assistant. Please check if an API key is configured and refresh the page.</div>`;
        }
    }


    window.toggleAIChat = () => {
        aiChatWindow.classList.toggle('hidden');
        // Give it a small delay before running the transition class
        setTimeout(() => {
            aiChatWindow.classList.toggle('open');
            if (aiChatWindow.classList.contains('open')) {
                chatInput.focus();
            }
        }, 10);
    };

    const createMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}-message`;
        // Basic markdown-to-html for bolding
        let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = processedText;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    };

    const generateAIResponse = async (userMessage) => {
        if (!chat) {
            createMessage("AI assistant is not available.", 'ai');
            return;
        }

        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat-message ai-message';
        typingIndicator.innerHTML = '<div class="ai-typing-indicator"></div><div class="ai-typing-indicator"></div><div class="ai-typing-indicator"></div>';
        chatBody.appendChild(typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const response = await chat.sendMessage({ message: userMessage });
            chatBody.removeChild(typingIndicator);
            createMessage(response.text, 'ai');

        } catch (error) {
            console.error("AI Response Error:", error);
            chatBody.removeChild(typingIndicator);
            createMessage("Sorry, I encountered an error. The service might be busy. Please try again in a moment.", 'ai');
        }
    };

    chatInputForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();

        if (message) {
            chatInput.disabled = true;
            chatSubmitButton.disabled = true;

            createMessage(message, 'user');
            await generateAIResponse(message);
            chatInput.value = ''; // Clear input

            chatInput.disabled = false;
            chatSubmitButton.disabled = false;
            chatInput.focus();
        }
    });

    // ====================================
    // === INITIALIZATION FINAL STEPS ===
    // ====================================
    totalExploitCountSpan.textContent = exploitsData.length.toString();
    updateStats(); // Update stats dashboard
    populateRecentlyUpdated(); // Populate recently updated section
    populateCategoryFilters();
    setupEventListeners();
    renderExploits(); // Initial render to display all data with default filters
});
