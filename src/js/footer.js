/**
 * ROCHELLE AT-HOME | Universal Footer Component
 * Renders identical luxury footer across all public pages with newsletter validation
 * and navigation links.
 */

(function () {
 function getRootPath() {
 const path = window.location.pathname.replace(/\\/g, '/');
 if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
 return '../../';
 }
 return './';
 }

 function renderFooter() {
 const target = document.getElementById('footer-container');
 if (!target) return;

 const root = getRootPath();

 target.innerHTML = `
 <footer class="bg-[#100C0D] text-gray-400 pt-16 pb-12 border-t border-zinc-800 transition-colors duration-300">
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <!-- Main Footer Grid -->
 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
 <!-- Col 1: Brand -->
 <div class="lg:col-span-2 space-y-4">
 <a href="${root}index.html" class="inline-flex items-center gap-3 group">
 <img src="${root}assets/img/logo.png" alt="ROCHELLE Logo" class="h-10 w-auto object-contain">
 <div class="flex flex-col">
 <span class="font-serif-luxury text-3xl font-bold tracking-widest text-white leading-none">ROCHELLE</span>
 <span class="text-[9px] uppercase tracking-[0.25em] text-[#BD5579] font-bold mt-1">At Home Studio</span>
 </div>
 </a>
 <p class="text-sm leading-relaxed text-gray-400 max-w-sm">
 Five-star couture doorstep beauty & wellness experiences delivered by certified master therapists with 100% sealed single-use hygiene kits.
 </p>
 
 <!-- Social Icons -->
 <div class="flex items-center gap-3 pt-2">
 <a href="#" class="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#BD5579] text-white flex items-center justify-center transition text-sm"><i cl<a href="#" class="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#BD5579] text-white flex items-center justify-center transition text-sm"><i class="fa-brands fa-facebook-f"></i></a>
 ass="fa-brands fa-instagram"></i></a>
 <a href="#" class="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#BD5579] text-white flex items-center justify-center transition text-sm"><i class="fa-brands fa-tiktok"></i></a>
 <a href="#" class="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#BD5579] text-white flex items-center justify-center transition text-sm"><i class="fa-brands fa-pinterest"></i></a>
 <a href="#" class="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#BD5579] text-white flex items-center justify-center transition text-sm"><i class="fa-brands fa-youtube"></i></a>
 </div>
 </div>

 <!-- Col 2: Services -->
 <div>
 <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4"> Services</h4>
 <ul class="space-y-2.5 text-xs">
 <li><a href="${root}public/pages/service-details.html?id=hair-spa" class="hover:text-[#BD5579] transition">Moroccan Hair Spa</a></li>
 <li><a href="${root}public/pages/service-details.html?id=hydra-facial" class="hover:text-[#BD5579] transition">6-Step HydraGlow Facial</a></li>
 <li><a href="${root}public/pages/service-details.html?id=russian-manicure" class="hover:text-[#BD5579] transition">Russian Gel Nails</a></li>
 <li><a href="${root}public/pages/service-details.html?id=bridal-airbrush" class="hover:text-[#BD5579] transition">Bridal HD Airbrush</a></li>
 <li><a href="${root}public/pages/service-details.html?id=keratin-gloss" class="hover:text-[#BD5579] transition">Keratin Silk Treatment</a></li>
 <li><a href="${root}public/pages/services.html" class="text-[#BD5579] font-bold hover:underline transition">View Full Catalog →</a></li>
 </ul>
 </div>

 <!-- Col 3: Company -->
 <div>
 <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
 <ul class="space-y-2.5 text-xs">
 <li><a href="${root}index.html" class="hover:text-[#BD5579] transition">Home</a></li>
 <li><a href="${root}public/pages/home-2.html" class="hover:text-[#BD5579] transition">Home 2</a></li>
 <li><a href="${root}public/pages/about.html" class="hover:text-[#BD5579] transition">About Our Story</a></li>
 <li><a href="${root}public/pages/pricing.html" class="hover:text-[#BD5579] transition">Pricing </a></li>
 <li><a href="${root}public/pages/blog.html" class="hover:text-[#BD5579] transition">Beauty Journal</a></li>
 <li><a href="${root}public/pages/contact.html" class="hover:text-[#BD5579] transition">Contact</a></li>
 </ul>
 </div>

 <!-- Col 4: Newsletter -->
 <div>
 <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4">VIP Glam Gazette</h4>
 <p class="text-xs text-gray-400 mb-3">Subscribe for monthly doorstep promotions & beauty secrets.</p>
 
 <form id="footer-newsletter-form" class="space-y-2" onsubmit="event.preventDefault(); window.handleNewsletterSubmit(this);">
 <div class="relative">
 <input type="email" required placeholder="Enter your email" class="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#BD5579]">
 </div>
 <button type="submit" class="w-full bg-[#BD5579] hover:bg-[#A33F62] text-white font-bold text-xs py-2 rounded-lg transition uppercase tracking-wider">
 Join VIP List
 </button>
 </form>
 </div>
 </div>

 <!-- Bottom Legal Bar -->
 <div class="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
 <p>© 2026 ROCHELLE At-Home Studio Inc. All rights reserved.</p>
 <div class="flex items-center gap-6">
 <a href="${root}public/pages/FAQ.html" class="hover:text-white transition">FAQ </a>
 <a href="${root}public/pages/Privacy-policy.html" class="hover:text-white transition">Privacy Policy</a>
 <a href="${root}public/pages/Terms-of-service.html" class="hover:text-white transition">Terms of Service</a>
 </div>
 </div>
 </div>
 </footer>
 `;
 }

 document.addEventListener('DOMContentLoaded', renderFooter);
})();
