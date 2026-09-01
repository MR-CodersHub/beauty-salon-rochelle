/**
 * ROCHELLE AT-HOME | Admin Management Dashboard Engine
 * Fleet dispatch, revenue analytics, appointment operations, and kit sterilization logs.
 */

(function () {
 const INITIAL_BOOKINGS = [
 { id: 'LX-9428', client: 'Clara Moreau', service: '6-Step HydraGlow Facial', date: 'Today, 02:00 PM', address: '1200 Sunset Blvd, Villa 4', specialist: 'Sophia Vance', status: 'En Route', amount: '$119' },
 { id: 'LX-9429', client: 'Maya Chen', service: 'Moroccan Hair Spa & Steam', date: 'Today, 03:30 PM', address: '742 Park Ave, Apt 12B', specialist: 'Elena Rostova', status: 'Kit Sterilized', amount: '$79' },
 { id: 'LX-9430', client: 'Sarah Rodriguez', service: 'Royal Couture Bridal Package', date: 'Tomorrow, 09:00 AM', address: '55 Ocean Drive, Suite 8', specialist: 'Nadia Al-Mansoor', status: 'Confirmed', amount: '$349' },
 { id: 'LX-9431', client: 'Emily Watson', service: 'Russian Gel Manicure & Glaze', date: 'Tomorrow, 11:30 AM', address: '18 Beverly Hills Drive', specialist: 'Sophia Vance', status: 'Confirmed', amount: '$69' },
 { id: 'LX-9432', client: 'Jessica Alba', service: '24K Pure Gold Glow Ceremony', date: 'Yesterday', address: '304 Rodeo Drive', specialist: 'Clara Moreau', status: 'Completed', amount: '$149' }
 ];

 window.adminBookings = [...INITIAL_BOOKINGS];

 function renderBookingsTable(filter = 'all') {
 const tableBody = document.getElementById('admin-bookings-tbody');
 if (!tableBody) return;

 const filtered = window.adminBookings.filter(b => {
 if (filter === 'all') return true;
 return b.status.toLowerCase().includes(filter.toLowerCase());
 });

 tableBody.innerHTML = filtered.map(b => {
 let badgeClass = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
 if (b.status === 'En Route') badgeClass = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 animate-pulse';
 if (b.status === 'Completed') badgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';

 return `
 <tr class="border-b border-gray-100 dark:border-zinc-800 text-xs hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition">
 <td class="py-3.5 px-4 font-bold text-gray-900 dark:text-white">${b.id}</td>
 <td class="py-3.5 px-4 font-semibold">${b.client}</td>
 <td class="py-3.5 px-4 text-gray-600 dark:text-gray-300">${b.service}</td>
 <td class="py-3.5 px-4 text-gray-500">${b.date}</td>
 <td class="py-3.5 px-4 font-medium text-gray-700 dark:text-gray-300">${b.specialist}</td>
 <td class="py-3.5 px-4 font-bold text-gray-900 dark:text-white">${b.amount}</td>
 <td class="py-3.5 px-4">
 <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${badgeClass}">
 ${b.status}
 </span>
 </td>
 <td class="py-3.5 px-4 text-right space-x-1">
 <button onclick="window.dispatchBeautician('${b.id}')" class="px-2.5 py-1 rounded bg-[#141010] text-white hover:bg-[#BD5579] text-[10px] font-bold transition">
 Dispatch
 </button>
 <button onclick="window.markComplete('${b.id}')" class="px-2.5 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 text-[10px] font-bold transition">
 Complete
 </button>
 </td>
 </tr>
 `;
 }).join('');
 }

 window.dispatchBeautician = function (id) {
 const booking = window.adminBookings.find(b => b.id === id);
 if (booking) {
 booking.status = 'En Route';
 renderBookingsTable();
 if (window.showToast) window.showToast(` Beautician ${booking.specialist} dispatched for booking ${id}!`);
 }
 };

 window.markComplete = function (id) {
 const booking = window.adminBookings.find(b => b.id === id);
 if (booking) {
 booking.status = 'Completed';
 renderBookingsTable();
 if (window.showToast) window.showToast(` Booking ${id} marked as completed & sanitized.`);
 }
 };

 window.filterAdminBookings = function (status) {
 renderBookingsTable(status);
 };

 window.addNewAdminService = function (event, form) {
 if (event) event.preventDefault();
 const title = form.querySelector('#new-service-title')?.value;
 const price = form.querySelector('#new-service-price')?.value;
 const cat = form.querySelector('#new-service-cat')?.value;

 if (!title || !price) {
 if (window.showToast) window.showToast('Please fill all required service fields.', 'error');
 return;
 }

 if (window.showToast) {
 window.showToast(` Service "${title}" ($${price}) published to catalog successfully!`);
 }
 form.reset();
 };

 document.addEventListener('DOMContentLoaded', () => {
 renderBookingsTable();
 });
})();
