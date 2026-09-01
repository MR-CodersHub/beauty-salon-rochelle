/**
 * ROCHELLE AT-HOME | Comprehensive User Client Dashboard Engine
 * Implements:
 * 1. Browse Available Beauty Services (Haircut, Facial, Waxing, Nails, Bridal) with quick-book.
 * 2. Book a Home Visit (Service type, date, time slot, specialist, address).
 * 3. Track Beautician Assignment (Verified badge, photo, vehicle, kit seal).
 * 4. View Live Estimated Arrival Time (ETA, GPS route animation, stage timeline).
 * 5. Rate Completed Services (Interactive star modal, tip, feedback, loyalty reward).
 * 6. View Past Booking History (Filterable history cards/table).
 * 7. Download Invoices (Itemized printable invoice modal & print trigger).
 */

(function () {
 // Comprehensive Dashboard State
 const dashboardState = {
 user: {
 name: 'Clara Moreau',
 email: 'clara.moreau@rochelle.com',
 phone: '+1 (310) 555-LUXE',
 address: '1200 Sunset Blvd, Villa 4, Beverly Hills, CA 90210',
 glowPoints: 350,
 tier: 'Gold Member'
 },
 activeBooking: {
 id: 'LX-9428',
 serviceId: 'hydra-facial',
 serviceName: '6-Step HydraGlow Radiance Facial',
 category: 'Skin & Facials',
 datetime: 'Today at 02:00 PM',
 price: 119,
 address: '1200 Sunset Blvd, Villa 4, Beverly Hills, CA',
 gateCode: '#4821',
 therapist: {
 id: 'sophia-vance',
 name: 'Sophia Vance',
 title: 'Master Aesthetician & Skin Specialist',
 rating: 4.99,
 sessions: 842,
 vehicle: 'Rose-Gold Mini Cooper (CA • 8XYZ42)',
 phone: '+1 (310) 555-0199',
 kitId: '#LX-881 UV-C Sealed',
 image: 'expert.jpg'
 },
 etaMinutes: 8,
 status: 'enroute', // 'confirmed', 'sterilized', 'enroute', 'arrived', 'completed'
 markerX: 240
 },
 bookingsHistory: [
 {
 id: 'LX-8912',
 serviceName: 'Moroccan Argan Hair Spa & Steam',
 category: 'Hair Care',
 date: 'Aug 14, 2026',
 time: '11:00 AM',
 price: 79,
 therapistName: 'Sophia Vance',
 therapistImg: 'expert.jpg',
 kitSeal: '#LX-742',
 status: 'Completed',
 rating: 5,
 review: 'Sophia was incredible! Hair felt like silk and zero mess left behind.',
 paymentMethod: 'Apple Pay (•••• 4242)'
 },
 {
 id: 'LX-8104',
 serviceName: '24K Pure Gold Radiance Facial',
 category: 'Skin & Facials',
 date: 'July 28, 2026',
 time: '03:30 PM',
 price: 149,
 therapistName: 'Clara Moreau',
 therapistImg: 'hero.jpg',
 kitSeal: '#LX-618',
 status: 'Completed',
 rating: 5,
 review: 'Unbelievable glow before my gala dinner. The sterilized kit felt very clinical and luxury.',
 paymentMethod: 'Visa (•••• 9012)'
 },
 {
 id: 'LX-7650',
 serviceName: 'Russian Gel Manicure & Ice Cream Pedicure Duo',
 category: 'Nails & Pedicure',
 date: 'June 19, 2026',
 time: '01:00 PM',
 price: 135,
 therapistName: 'Nadia Al-Mansoor',
 therapistImg: 'bridal.jpg',
 kitSeal: '#LX-502',
 status: 'Completed',
 rating: 4.9,
 review: 'Precision cuticle work. Stayed chip-free for 4 full weeks!',
 paymentMethod: 'Mastercard (•••• 3311)'
 }
 ],
 servicesCatalog: [
 {
 id: 'hydra-facial',
 title: '6-Step HydraGlow Radiance Facial',
 category: 'facial',
 categoryLabel: 'Skin & Facials',
 price: 119,
 origPrice: 149,
 duration: 75,
 image: 'skin.jpg',
 shortDesc: 'Deep ultrasonic pore vortex infusion, hyaluronic dermal quenching & cryo-sculpting.'
 },
 {
 id: 'hair-spa',
 title: 'Moroccan Argan Hair Spa & Steam',
 category: 'hair',
 categoryLabel: 'Hair Care',
 price: 79,
 origPrice: 110,
 duration: 60,
 image: 'hero.jpg',
 shortDesc: 'Kérastase scalp micro-massage, warm micro-mist ozone dome & silk blowout.'
 },
 {
 id: 'russian-gel',
 title: 'Russian Gel Manicure & Nail Art',
 category: 'nails',
 categoryLabel: 'Nails & Pedicure',
 price: 69,
 origPrice: 89,
 duration: 60,
 image: 'nails.jpg',
 shortDesc: 'Diamond dry e-file cuticle detailing, builder gel reinforcement & chrome finish.'
 },
 {
 id: 'organic-waxing',
 title: 'Organic Honey & Aloe Body Waxing',
 category: 'waxing',
 categoryLabel: 'Waxing & Threading',
 price: 85,
 origPrice: 105,
 duration: 45,
 image: 'skin.jpg',
 shortDesc: 'Painless low-temperature peel wax, organic aloe soothing & ingrown prevention.'
 },
 {
 id: 'icecream-pedicure',
 title: 'Ice Cream Spa Pedicure & Foot Reflexology',
 category: 'nails',
 categoryLabel: 'Nails & Pedicure',
 price: 75,
 origPrice: 95,
 duration: 60,
 image: 'nails.jpg',
 shortDesc: 'Voesh NYC effervescent soak, volcanic pumice exfoliation & hot towel wrap.'
 },
 {
 id: 'bridal-airbrush',
 title: 'HD 4K Waterproof Airbrush Makeup & Hair',
 category: 'bridal',
 categoryLabel: 'Bridal & Couture',
 price: 289,
 origPrice: 350,
 duration: 150,
 image: 'bridal.jpg',
 shortDesc: '24-hour humidity-proof Temptu airbrush, bespoke updo sculpting & lash artistry.'
 }
 ],
 selectedServiceForBooking: null,
 ratingModalBookingId: null,
 activeServiceCategory: 'all',
 historyFilter: 'all'
 };

 function getRootPath() {
 const path = window.location.pathname.replace(/\\/g, '/');
 if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
 return '../../';
 }
 return './';
 }

 function initUserDashboard() {
 renderLiveTracker();
 renderServicesCatalog();
 renderBookingHistory();
 setupUrlParams();
 }

 function setupUrlParams() {
 const urlParams = new URLSearchParams(window.location.search);
 const bookId = urlParams.get('book');
 if (bookId) {
 const match = dashboardState.servicesCatalog.find(s => s.id === bookId);
 if (match) {
 window.openBookingModal(match.id);
 }
 }
 }

 // ==========================================
 // 1. LIVE ARRIVAL TRACKER & ETA SIMULATION
 // ==========================================
 function renderLiveTracker() {
 const container = document.getElementById('user-live-tracker-box');
 if (!container) return;

 const b = dashboardState.activeBooking;
 const isArrived = b.status === 'arrived';

 container.innerHTML = `
 <div class="bg-white dark:bg-[#1A1517] rounded-3xl border-2 border-[#BD5579] shadow-2xl p-6 sm:p-8 space-y-6">
 
 <!-- Header & Beautician Status -->
 <div class="flex justify-between items-center flex-wrap gap-4 border-b border-gray-100 dark:border-zinc-800 pb-5">
 <div class="flex items-center gap-3">
 <span class="w-3.5 h-3.5 rounded-full ${isArrived ? 'bg-emerald-500 shadow-[0_0_12px_#10B981]' : 'bg-lime-400 shadow-[0_0_12px_#A3E635]'} animate-pulse"></span>
 <div>
 <h3 class="font-serif-luxury text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
 ${isArrived ? 'Therapist Arrived At Your Door' : 'Live Beautician Arrival Tracker'}
 </h3>
 <p class="text-xs text-gray-500">Booking #${b.id} • ${b.serviceName}</p>
 </div>
 </div>

 <div class="flex items-center gap-2">
 <span class="bg-pink-100 dark:bg-pink-950/60 text-[#BD5579] text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
 <i class="fa-solid fa-satellite-dish mr-1"></i> Live GPS Feed
 </span>
 <button onclick="window.toggleSimulationState()" class="text-[11px] font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white underline px-2">
 ${isArrived ? 'Reset Demo Route' : 'Simulate Doorstep Arrival'}
 </button>
 </div>
 </div>

 <!-- Simulated GPS Route Canvas -->
 <div class="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#FAF4F2] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-inner">
 <svg class="w-full h-full" viewBox="0 0 600 300">
 <!-- Grid lines -->
 <line x1="0" y1="75" x2="600" y2="75" stroke="#EDE2DE" class="dark:stroke-zinc-800" stroke-dasharray="4,4"/>
 <line x1="0" y1="150" x2="600" y2="150" stroke="#EDE2DE" class="dark:stroke-zinc-800" stroke-dasharray="4,4"/>
 <line x1="0" y1="225" x2="600" y2="225" stroke="#EDE2DE" class="dark:stroke-zinc-800" stroke-dasharray="4,4"/>

 <!-- Roads -->
 <path d="M 50 150 Q 200 80, 350 180 T 550 120" stroke="#E6D7D2" stroke-width="18" fill="none" stroke-linecap="round" class="dark:stroke-zinc-800"/>
 <path d="M 120 40 L 120 260" stroke="#E6D7D2" stroke-width="12" fill="none" stroke-linecap="round" class="dark:stroke-zinc-800"/>
 <path d="M 450 40 L 450 260" stroke="#E6D7D2" stroke-width="12" fill="none" stroke-linecap="round" class="dark:stroke-zinc-800"/>
 
 <!-- Animated Route Trail -->
 <path d="M 50 150 Q 200 80, 350 180 T 550 120" stroke="#BD5579" stroke-width="6" fill="none" class="route-dashed-line"/>

 <!-- Doorstep Destination Pin -->
 <g transform="translate(540, 110)">
 <circle cx="0" cy="0" r="18" fill="#141010" class="dark:fill-white"/>
 <circle cx="0" cy="0" r="7" fill="#BD5579"/>
 <text x="0" y="32" font-size="10" font-weight="800" fill="#141010" text-anchor="middle" class="dark:fill-white font-sans-clean uppercase tracking-wider">Your Doorstep</text>
 </g>

 <!-- Vehicle Marker -->
 <g id="live-vehicle-marker" transform="translate(${b.markerX}, ${isArrived ? 110 : 120})">
 <circle cx="0" cy="0" r="22" fill="rgba(189, 85, 121, 0.25)" class="radar-pulse"/>
 <circle cx="0" cy="0" r="16" fill="#BD5579"/>
 <text x="0" y="5" font-family="FontAwesome" font-size="13" fill="#FFFFFF" text-anchor="middle">&#xf1ba;</text>
 <rect x="-48" y="-36" width="96" height="20" rx="5" fill="#141010"/>
 <text x="0" y="-22" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle" class="font-sans-clean font-extrabold uppercase">
 ${isArrived ? 'ARRIVED NOW' : `${b.etaMinutes} MINS AWAY`}
 </text>
 </g>
 </svg>

 <!-- ETA Live Overlay Card -->
 <div class="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-white px-4 py-3 rounded-2xl flex items-center gap-4 shadow-xl border border-white/10">
 <div class="border-r border-white/20 pr-4 text-center">
 <span class="font-sans-clean text-3xl font-extrabold text-[#BD5579] leading-none tracking-tight" id="live-eta-display">
 ${isArrived ? '0' : b.etaMinutes}
 </span>
 <span class="block text-[9px] font-extrabold uppercase tracking-widest text-gray-300">MINS</span>
 </div>
 <div>
 <strong class="text-xs block text-white font-bold">
 ${isArrived ? 'Specialist Ringing Doorbell' : 'Estimated Doorstep Arrival'}
 </strong>
 <span class="text-[11px] text-gray-300" id="live-eta-subtext">
 ${isArrived ? 'Please ensure entryway is clear' : '02:08 PM • Traffic is clear'}
 </span>
 </div>
 </div>
 </div>

 <!-- 4-Stage Arrival Progress Stepper -->
 <div class="grid grid-cols-4 gap-2 sm:gap-4 text-center pt-2">
 <div class="flex flex-col items-center gap-2">
 <span class="w-8 h-8 rounded-full bg-[#141010] dark:bg-white text-white dark:text-[#141010] flex items-center justify-center text-xs font-bold shadow">
 <i class="fa-solid fa-check"></i>
 </span>
 <span class="text-[11px] font-bold text-gray-800 dark:text-gray-200">1. Confirmed</span>
 </div>

 <div class="flex flex-col items-center gap-2">
 <span class="w-8 h-8 rounded-full bg-[#141010] dark:bg-white text-white dark:text-[#141010] flex items-center justify-center text-xs font-bold shadow">
 <i class="fa-solid fa-shield-virus"></i>
 </span>
 <span class="text-[11px] font-bold text-gray-800 dark:text-gray-200">2. Kit Sterilized</span>
 </div>

 <div class="flex flex-col items-center gap-2">
 <span class="w-8 h-8 rounded-full ${isArrived ? 'bg-[#141010] dark:bg-white text-white dark:text-[#141010]' : 'bg-[#BD5579] text-white animate-bounce'} flex items-center justify-center text-xs font-bold shadow">
 <i class="fa-solid fa-car-side"></i>
 </span>
 <span class="text-[11px] font-bold ${isArrived ? 'text-gray-800 dark:text-gray-200' : 'text-[#BD5579]'}">3. En Route</span>
 </div>

 <div class="flex flex-col items-center gap-2">
 <span class="w-8 h-8 rounded-full ${isArrived ? 'bg-[#BD5579] text-white shadow-lg animate-pulse' : 'bg-gray-200 dark:bg-zinc-800 text-gray-400'} flex items-center justify-center text-xs font-bold">
 <i class="fa-solid fa-door-open"></i>
 </span>
 <span class="text-[11px] font-bold ${isArrived ? 'text-[#BD5579]' : 'text-gray-400'}">4. At Doorstep</span>
 </div>
 </div>

 <!-- Assigned Beautician Details Card -->
 <div class="p-5 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
 <div class="flex items-center gap-4">
 <img src="../../assets/img/${b.therapist.image}" alt="${b.therapist.name}" class="w-16 h-16 rounded-full object-cover border-2 border-[#BD5579] shadow">
 <div class="space-y-0.5">
 <div class="flex items-center gap-2">
 <span class="text-[10px] uppercase font-extrabold tracking-wider text-[#BD5579] bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded">
 CIDESCO Certified
 </span>
 <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
 <i class="fa-solid fa-shield-check"></i> Police Vetted
 </span>
 </div>
 <h4 class="font-bold text-base text-gray-900 dark:text-white">${b.therapist.name}</h4>
 <p class="text-xs text-gray-500 dark:text-gray-400">
 <i class="fa-solid fa-star text-amber-500"></i> <strong>${b.therapist.rating}</strong> (${b.therapist.sessions} visits) • ${b.therapist.vehicle}
 </p>
 <p class="text-[11px] text-gray-400">Kit Seal: <strong class="text-gray-700 dark:text-gray-300">${b.therapist.kitId}</strong></p>
 </div>
 </div>

 <div class="flex items-center gap-2 w-full md:w-auto">
 <button onclick="alert('Calling therapist Sophia Vance at ${b.therapist.phone}...')" class="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-[#141010] dark:bg-white text-white dark:text-[#141010] hover:bg-[#BD5579] dark:hover:bg-[#BD5579] dark:hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow">
 <i class="fa-solid fa-phone"></i> Call
 </button>
 <button onclick="alert('Encrypted dispatch messaging opened with Sophia Vance.')" class="flex-1 md:flex-initial px-5 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-600 text-xs font-bold text-gray-800 dark:text-gray-200 hover:border-[#BD5579] hover:text-[#BD5579] transition flex items-center justify-center gap-1.5">
 <i class="fa-solid fa-message"></i> Message
 </button>
 </div>
 </div>

 </div>
 `;
 }

 window.toggleSimulationState = function () {
 const b = dashboardState.activeBooking;
 if (b.status === 'enroute') {
 b.status = 'arrived';
 b.markerX = 540;
 b.etaMinutes = 0;
 } else {
 b.status = 'enroute';
 b.markerX = 240;
 b.etaMinutes = 8;
 }
 renderLiveTracker();
 };

 // ==========================================
 // 2. BROWSE AVAILABLE BEAUTY SERVICES
 // ==========================================
 function renderServicesCatalog() {
 const container = document.getElementById('dashboard-services-grid');
 if (!container) return;

 const root = getRootPath();
 const cat = dashboardState.activeServiceCategory;
 const filtered = cat === 'all' 
 ? dashboardState.servicesCatalog 
 : dashboardState.servicesCatalog.filter(s => s.category === cat);

 container.innerHTML = filtered.map(s => `
 <div class="bg-white dark:bg-[#1A1517] rounded-2xl border border-gray-200 dark:border-zinc-800 p-5 shadow-sm hover:border-[#BD5579] transition flex flex-col justify-between space-y-4 group">
 <div class="space-y-3">
 <div class="relative overflow-hidden rounded-xl h-40">
 <img src="${root}assets/img/${s.image}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
 <span class="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
 ${s.categoryLabel}
 </span>
 </div>

 <div>
 <h4 class="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#BD5579] transition line-clamp-1">${s.title}</h4>
 <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${s.shortDesc}</p>
 </div>
 </div>

 <div class="pt-3 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between">
 <div>
 <span class="text-xs text-gray-400 line-through mr-1 font-sans-clean font-medium">$${s.origPrice}</span>
 <span class="font-sans-clean text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">$${s.price}</span>
 <span class="block text-[10px] text-gray-400"><i class="fa-regular fa-clock mr-0.5"></i> ${s.duration} mins</span>
 </div>

 <button onclick="window.openBookingModal('${s.id}')" class="bg-[#141010] dark:bg-white text-white dark:text-[#141010] hover:bg-[#BD5579] dark:hover:bg-[#BD5579] dark:hover:text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow">
 Book Visit
 </button>
 </div>
 </div>
 `).join('');
 }

 window.filterDashboardServices = function (category, btnElement) {
 dashboardState.activeServiceCategory = category;
 document.querySelectorAll('.catalog-tab-btn').forEach(btn => {
 btn.classList.remove('bg-[#141010]', 'text-white', 'dark:bg-white', 'dark:text-[#141010]');
 btn.classList.add('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
 });
 if (btnElement) {
 btnElement.classList.add('bg-[#141010]', 'text-white', 'dark:bg-white', 'dark:text-[#141010]');
 btnElement.classList.remove('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
 }
 renderServicesCatalog();
 };

 // ==========================================
 // 3. BOOK A HOME VISIT MODAL ENGINE
 // ==========================================
 window.openBookingModal = function (serviceId) {
 const service = dashboardState.servicesCatalog.find(s => s.id === serviceId) || dashboardState.servicesCatalog[0];
 dashboardState.selectedServiceForBooking = service;

 const modal = document.getElementById('dashboard-book-modal');
 if (!modal) return;

 // Fill service selector
 const serviceSelect = document.getElementById('modal-book-service-select');
 if (serviceSelect) {
 serviceSelect.innerHTML = dashboardState.servicesCatalog.map(s => `
 <option value="${s.id}" ${s.id === service.id ? 'selected' : ''}>${s.title} - $${s.price} (${s.duration}m)</option>
 `).join('');
 }

 // Set today default date
 const dateInput = document.getElementById('modal-book-date');
 if (dateInput) {
 const today = new Date().toISOString().split('T')[0];
 dateInput.min = today;
 dateInput.value = today;
 }

 modal.classList.remove('hidden');
 };

 window.closeBookingModal = function () {
 const modal = document.getElementById('dashboard-book-modal');
 if (modal) modal.classList.add('hidden');
 };

 window.handleDashboardBookingSubmit = function (e) {
 e.preventDefault();
 const serviceSelect = document.getElementById('modal-book-service-select');
 const dateInput = document.getElementById('modal-book-date');
 const timeSlot = document.querySelector('input[name="modal-book-timeslot"]:checked')?.value || '02:00 PM';
 const artistChoice = document.getElementById('modal-book-artist')?.value || 'Sophia Vance';

 const selectedService = dashboardState.servicesCatalog.find(s => s.id === serviceSelect.value);

 // Update active booking
 dashboardState.activeBooking = {
 id: `LX-${Math.floor(1000 + Math.random() * 9000)}`,
 serviceId: selectedService.id,
 serviceName: selectedService.title,
 category: selectedService.categoryLabel,
 datetime: `${dateInput.value} at ${timeSlot}`,
 price: selectedService.price,
 address: dashboardState.user.address,
 gateCode: '#4821',
 therapist: {
 id: 'sophia-vance',
 name: artistChoice,
 title: 'Senior CIDESCO Specialist',
 rating: 4.99,
 sessions: 842,
 vehicle: 'Rose-Gold Mini Cooper (CA • 8XYZ42)',
 phone: '+1 (310) 555-0199',
 kitId: `#LX-${Math.floor(500 + Math.random() * 400)} UV-C Sealed`,
 image: 'expert.jpg'
 },
 etaMinutes: 12,
 status: 'enroute',
 markerX: 180
 };

 window.closeBookingModal();
 renderLiveTracker();
 if (window.showToast) {
 window.showToast(` Appointment booked! Specialist ${artistChoice} dispatched.`);
 }
 };

 // ==========================================
 // 4. PAST BOOKING HISTORY
 // ==========================================
 function renderBookingHistory() {
 const container = document.getElementById('dashboard-history-container');
 if (!container) return;

 const root = getRootPath();
 const list = dashboardState.bookingsHistory;

 container.innerHTML = list.map(item => `
 <div class="p-5 rounded-2xl bg-[#FAF6F4] dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-700/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-300 dark:hover:border-zinc-600 transition">
 
 <div class="space-y-1">
 <div class="flex items-center gap-2">
 <span class="text-[10px] font-extrabold uppercase tracking-widest text-[#BD5579] bg-pink-100 dark:bg-pink-950/60 px-2 py-0.5 rounded">
 #${item.id}
 </span>
 <span class="text-xs text-gray-500 font-semibold">${item.date} • ${item.time}</span>
 <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
 ● ${item.status}
 </span>
 </div>

 <h4 class="font-bold text-sm sm:text-base text-gray-900 dark:text-white">${item.serviceName}</h4>
 
 <div class="flex items-center gap-3 text-xs text-gray-500">
 <span>Specialist: <strong>${item.therapistName}</strong></span>
 <span>•</span>
 <span>Amount: <strong class="font-sans-clean font-bold text-gray-900 dark:text-white">$${item.price}</strong></span>
 <span>•</span>
 <span class="text-amber-500 font-bold"> ${item.rating}</span>
 </div>

 ${item.review ? `<p class="text-xs text-gray-400 italic pt-1">"${item.review}"</p>` : ''}
 </div>

 <div class="flex items-center gap-2 w-full md:w-auto">
 <button onclick="window.openInvoiceModal('${item.id}')" class="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 text-xs font-bold text-gray-800 dark:text-gray-200 hover:border-[#BD5579] transition flex items-center justify-center gap-1.5 shadow-sm">
 <i class="fa-solid fa-file-invoice"></i>
 <span>Invoice</span>
 </button>

 <button onclick="window.openRatingModal('${item.id}')" class="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-[#BD5579] hover:bg-[#A33F62] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow">
 <i class="fa-solid fa-star"></i>
 <span>Rate Look</span>
 </button>
 </div>

 </div>
 `).join('');
 }

 // ==========================================
 // 5. RATE COMPLETED SERVICES MODAL
 // ==========================================
 window.openRatingModal = function (bookingId) {
 dashboardState.ratingModalBookingId = bookingId;
 const modal = document.getElementById('dashboard-rating-modal');
 if (!modal) return;

 const item = dashboardState.bookingsHistory.find(b => b.id === bookingId) || dashboardState.bookingsHistory[0];
 document.getElementById('rating-service-name').innerText = item.serviceName;
 document.getElementById('rating-therapist-name').innerText = item.therapistName;

 modal.classList.remove('hidden');
 };

 window.closeRatingModal = function () {
 const modal = document.getElementById('dashboard-rating-modal');
 if (modal) modal.classList.add('hidden');
 };

 window.selectStarRating = function (stars) {
 document.querySelectorAll('.star-rating-btn').forEach((btn, idx) => {
 if (idx < stars) {
 btn.classList.add('text-amber-400');
 btn.classList.remove('text-gray-300', 'dark:text-zinc-600');
 } else {
 btn.classList.remove('text-amber-400');
 btn.classList.add('text-gray-300', 'dark:text-zinc-600');
 }
 });
 document.getElementById('rating-selected-value').value = stars;
 };

 window.submitServiceRating = function (e) {
 e.preventDefault();
 const stars = document.getElementById('rating-selected-value').value;
 const feedback = document.getElementById('rating-feedback-text').value;
 const bookingId = dashboardState.ratingModalBookingId;

 const match = dashboardState.bookingsHistory.find(b => b.id === bookingId);
 if (match) {
 match.rating = stars;
 match.review = feedback || 'Exceptional luxury experience!';
 }

 // Award +50 Glow Points
 dashboardState.user.glowPoints += 50;
 const pointsEl = document.getElementById('user-points-display');
 if (pointsEl) pointsEl.innerText = `${dashboardState.user.glowPoints} PTS`;

 window.closeRatingModal();
 renderBookingHistory();
 if (window.showToast) {
 window.showToast(' Rating submitted! +50 Glow Points added to your balance.');
 }
 };

 // ==========================================
 // 6. DOWNLOAD & PRINT INVOICE MODAL
 // ==========================================
 window.openInvoiceModal = function (bookingId) {
 const item = dashboardState.bookingsHistory.find(b => b.id === bookingId) || {
 id: bookingId || 'LX-9428',
 serviceName: '6-Step HydraGlow Radiance Facial',
 date: 'Today',
 time: '02:00 PM',
 price: 119,
 therapistName: 'Sophia Vance',
 paymentMethod: 'Apple Pay (•••• 4242)'
 };

 const container = document.getElementById('invoice-modal-content');
 const modal = document.getElementById('dashboard-invoice-modal');
 if (!container || !modal) return;

 const tax = Math.round(item.price * 0.08);
 const total = item.price + tax;

 container.innerHTML = `
 <div id="printable-invoice-sheet" class="p-8 bg-white text-gray-900 space-y-6 text-xs">
 
 <!-- Invoice Header -->
 <div class="flex justify-between items-start border-b border-gray-200 pb-6">
 <div>
 <div class="flex items-center gap-2">
 <img src="../../assets/img/logo.png" alt="ROCHELLE Logo" class="h-8 w-auto">
 <span class="font-serif-luxury text-2xl font-bold tracking-widest text-[#141010]">ROCHELLE</span>
 </div>
 <span class="text-[9px] uppercase tracking-[0.25em] text-[#BD5579] font-bold">At Home Studio Concierge</span>
 <p class="text-[11px] text-gray-500 mt-2">
 9600 Wilshire Blvd, Beverly Hills, CA 90212<br>
 concierge@rochelle.com • (310) 555-LUXE
 </p>
 </div>

 <div class="text-right space-y-1">
 <span class="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">OFFICIAL INVOICE</span>
 <h3 class="font-serif-luxury text-2xl font-bold text-gray-900">#INV-${item.id}</h3>
 <p class="text-gray-500 font-semibold">Date: ${item.date}</p>
 <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded uppercase">PAID IN FULL</span>
 </div>
 </div>

 <!-- Bill To Details -->
 <div class="grid grid-cols-2 gap-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
 <div>
 <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">BILLED TO</span>
 <p class="font-bold text-sm text-gray-900">${dashboardState.user.name}</p>
 <p class="text-gray-600">${dashboardState.user.address}</p>
 <p class="text-gray-500">${dashboardState.user.phone}</p>
 </div>

 <div>
 <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">APPOINTMENT DOSSIER</span>
 <p class="text-gray-700"><strong>Specialist:</strong> ${item.therapistName}</p>
 <p class="text-gray-700"><strong>Payment:</strong> ${item.paymentMethod || 'Credit Card'}</p>
 <p class="text-gray-700"><strong>Sanitation Kit:</strong> Single-Use Monodose Sterile</p>
 </div>
 </div>

 <!-- Itemized Table -->
 <table class="w-full text-left">
 <thead>
 <tr class="border-b-2 border-gray-900 text-gray-900 font-bold text-[10px] uppercase tracking-wider">
 <th class="py-2">Treatment / Service</th>
 <th class="py-2 text-center">Qty</th>
 <th class="py-2 text-right">Rate</th>
 <th class="py-2 text-right">Amount</th>
 </tr>
 </thead>
 <tbody class="divide-y divide-gray-100">
 <tr>
 <td class="py-3">
 <strong class="text-sm block">${item.serviceName}</strong>
 <span class="text-gray-500 text-[11px]">Doorstep mobile spa visit with medical-grade sanitized equipment</span>
 </td>
 <td class="py-3 text-center font-bold">1</td>
 <td class="py-3 text-right font-sans-clean font-bold">$${item.price}.00</td>
 <td class="py-3 text-right font-sans-clean font-bold">$${item.price}.00</td>
 </tr>
 <tr>
 <td class="py-2 text-gray-500">Doorstep Travel & Sterile Kit Dispatch</td>
 <td class="py-2 text-center font-bold">1</td>
 <td class="py-2 text-right text-emerald-600 font-bold uppercase">$0.00</td>
 <td class="py-2 text-right text-emerald-600 font-bold uppercase">COMPLIMENTARY</td>
 </tr>
 </tbody>
 </table>

 <!-- Total Calculation -->
 <div class="border-t border-gray-200 pt-4 flex justify-end">
 <div class="w-64 space-y-2">
 <div class="flex justify-between text-gray-600">
 <span>Subtotal:</span>
 <span class="font-sans-clean font-bold">$${item.price}.00</span>
 </div>
 <div class="flex justify-between text-gray-600">
 <span>Estimated Tax (8%):</span>
 <span class="font-sans-clean font-bold">$${tax}.00</span>
 </div>
 <div class="flex justify-between text-gray-600">
 <span>Travel Concierge:</span>
 <span class="font-bold text-emerald-600">FREE</span>
 </div>
 <div class="flex justify-between text-base font-bold text-gray-900 border-t border-gray-900 pt-2">
 <span>Total Paid:</span>
 <span class="font-sans-clean text-lg font-extrabold text-[#BD5579]">$${total}.00</span>
 </div>
 </div>
 </div>

 <div class="text-center text-[10px] text-gray-400 pt-4 border-t border-gray-100">
 Thank you for choosing ROCHELLE At-Home Studio. Safe-Salon™ Zero-Contamination Guaranteed.
 </div>
 </div>
 `;

 modal.classList.remove('hidden');
 };

 window.closeInvoiceModal = function () {
 const modal = document.getElementById('dashboard-invoice-modal');
 if (modal) modal.classList.add('hidden');
 };

 window.printInvoice = function () {
 window.print();
 };

 document.addEventListener('DOMContentLoaded', initUserDashboard);
})();
