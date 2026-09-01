/**
 * ROCHELLE AT-HOME | Dedicated Step-by-Step Doorstep Booking Wizard
 * Handles service selection, artist assignment, date/time slots, doorstep address,
 * promo discount verification, and booking confirmation.
 */

(function () {
 const bookingState = {
 selectedServices: [],
 selectedArtist: 'any',
 petFriendly: false,
 silentService: false,
 ringLight: true,
 date: '',
 timeSlot: '',
 address: '',
 gateCode: '',
 notes: '',
 name: '',
 email: '',
 phone: '',
 promoCode: '',
 discountPercent: 0,
 currentStep: 1
 };

 function getRootPath() {
 const path = window.location.pathname.replace(/\\/g, '/');
 if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
 return '../../';
 }
 return './';
 }

 function initBookingWizard() {
 const root = getRootPath();
 const serviceListContainer = document.getElementById('booking-services-list');
 if (!serviceListContainer || !window.ROCHELLE_DATA) return;

 // Check query params for pre-selected service
 const urlParams = new URLSearchParams(window.location.search);
 const preServiceId = urlParams.get('service') || urlParams.get('id');

 // Populate service options
 serviceListContainer.innerHTML = window.ROCHELLE_DATA.services.map(s => {
 const isChecked = preServiceId === s.id;
 if (isChecked) {
 bookingState.selectedServices.push(s);
 }

 return `
 <label class="group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A1517] border-2 ${isChecked ? 'border-[#BD5579] bg-pink-50/30 dark:bg-pink-950/20' : 'border-gray-200 dark:border-zinc-800'} hover:border-[#BD5579] transition cursor-pointer shadow-sm">
 <input type="checkbox" name="booking-service-item" value="${s.id}" ${isChecked ? 'checked' : ''} onchange="window.toggleBookingService('${s.id}')" class="mt-1 accent-[#BD5579] w-4 h-4 rounded">
 <img src="${root}assets/img/${s.image}" alt="${s.title}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0">
 <div class="flex-grow space-y-1">
 <div class="flex justify-between items-start flex-wrap gap-1">
 <h4 class="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#BD5579] transition">${s.title}</h4>
 <span class="font-sans-clean text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">$${s.price}</span>
 </div>
 <p class="text-xs text-gray-500 line-clamp-1">${s.shortDesc}</p>
 <div class="flex items-center gap-3 text-[11px] text-gray-400">
 <span><i class="fa-regular fa-clock mr-1"></i> ${s.duration} mins</span>
 <span>•</span>
 <span class="text-emerald-600 font-semibold"><i class="fa-solid fa-shield-virus mr-1"></i> Monodose Kit</span>
 </div>
 </div>
 </label>
 `;
 }).join('');

 // Pre-populate today's default date
 const today = new Date();
 const dateInput = document.getElementById('booking-date-input');
 if (dateInput) {
 const yyyy = today.getFullYear();
 const mm = String(today.getMonth() + 1).padStart(2, '0');
 const dd = String(today.getDate()).padStart(2, '0');
 dateInput.min = `${yyyy}-${mm}-${dd}`;
 dateInput.value = `${yyyy}-${mm}-${dd}`;
 bookingState.date = dateInput.value;
 }

 updateSummary();
 setupWizardListeners();
 }

 window.toggleBookingService = function (serviceId) {
 const service = window.ROCHELLE_DATA.services.find(s => s.id === serviceId);
 if (!service) return;

 const idx = bookingState.selectedServices.findIndex(s => s.id === serviceId);
 if (idx > -1) {
 bookingState.selectedServices.splice(idx, 1);
 } else {
 bookingState.selectedServices.push(service);
 }

 // Refresh active borders
 document.querySelectorAll('input[name="booking-service-item"]').forEach(input => {
 const parentLabel = input.closest('label');
 if (input.checked) {
 parentLabel.classList.add('border-[#BD5579]', 'bg-pink-50/30', 'dark:bg-pink-950/20');
 parentLabel.classList.remove('border-gray-200', 'dark:border-zinc-800');
 } else {
 parentLabel.classList.remove('border-[#BD5579]', 'bg-pink-50/30', 'dark:bg-pink-950/20');
 parentLabel.classList.add('border-gray-200', 'dark:border-zinc-800');
 }
 });

 updateSummary();
 };

 function updateSummary() {
 const container = document.getElementById('booking-summary-items');
 const subtotalEl = document.getElementById('booking-subtotal-price');
 const discountRow = document.getElementById('booking-discount-row');
 const discountEl = document.getElementById('booking-discount-amount');
 const totalEl = document.getElementById('booking-total-price');
 const durationEl = document.getElementById('booking-total-duration');

 if (!container || !subtotalEl || !totalEl) return;

 if (bookingState.selectedServices.length === 0) {
 container.innerHTML = `<p class="text-xs text-gray-400 italic">No treatments selected yet. Pick at least one look from the menu.</p>`;
 subtotalEl.innerText = '$0';
 totalEl.innerText = '$0';
 if (durationEl) durationEl.innerText = '0 mins';
 if (discountRow) discountRow.classList.add('hidden');
 return;
 }

 let subtotal = 0;
 let totalDuration = 0;

 container.innerHTML = bookingState.selectedServices.map(s => {
 subtotal += s.price;
 totalDuration += s.duration;
 return `
 <div class="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 dark:border-zinc-800/60">
 <span class="font-bold text-gray-800 dark:text-gray-200">${s.title}</span>
 <span class="font-semibold text-gray-900 dark:text-white">$${s.price}</span>
 </div>
 `;
 }).join('');

 // Multi-service auto bundle discount (15% for 2 items, 25% for 3+ items) or promo code
 let autoBundleDiscount = 0;
 if (bookingState.selectedServices.length === 2) autoBundleDiscount = 0.15;
 else if (bookingState.selectedServices.length >= 3) autoBundleDiscount = 0.25;

 const activeDiscountRate = Math.max(autoBundleDiscount, bookingState.discountPercent);
 const discountAmount = Math.round(subtotal * activeDiscountRate);
 const finalTotal = subtotal - discountAmount;

 subtotalEl.innerText = `$${subtotal}`;
 if (durationEl) durationEl.innerText = `${totalDuration} mins`;

 if (discountAmount > 0) {
 if (discountRow) {
 discountRow.classList.remove('hidden');
 discountEl.innerText = `-$${discountAmount} (${Math.round(activeDiscountRate * 100)}% off)`;
 }
 } else {
 if (discountRow) discountRow.classList.add('hidden');
 }

 totalEl.innerText = `$${finalTotal}`;
 }

 window.applyPromoCode = function () {
 const promoInput = document.getElementById('booking-promo-input');
 if (!promoInput) return;
 const code = promoInput.value.trim().toUpperCase();

 if (code === 'GLOW20' || code === 'ROCHELLE20') {
 bookingState.discountPercent = 0.20;
 bookingState.promoCode = code;
 updateSummary();
 if (window.showToast) window.showToast(' Code GLOW20 applied! 20% discount added to your session.');
 } else if (code === 'VIP25') {
 bookingState.discountPercent = 0.25;
 bookingState.promoCode = code;
 updateSummary();
 if (window.showToast) window.showToast(' VIP25 Applied: 25% off unlocked!');
 } else {
 if (window.showToast) window.showToast('Invalid promo code. Try using GLOW20.', 'error');
 }
 };

 window.setBookingStep = function (step) {
 if (step > bookingState.currentStep) {
 // Validate current step
 if (bookingState.currentStep === 1 && bookingState.selectedServices.length === 0) {
 if (window.showToast) window.showToast('Please select at least one treatment look to continue.', 'error');
 return;
 }
 if (bookingState.currentStep === 3) {
 const selectedSlot = document.querySelector('input[name="booking-timeslot"]:checked');
 if (!selectedSlot) {
 if (window.showToast) window.showToast('Please pick a preferred arrival time slot.', 'error');
 return;
 }
 bookingState.timeSlot = selectedSlot.value;
 }
 if (bookingState.currentStep === 4) {
 const address = document.getElementById('booking-address-input')?.value.trim();
 const name = document.getElementById('booking-name-input')?.value.trim();
 const phone = document.getElementById('booking-phone-input')?.value.trim();
 if (!address || !name || !phone) {
 if (window.showToast) window.showToast('Please fill in your name, contact phone, and doorstep address.', 'error');
 return;
 }
 bookingState.address = address;
 bookingState.name = name;
 bookingState.phone = phone;
 bookingState.gateCode = document.getElementById('booking-gate-input')?.value.trim() || '';
 bookingState.notes = document.getElementById('booking-notes-input')?.value.trim() || '';
 }
 }

 bookingState.currentStep = step;

 // Show/hide step panels
 for (let i = 1; i <= 5; i++) {
 const panel = document.getElementById(`booking-step-${i}`);
 const indicator = document.getElementById(`step-indicator-${i}`);
 if (panel) {
 if (i === step) panel.classList.remove('hidden');
 else panel.classList.add('hidden');
 }
 if (indicator) {
 if (i <= step) {
 indicator.classList.add('bg-[#BD5579]', 'text-white');
 indicator.classList.remove('bg-gray-100', 'dark:bg-zinc-800', 'text-gray-500');
 } else {
 indicator.classList.remove('bg-[#BD5579]', 'text-white');
 indicator.classList.add('bg-gray-100', 'dark:bg-zinc-800', 'text-gray-500');
 }
 }
 }

 if (step === 5) {
 renderReviewStep();
 }

 window.scrollTo({ top: 120, behavior: 'smooth' });
 };

 function renderReviewStep() {
 const reviewContainer = document.getElementById('booking-review-details');
 if (!reviewContainer) return;

 reviewContainer.innerHTML = `
 <div class="space-y-4 text-xs sm:text-sm">
 <div class="p-4 rounded-2xl bg-pink-50/50 dark:bg-zinc-800/40 border border-pink-100 dark:border-zinc-700 space-y-2">
 <span class="text-[10px] font-extrabold uppercase tracking-widest text-[#BD5579]">Selected Treatments (${bookingState.selectedServices.length})</span>
 ${bookingState.selectedServices.map(s => `
 <div class="flex justify-between items-center">
 <strong class="text-gray-900 dark:text-white">${s.title}</strong>
 <span class="font-bold">$${s.price} (${s.duration} mins)</span>
 </div>
 `).join('')}
 </div>

 <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div class="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-700">
 <span class="text-[10px] font-bold text-gray-400 uppercase">Appointment Time</span>
 <p class="font-bold text-gray-900 dark:text-white text-xs mt-1">
 ${bookingState.date || 'Today'} • ${bookingState.timeSlot || '02:00 PM'}
 </p>
 </div>

 <div class="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-700">
 <span class="text-[10px] font-bold text-gray-400 uppercase">Assigned Specialist</span>
 <p class="font-bold text-gray-900 dark:text-white text-xs mt-1">
 ${bookingState.selectedArtist === 'any' ? 'First Available Master Artist' : bookingState.selectedArtist}
 </p>
 </div>
 </div>

 <div class="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-700 space-y-1">
 <span class="text-[10px] font-bold text-gray-400 uppercase">Doorstep Delivery Destination</span>
 <p class="font-bold text-gray-900 dark:text-white text-xs">${bookingState.name} (${bookingState.phone})</p>
 <p class="text-xs text-gray-600 dark:text-gray-300">${bookingState.address}</p>
 ${bookingState.gateCode ? `<p class="text-[11px] text-gray-500">Gate / Entry Code: <strong>${bookingState.gateCode}</strong></p>` : ''}
 </div>

 <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-1 text-emerald-900 dark:text-emerald-200 text-xs">
 <div class="flex items-center gap-2 font-bold">
 <i class="fa-solid fa-shield-halved text-emerald-600"></i> Safe-Salon™ Zero-Mess & Sanitation Guarantee
 </div>
 <p class="text-[11px]">100% Sealed Monodose Kit included. Certified therapist arrives in company vehicle with live GPS feed.</p>
 </div>
 </div>
 `;
 }

 window.finalizeDoorstepBooking = function () {
 const modal = document.getElementById('booking-confirmed-modal');
 if (modal) {
 modal.classList.remove('hidden');
 }
 if (window.showToast) {
 window.showToast(' Appointment Confirmed! Therapist dispatched.');
 }
 };

 function setupWizardListeners() {
 // Artist radio listeners
 document.querySelectorAll('input[name="booking-artist"]').forEach(radio => {
 radio.addEventListener('change', (e) => {
 bookingState.selectedArtist = e.target.value;
 });
 });
 }

 document.addEventListener('DOMContentLoaded', initBookingWizard);
})();
