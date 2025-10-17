<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXECUTE.IO | Exploit Status Tracker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <!-- Font Awesome for icons -->
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

        /* --- Theme Colors & Glows --- */
        .header-bg { background-color: #171717; }
        .sidebar-bg { background-color: #111111; }
        .card-bg { background-color: #1a1a1a; }
        .text-cyan { color: #00ffff; }
        .text-green-light { color: #39ff14; }
        .border-green-light { border-color: #39ff14; }
        .focus-ring-cyan {
            --tw-ring-color: rgba(0, 255, 255, 0.5);
        }
        .exploit-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        /* --- Modal Styling --- */
        #info-modal {
            background-color: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            transition: opacity 0.3s ease-in-out;
            z-index: 1000;
        }
        .modal-content {
            max-height: 90vh;
            animation: fadeInScale 0.3s ease-out;
        }
        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        /* --- Placeholder Message Box --- */
        #placeholder-message {
            position: fixed; top: 20px; right: 20px; z-index: 2000;
            padding: 0.75rem 1.25rem; border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transform: translateX(120%); opacity: 0;
            background-color: #00ffff; color: #171717;
        }
        #placeholder-message.show { transform: translateX(0); opacity: 1; }

        /* --- Floating Shapes Animation --- */
        @keyframes float-up {
            0% { transform: translateY(0) scale(0.8); opacity: 0.5; }
            50% { opacity: 0.9; }
            100% { transform: translateY(-500px) scale(1.2); opacity: 0; }
        }
        .shape {
            position: absolute; font-size: 1rem; color: #00ffff;
            animation: float-up 10s infinite ease-out;
            pointer-events: none; z-index: 0;
            text-shadow: 0 0 10px #00ffff, 0 0 5px rgba(0, 255, 255, 0.5);
            font-weight: 900;
        }
        .shape:nth-child(1) { left: 10%; top: 50%; animation-delay: 0s; animation-duration: 8s; font-size: 1.2rem; }
        .shape:nth-child(2) { left: 30%; top: 80%; animation-delay: 2s; animation-duration: 12s; }
        .shape:nth-child(3) { left: 50%; top: 30%; animation-delay: 5s; animation-duration: 9s; font-size: 0.8rem; }
        .shape:nth-child(4) { left: 70%; top: 60%; animation-delay: 8s; animation-duration: 10s; }
        <div class="shape">^</div>
        .shape:nth-child(5) { left: 90%; top: 10%; animation-delay: 1s; animation-duration: 14s; font-size: 1.5rem; }

        /* --- Custom Scrollbar --- */
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #00ffff; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background-color: #171717; }
        
        /* --- Sidebar & Filter Toggling --- */
        #filters-sidebar { transition: transform 0.3s ease-in-out; }
        @media (max-width: 767px) {
            #filters-sidebar {
                position: fixed; top: 0; left: 0; height: 100%; z-index: 60;
                transform: translateX(-100%);
            }
            #filters-sidebar.open { transform: translateX(0); }
            #sidebar-overlay {
                position: fixed; inset: 0; background-color: rgba(0,0,0,0.5);
                z-index: 59; transition: opacity 0.3s;
            }
        }
        .filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (min-width: 768px) { .filter-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); } }

        /* --- Filter Checkbox Style --- */
        .peer:checked + .filter-span {
            background-color: #00ffff; color: #171717; font-weight: 700;
            border-color: #00ffff; box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
        }
    </style>
</head>
<body class="text-white min-h-screen relative">

    <!-- Overlay for mobile sidebar -->
    <div id="sidebar-overlay" class="hidden md:hidden"></div>
    <!-- Custom Placeholder Message Box -->
    <div id="placeholder-message" class="font-semibold"></div>

    <!-- Background Animated Shapes -->
    <div class="shape">&lt;/&gt;</div>
    <div class="shape">#</div>
    <div class="shape">{ }</div>
    <div class="shape">$</div>
    <div class="shape">^</div>

    <!-- Top Banner -->
    <div class="bg-blue-600 p-2 text-center text-sm font-semibold sticky top-0 z-50">
        The #1 Roblox exploit status tracker. A recreation of BabyHamsta's ExploitStatus.IO
    </div>

    <!-- Header / Navigation -->
    <header class="header-bg p-4 sticky top-[38px] z-40 shadow-xl border-b border-gray-800">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" class="text-3xl font-black text-cyan" onclick="showPlaceholderMessage('Navigated to Home')">EXECUTE.<span class="text-white">IO</span></a>
            
            <!-- Search Bar (Desktop) -->
            <div class="flex-grow max-w-lg mx-8 hidden lg:block">
                <div class="relative">
                    <input id="search-input" type="text" placeholder="Search exploits by name..." class="w-full p-2 pl-10 card-bg text-sm rounded-lg border border-gray-700 focus:border-cyan focus:ring focus-ring-cyan">
                    <svg class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            <nav class="flex space-x-4 items-center">
                <!-- Mobile Filter Button -->
                <button id="mobile-filter-btn" class="text-cyan hover:text-white p-2 rounded-lg bg-gray-800 md:hidden shadow-md">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                </button>
                <a href="#" class="text-gray-300 hover:text-cyan font-semibold hidden lg:inline" onclick="showPlaceholderMessage('Navigated to Site Map')">Site</a>
                <a href="#" class="text-gray-300 hover:text-cyan font-semibold hidden lg:inline" onclick="showPlaceholderMessage('API Documentation Page')">API Docs</a>
            </nav>
        </div>
    </header>

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-4 relative z-10">

        <!-- Sidebar / Filters -->
        <aside id="filters-sidebar" class="w-64 sidebar-bg p-4 rounded-xl flex-shrink-0 md:sticky top-[108px] self-start shadow-2xl overflow-y-auto custom-scrollbar">
            <div class="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 class="text-xl font-bold text-cyan">Filters</h3>
                   <!-- Close Button for Mobile -->
                   <button id="close-sidebar-btn" class="md:hidden text-gray-400 hover:text-white">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                   </button>
            </div>
            
            <button id="reset-filters-btn" class="w-full mb-6 py-2 px-4 text-sm font-bold rounded-lg transition text-red-400 border border-red-500/50 hover:bg-red-900/20 flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.592 10l-5.6-5.6m-2.28 2.28A7 7 0 1115 10a7.002 7.002 0 01-2.28 5.28zM15 10a5 5 0 10-10 0 5 5 0 0010 0zM4.1 15H9v-5"></path></svg>
                Reset Filters
            </button>
            
            <!-- Platform Filters (Populated by JS) -->
            <div class="mb-6">
                <h4 class="font-bold text-gray-300 mb-2">Platform</h4>
                <div id="category-filters" class="grid gap-2 filter-grid text-sm"></div>
            </div>

            <!-- Status and Price Filters (Hardcoded for simplicity) -->
            <div class="mb-6">
                <h4 class="font-bold text-gray-300 mb-2 border-t border-gray-800 pt-4">Status & Price</h4>
                <div id="status-filters" class="grid gap-2 filter-grid text-sm">
                    <label class="filter-label"><input type="checkbox" checked class="sr-only peer" data-filter="Updated"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan transition duration-200">Updated</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Free"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan transition duration-200">Free</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Key System"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan transition duration-200">Key System</span></label>
                    <label class="filter-label"><input type="checkbox" class="sr-only peer" data-filter="Paid"><span class="filter-span w-full p-2 rounded-lg text-center bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan transition duration-200">Paid</span></label>
                </div>
            </div>
        </aside>

        <!-- Exploit Cards List -->
        <main class="flex-grow w-full md:w-3/4">
            <!-- Hero Card -->
            <div class="card-bg p-6 rounded-xl mb-6 shadow-2xl relative overflow-hidden border border-cyan/10">
                <div class="absolute inset-0 flex items-center justify-center opacity-10"><span class="text-9xl font-black text-white/5 select-none">EXECUTE.IO</span></div>
                <div class="relative z-10">
                    <h2 class="text-3xl font-black text-cyan mb-2">Exploit Status Tracker</h2>
                    <p class="text-gray-400">Real-time updates on exploits across all major platforms.</p>
                </div>
            </div>

            <!-- Count Display -->
            <div class="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                <span class="text-sm text-gray-400">Showing <span id="exploit-count" class="font-bold text-white">0</span> of <span id="total-exploit-count" class="font-bold text-white">0</span> exploits</span>
            </div>

            <!-- Exploit Sections (Rendered by JS) -->
            <div id="exploit-sections" class="space-y-10"></div>
            
            <!-- No Results Message -->
            <div id="no-results" class="hidden text-center py-16 card-bg rounded-lg mt-6">
                <h3 class="text-2xl font-bold text-cyan">No Exploits Found</h3>
                <p class="text-gray-400 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
        </main>
    </div>

    <!-- Info Modal (Hidden by Default) -->
    <div id="info-modal" class="fixed inset-0 hidden items-center justify-center p-4" onclick="closeInfoModal(event)">
        <div id="modal-content" class="modal-content card-bg w-full max-w-xl rounded-xl shadow-2xl p-6 border border-cyan/30 overflow-y-auto" onclick="event.stopPropagation()">
            <div class="flex justify-between items-start border-b border-gray-700 pb-3 mb-4">
                <h2 id="modal-title" class="text-3xl font-black text-cyan">Exploit Name</h2>
                <button onclick="closeInfoModal()" class="text-gray-400 hover:text-white transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <div id="modal-badges" class="flex flex-wrap gap-2 mb-4">
                <!-- Status badges will be inserted here -->
            </div>

            <div class="space-y-6">
                <!-- Pros Section -->
                <div class="bg-gray-800/50 p-4 rounded-lg">
                    <h3 class="text-xl font-bold text-green-light mb-2 flex items-center"><i class="fas fa-check-circle mr-2"></i> Pros</h3>
                    <ul id="modal-pros" class="space-y-1 text-gray-300 ml-5 list-disc">
                        <!-- Pros will be inserted here -->
                    </ul>
                </div>

                <!-- Neutral/Warnings Section -->
                <div class="bg-gray-800/50 p-4 rounded-lg">
                    <h3 class="text-xl font-bold text-yellow-500 mb-2 flex items-center"><i class="fas fa-exclamation-triangle mr-2"></i> Neutral / Warnings</h3>
                    <ul id="modal-neutral" class="space-y-1 text-gray-300 ml-5 list-disc">
                        <!-- Neutral notes will be inserted here -->
                    </ul>
                </div>
                
                <!-- Footer Info -->
                <div class="text-sm text-gray-500 border-t border-gray-800 pt-4">
                    <p><strong>Platform:</strong> <span id="modal-category" class="text-white"></span></p>
                    <p><strong>Last Updated:</strong> <span id="modal-last-update" class="text-white"></span></p>
                    <p><strong>Keysystem:</strong> <span id="modal-keysystem" class="text-white"></span></p>
                </div>

                <!-- Website Link -->
                 <a id="modal-website-link" href="#" target="_blank"
                   class="w-full inline-flex items-center justify-center px-4 py-3 text-lg font-bold rounded-lg shadow-xl 
                          text-white bg-cyan hover:bg-opacity-90 transition duration-150 ease-in-out uppercase 
                          focus:outline-none focus:ring-4 focus-ring-cyan focus:ring-opacity-50 tracking-wider">
                    <i class="fas fa-external-link-alt mr-2"></i> VISIT WEBSITE
                </a>
            </div>
        </div>
    </div>


    <!-- Footer -->
    <footer class="bg-black/50 text-gray-500 text-center p-6 mt-10">
        <p class="mb-4 text-sm">
            <a href="#" onclick="showPlaceholderMessage('API Docs Page')" class="hover:text-white">API Docs</a> | 
            <a href="#" onclick="showPlaceholderMessage('Privacy Policy Page')" class="hover:text-white">Privacy Policy</a> |
            <a href="#" onclick="showPlaceholderMessage('Contact Page')" class="hover:text-white">Contact</a>
        </p>
        <p class="text-xs">&copy; 2023-2025 Vienna Softworks. All rights reserved. Recreation of ExploitStatus.IO.</p>
    </footer>

    <!-- JavaScript Logic -->
    <script>
    document.addEventListener('DOMContentLoaded', () => {

        // --- DOM Element References ---
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

        // Modal Content References
        const modalTitle = document.getElementById('modal-title');
        const modalBadges = document.getElementById('modal-badges');
        const modalPros = document.getElementById('modal-pros');
        const modalNeutral = document.getElementById('modal-neutral');
        const modalCategory = document.getElementById('modal-category');
        const modalLastUpdate = document.getElementById('modal-last-update');
        const modalKeysystem = document.getElementById('modal-keysystem');
        const modalWebsiteLink = document.getElementById('modal-website-link');


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

        // --- Data Structure (Updated with explicit pros/neutral/cons and fixed links) ---
        const exploitsData = [
            // --- Windows Script Executor Exploits ---
            { name: 'Zenith', version: '8', statusText: 'Premium', price: 'Paid', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'zenith.win' },
            { name: 'Wave', version: '8', statusText: 'Premium', price: 'Paid', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC (High performance)', 'Multi-Inject Support', 'Built-in Decompiler', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getwave.gg' },
            { name: 'Velocity', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['98% sUNC', 'Multi-Inject', 'Decompiler', 'No Keysystem'], pros: ['98% sUNC', 'Multi-Inject Support', 'Decompiler', 'Completely Free (No Keysystem)', 'Level 8 Execution Environment'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getvelocity.lol' },
            { name: 'Swift', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['100% sUNC', 'Multi-Inject Support', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getswift.vip' },
            { name: 'Delta', version: '8', statusText: 'Multi-Platform', price: 'Free', category: 'Windows Script Executor', features: ['100% sUNC', 'Decompiler'], pros: ['100% sUNC', 'Cross-Platform Availability (Win, iOS, Android)', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'deltaexploits.gg' },
            { name: 'LX63', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['95% sUNC', 'Decompiler', 'No Keysystem'], pros: ['95% sUNC', 'Decompiler', 'No Keysystem', 'Level 8 Execution Environment'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'lx63.xyz' },
            { name: 'Volcano', version: '8', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['94% sUNC', 'Decompiler'], pros: ['94% sUNC', 'Decompiler', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'volcano.wtf' },
            { name: 'KRNL', version: '8', statusText: 'Popular Free', price: 'Free', category: 'Windows Script Executor', features: ['80% sUNC', 'Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', '80% sUNC', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'krnl.cat' },
            { name: 'Potassium', version: '8', statusText: 'Warning', price: 'Paid', category: 'Windows Script Executor', features: ['96% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['Multi-Inject support', 'Has a decompiler', '96% sUNC', 'Level 8 Execution Environment', 'Lifetime License'], neutralNotes: [], cons: ['Lifetime license required (high initial cost)', 'Devs operate under fresh accounts, identities are unknown'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'potassium.pro' }, // CON UPDATED
            { name: 'SirHurt', version: '8', statusText: 'Long-Running', price: 'Paid', category: 'Windows Script Executor', features: ['97% sUNC', 'Decompiler'], pros: ['Has a decompiler', '97% sUNC', 'Exploit running since 2015', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Weekly subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'sirhurt.net' },
            { name: 'CodeX', version: '8', statusText: 'Advanced Features', price: 'Paid', category: 'Windows Script Executor', features: ['Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', 'Advanced features', 'Level 8 Execution Environment'], neutralNotes: ['Uses core technology from ArceusX'], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'codex.lol' },
            { name: 'VegaX', version: '8', statusText: 'Short Key Duration', price: 'Free', category: 'Windows Script Executor', features: ['2 day long keys'], pros: ['Keys last 2 days (less hassle)', 'Free', 'Level 8 Execution Environment'], neutralNotes: ['Uses core technology from ArceusX'], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'vegax.gg' },
            { name: 'Seliware', version: '8', statusText: 'Reliable', price: 'Paid', category: 'Windows Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler'], pros: ['Multi-Inject support', 'Has a decompiler', '100% sUNC (Excellent reliability)', 'Excellent support', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'seliware.com' },
            { name: 'Xeno', version: '3', statusText: 'Basic Features', price: 'Free', category: 'Windows Script Executor', features: ['40% sUNC', 'Decompiler', 'No Keysystem'], pros: ['Has a decompiler', 'No Keysystem', 'Free'], neutralNotes: ['Level 3 Execution Environment', '40% sUNC (Basic performance)'], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'xeno.onl' },
            { name: 'Solara', version: '3', statusText: 'Basic Features', price: 'Free', category: 'Windows Script Executor', features: ['51% sUNC', 'Decompiler', 'No Keysystem'], pros: ['51% sUNC', 'Decompiler', 'No Keysystem', 'Free'], neutralNotes: ['Level 3 Execution Environment'], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getsolara.dev' },
            // Older/Less Updated Windows Script Executor Exploits (Retained)
            { name: 'Synapse Z', version: '0.5.0.3', statusText: 'Closed Beta', price: 'Paid', category: 'Windows Script Executor', features: [], pros: ['Reputable team'], neutralNotes: ['Closed Beta access only'], cons: ['Not widely available'], updated: false, keySystem: false, lastUpdate: '10/09/2025 at 3:45 AM UTC', website: 'synap.se' },
            { name: 'Nucleus', version: '1.1.3', statusText: 'Free', price: 'Free', category: 'Windows Script Executor', features: ['sUNC'], pros: ['Completely Free', 'Simple interface'], neutralNotes: ['Low/Unknown sUNC rating'], cons: [], updated: false, keySystem: false, lastUpdate: '09/16/2025 at 9:07 AM UTC', website: 'nucleus.link' },
            { name: 'Lovreware', version: '0.0.2-dev', statusText: 'Closed Beta', price: 'Paid', category: 'Windows Script Executor', features: [], pros: [], neutralNotes: ['Early Development Stage'], cons: ['Closed Beta access only'], updated: false, keySystem: false, lastUpdate: '10/09/2025 at 3:47 AM UTC', website: 'lovreware.dev' }, 

            // --- Mac Script Executor Exploits ---
            { name: 'Hydrogen', version: '8', statusText: 'Free macOS Exploit', price: 'Free', category: 'Mac Script Executor', features: ['96% sUNC', 'Decompiler'], pros: ['Free for macOS', 'Has a decompiler', '96% sUNC', 'Level 8 Execution Environment'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'hydrogen.lat' },
            { name: 'Macsploit', version: '8', statusText: 'Powerful macOS', price: 'Paid', category: 'Mac Script Executor', features: ['100% sUNC', 'Multi-Inject', 'Decompiler', 'Trial version'], pros: ['100% sUNC', 'Multi-Inject support', 'Has a decompiler', 'Trial version available', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Paid (Lifetime license)'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'raptor.fun' },
            { name: 'Synapse Mac', version: 'i_forgot', statusText: 'Free', price: 'Free', category: 'Mac Script Executor', features: ['sUNC'], pros: ['Free for Mac users'], neutralNotes: [], cons: [], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 5:53 PM UTC', website: 'synap.se/mac' },
            { name: 'Opiumware', version: 'v2.0.2', statusText: 'Free', price: 'Free', category: 'Mac Script Executor', features: ['sUNC'], pros: ['Free'], neutralNotes: [], cons: ['Less frequent updates'], updated: false, keySystem: false, lastUpdate: '09/28/2025 at 9:29 PM UTC', website: 'opiumware.io' },


            // --- Mobile Script Executor Exploits (Android / iOS) ---
            { name: 'Cryptic', version: '8', statusText: 'Multi-Platform', price: 'Paid', category: 'Mobile Script Executor', features: ['97% sUNC', 'Decompiler', 'VNG Support'], pros: ['Has a decompiler', 'VNG Support', '97% sUNC', 'Available on multiple platforms', 'Level 8 Execution Environment'], neutralNotes: ['Android uses module from ArceusX', 'Key System in use'], cons: ['Subscription required'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getcryptic.net' },
            { name: 'Delta Android', version: '2.693.960', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on Android', 'Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/13/2025 at 4:54 AM UTC', website: 'delta.app' },
            { name: 'ArceusX', version: '8', statusText: 'Long-Standing Mobile', price: 'Paid', category: 'Mobile Script Executor', features: ['VNG Support'], pros: ['Long-standing reliability in mobile scene', 'VNG Support', 'Level 8 Execution Environment'], neutralNotes: [], cons: ['Fails sUNC checks'], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'spdmteam.com' },
            { name: 'Krnl Mobile', version: '2.684.688', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on Android', 'Free'], neutralNotes: ['Key System in use'], cons: ['Less frequent updates'], updated: false, keySystem: true, lastUpdate: '10/01/2025 at 6:07 AM UTC', website: 'krnl.cat/android' },
            { name: 'Delta iOS', version: '2.693.956', statusText: 'Free (Key System)', price: 'Free', category: 'Mobile Script Executor', features: ['sUNC'], pros: ['Available on iOS', 'Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/13/2025 at 4:49 AM UTC', website: 'delta.app/ios' },
            
            // --- Windows External Exploits ---
            { name: 'Matcha', version: 'External', statusText: 'Premium', price: 'Paid', category: 'Windows External', features: ['Decompiler', 'Code Explorer', 'Hybrid-Kernel'], pros: ['Hybrid-Kernel technology', 'Decompiler', 'Code Explorer'], neutralNotes: ['No public website, Discord only.'], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'discord.com/invite/matchalol4' }, 
            { name: 'Aimmy', version: 'External', statusText: 'AI-Based', price: 'Free', category: 'Windows External', features: ['Supports other games', 'No Keysystem', 'AI-based'], pros: ['Supports other games', 'No keysystem', 'AI-based for unique features', 'Free'], neutralNotes: ['Requires GTX 1050 or better', 'Requires training the model'], cons: ['High system requirements'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'aimmy.dev' },
            { name: 'Severe', version: 'External', statusText: 'Good External', price: 'Paid', category: 'Windows External', features: ['Luau environment', 'Usermode product', 'Rich in features'], pros: ['Has a Luau environment', 'Usermode product (safer)', 'Rich in features', 'Lifetime License'], neutralNotes: [], cons: ['Lifetime license required (high initial cost)'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'discord.com/invite/4QmWjQCgzV' }, 
            { name: 'Ronin', version: 'External', statusText: 'Lifetime Sub.', price: 'Paid', category: 'Windows External', features: ['Amazing optimization', 'Usermode product', 'Rich in features'], pros: ['Amazing optimization', 'Usermode product (safer)', 'Rich in features', 'Lifetime access'], neutralNotes: [], cons: ['Expensive one-time payment'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'getronin.xyz' },
            { name: 'Serotonin', version: 'External', statusText: 'Usermode External', price: 'Paid', category: 'Windows External', features: ['Lua env', 'Code explorer', 'Usermode product', 'Rich in features'], pros: ['Has a Lua env & code explorer', 'Usermode product (safer)', 'Rich in features'], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: 'serotonin.win' },
            { name: 'DX9WARE', version: 'External', statusText: 'External Software', price: 'Paid', category: 'Windows External', features: ['Decompiler', 'Code explorer', 'Rich in features', 'Kernel product'], pros: ['Has a decompiler & code explorer', 'Rich in features'], neutralNotes: [], cons: ['Kernel product (higher risk)', 'Weekly subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'cultofintellect.com' },
            { name: 'Yerba', version: 'External', statusText: 'External Usermode', price: 'Paid', category: 'Windows External', features: ['Amazing optimization', 'Usermode Product', 'Decompiler'], pros: ['Amazing optimization', 'Usermode Product (safer)', 'Has a decompiler', 'Lifetime License'], neutralNotes: [], cons: ['Lifetime license required (high initial cost)'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'yerba.wtf' },
            { name: 'Matrix', version: 'External', statusText: 'Cheap External', price: 'Paid', category: 'Windows External', features: ['Usermode product', 'Very cheap price'], pros: ['Usermode product (safer)', 'Very cheap price (Lifetime)'], neutralNotes: [], cons: ['Basic features'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 7:18 PM UTC', website: 'key-empire.com' },
            { name: 'Photon', version: '5.4', statusText: 'Paid', price: 'Paid', category: 'Windows External', features: [], pros: [], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 5:43 PM UTC', website: 'photon.io' },
            { name: 'Valex External', version: 'BUILD_UPD_2.6', statusText: 'Free (Key System)', price: 'Free', category: 'Windows External', features: [], pros: ['Free'], neutralNotes: ['Key System in use'], cons: [], updated: true, keySystem: true, lastUpdate: '10/16/2025 at 5:30 PM UTC', website: 'valex.app/ext' },
            { name: 'Ronin (Old)', version: 'Version-3.6.8', statusText: 'Paid', price: 'Paid', category: 'Windows External', features: [], pros: [], neutralNotes: ['Older version'], cons: ['No recent updates'], updated: false, keySystem: false, lastUpdate: '10/10/2025 at 9:48 AM UTC', website: 'getronin.xyz' },
            { name: 'Isabelle', version: '1.3.0', statusText: 'Paid', price: 'Paid', category: 'Windows External', features: [], pros: [], neutralNotes: [], cons: ['Subscription required'], updated: true, keySystem: false, lastUpdate: '10/16/2025 at 5:47 PM UTC', website: 'isabelle.one' },
            { name: 'Melatonin', version: '1.4.4h', statusText: 'Private', price: 'Paid', category: 'Windows External', features: [], pros: [], neutralNotes: ['Private use only'], cons: ['Not publicly available'], updated: false, keySystem: false, lastUpdate: '10/09/2025 at 9:38 PM UTC', website: 'melatonin.pro' },
        ];

        // --- Modal Functions ---
        window.openInfoModal = (exploitName) => {
            const exploit = exploitsData.find(e => e.name === exploitName);
            if (!exploit) {
                showPlaceholderMessage(`Error: Exploit ${exploitName} not found.`, 'Error');
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
            modalWebsiteLink.onclick = () => showPlaceholderMessage(`Navigating to: ${exploit.website}`);
            
            modalWebsiteLink.textContent = isDiscordLink ? 'JOIN DISCORD' : 'VISIT WEBSITE';
            modalWebsiteLink.classList.remove('bg-cyan', 'bg-indigo-600');
            modalWebsiteLink.classList.add(isDiscordLink ? 'bg-indigo-600' : 'bg-cyan');

            infoModal.classList.remove('hidden');
            infoModal.classList.add('flex'); // Use flex to center
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        };

        window.closeInfoModal = (event) => {
            // Check if the click occurred on the backdrop (the modal element itself) or the close button
            if (!event || event.target === infoModal || event.target.closest('button[onclick="closeInfoModal()"]')) {
                infoModal.classList.add('hidden');
                infoModal.classList.remove('flex');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        };


        // --- Functions ---
        
        function populateCategoryFilters() {
            // Get unique categories from the data
            const categories = [...new Set(exploitsData.map(e => e.category))];
            
            // Generate HTML for each category filter checkbox
            categoryFiltersContainer.innerHTML = categories.map(cat => `
                <label class="filter-label">
                    <!-- The 'checked' attribute here means the filter is ON by default -->
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
                   onclick="showPlaceholderMessage('Navigating to: ${exploit.website}')" 
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
                            <span class="w-3 h-3 rounded-full mr-2 ${isUpdated ? 'bg-green-light shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}"></span>
                            ${isUpdated ? 'Updated' : 'Not Updated'}
                        </div>
                        <p class="text-xs text-gray-500">Last: ${exploit.lastUpdate.split(' at ')[0]}</p>
                    </div>

                    <!-- Action Buttons (New Prominent Design) -->
                    <div class="mt-3 flex space-x-2">
                        ${websiteButton}
                        <button onclick="openInfoModal('${exploit.name}')"
                                class="w-1/3 px-2 py-2 text-sm font-bold rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition duration-150">
                            INFO
                        </button>
                    </div>
                </div>`;
        }

        function renderExploits() {
            const searchTerm = searchInput.value.toLowerCase();
            
            // Get all active category filters
            const activeCategories = [...categoryFiltersContainer.querySelectorAll('input:checked')].map(el => el.dataset.category);
            
            // Get all active status/price filters
            const activeStatuses = [...statusFiltersContainer.querySelectorAll('input:checked')].map(el => el.dataset.filter);

            const filteredExploits = exploitsData.filter(exploit => {
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

            exploitSections.innerHTML = '';
            exploitCountSpan.textContent = filteredExploits.length;
            
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

            // Reset functionality
            resetFiltersBtn.addEventListener('click', () => {
                searchInput.value = '';
                allFilters.forEach(input => input.checked = false);
                // Re-check the necessary defaults
                document.querySelector('#status-filters input[data-filter="Updated"]').checked = true;
                document.querySelectorAll('#category-filters input').forEach(input => input.checked = true);
                renderExploits();
                showPlaceholderMessage('Filters have been reset.');
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

        // --- Initial Load ---
        totalExploitCountSpan.textContent = exploitsData.length;
        populateCategoryFilters();
        setupEventListeners();
        renderExploits(); // Initial render to display all data with default filters
    });
    </script>
</body>
</html>
