/**
 * ROCHELLE AT-HOME | Blog & Beauty Journal Dynamic Engine
 * Manages blog search, category filters, and dynamic article rendering by URL param.
 */

(function () {
 function getRootPath() {
 const path = window.location.pathname.replace(/\\/g, '/');
 if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
 return '../../';
 }
 return './';
 }

 // Blog Listing (blog.html)
 function initBlogListing() {
 const grid = document.getElementById('blog-grid-container');
 if (!grid || !window.ROCHELLE_DATA) return;

 const root = getRootPath();
 let currentCategory = 'all';
 let searchQuery = '';

 function render() {
 let posts = window.ROCHELLE_DATA.blogs.filter(b => {
 const matchCat = currentCategory === 'all' || b.category.toLowerCase() === currentCategory.toLowerCase();
 const matchSearch = b.title.toLowerCase().includes(searchQuery) ||
 b.excerpt.toLowerCase().includes(searchQuery) ||
 b.author.toLowerCase().includes(searchQuery);
 return matchCat && matchSearch;
 });

 if (posts.length === 0) {
 grid.innerHTML = `
 <div class="col-span-full text-center py-16">
 <i class="fa-solid fa-newspaper text-4xl text-[#BD5579] mb-4"></i>
 <h3 class="text-xl font-bold text-gray-900 dark:text-white">No articles match your criteria</h3>
 <p class="text-gray-500 text-sm mt-1">Try clearing your search query or selecting 'All Categories'.</p>
 </div>
 `;
 return;
 }

 grid.innerHTML = posts.map(post => `
 <article class="group bg-white dark:bg-[#1A1517] rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
 <div class="relative h-56 overflow-hidden">
 <img src="${root}assets/img/${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
 <span class="absolute top-3 left-3 bg-[#BD5579] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
 ${post.category}
 </span>
 </div>

 <div class="p-6 flex flex-col flex-grow">
 <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
 <span><i class="fa-regular fa-calendar mr-1"></i> ${post.date}</span>
 <span>•</span>
 <span><i class="fa-regular fa-clock mr-1"></i> ${post.readTime}</span>
 </div>

 <h3 class="font-serif-luxury text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#BD5579] transition mb-3 leading-snug">
 <a href="${root}public/pages/blog-details.html?id=${post.id}">${post.title}</a>
 </h3>

 <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-6 flex-grow">
 ${post.excerpt}
 </p>

 <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-800">
 <div class="flex items-center gap-2">
 <div class="w-7 h-7 rounded-full bg-pink-100 dark:bg-zinc-800 text-[#BD5579] font-bold text-xs flex items-center justify-center">
 ${post.author.charAt(0)}
 </div>
 <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">${post.author}</span>
 </div>
 <a href="${root}public/pages/blog-details.html?id=${post.id}" class="text-xs font-bold text-[#BD5579] hover:underline flex items-center gap-1">
 Read Article <i class="fa-solid fa-arrow-right text-[10px]"></i>
 </a>
 </div>
 </div>
 </article>
 `).join('');
 }

 // Category Filter Buttons
 document.querySelectorAll('.blog-category-filter').forEach(btn => {
 btn.addEventListener('click', () => {
 document.querySelectorAll('.blog-category-filter').forEach(b => {
 b.classList.remove('bg-[#BD5579]', 'text-white');
 b.classList.add('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
 });
 btn.classList.add('bg-[#BD5579]', 'text-white');
 btn.classList.remove('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
 currentCategory = btn.dataset.category;
 render();
 });
 });

 // Search Box
 const searchInput = document.getElementById('blog-search-input');
 if (searchInput) {
 searchInput.addEventListener('input', (e) => {
 searchQuery = e.target.value.toLowerCase().trim();
 render();
 });
 }

 render();
 }

 // Dynamic Blog Details Loader (blog-details.html?id=...)
 function initBlogDetailsPage() {
 const container = document.getElementById('blog-detail-view');
 if (!container || !window.ROCHELLE_DATA) return;

 const urlParams = new URLSearchParams(window.location.search);
 const blogId = urlParams.get('id') || 'doorstep-salon-guide';
 const root = getRootPath();

 const post = window.ROCHELLE_DATA.blogs.find(b => b.id === blogId) || window.ROCHELLE_DATA.blogs[0];

 document.title = `${post.title} | ROCHELLE Beauty Journal`;

 const breadcrumb = document.getElementById('blog-breadcrumb-title');
 if (breadcrumb) breadcrumb.innerText = post.title;

 // Filter related articles
 const related = window.ROCHELLE_DATA.blogs.filter(b => b.id !== post.id).slice(0, 3);

 container.innerHTML = `
 <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
 <!-- Main Article Body (2 Cols) -->
 <div class="lg:col-span-2 space-y-8">
 <!-- Article Header -->
 <div class="space-y-4">
 <div class="flex items-center gap-3">
 <span class="bg-[#BD5579] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
 ${post.category}
 </span>
 <span class="text-xs text-gray-500"><i class="fa-regular fa-clock mr-1"></i> ${post.readTime}</span>
 <span class="text-xs text-gray-500"><i class="fa-regular fa-calendar mr-1"></i> ${post.date}</span>
 </div>

 <h1 class="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
 ${post.title}
 </h1>

 <div class="flex items-center gap-3 pt-2">
 <div class="w-10 h-10 rounded-full bg-[#BD5579] text-white font-bold flex items-center justify-center text-sm shadow">
 ${post.author.charAt(0)}
 </div>
 <div>
 <h4 class="text-sm font-bold text-gray-900 dark:text-white">${post.author}</h4>
 <p class="text-xs text-gray-500 dark:text-gray-400">${post.authorRole} at ROCHELLE</p>
 </div>
 </div>
 </div>

 <!-- Featured Hero Image -->
 <div class="h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-800">
 <img src="${root}assets/img/${post.image}" alt="${post.title}" class="w-full h-full object-cover">
 </div>

 <!-- Article Content Text -->
 <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-200 leading-relaxed text-sm sm:text-base bg-white dark:bg-[#1A1517] p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-4">
 ${post.content}
 </div>

 <!-- Tags & Share -->
 <div class="flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-zinc-800">
 <div class="flex items-center gap-2 flex-wrap">
 <span class="text-xs font-bold text-gray-400">Tags:</span>
 ${post.tags.map(t => `<span class="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium">#${t}</span>`).join('')}
 </div>
 
 <div class="flex items-center gap-2 text-xs font-bold text-gray-500">
 <span>Share:</span>
 <button onclick="window.showToast('Article link copied to clipboard!')" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-[#BD5579] hover:text-white transition flex items-center justify-center"><i class="fa-brands fa-x-twitter"></i></button>
 <button onclick="window.showToast('Article link copied to clipboard!')" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-[#BD5579] hover:text-white transition flex items-center justify-center"><i class="fa-brands fa-facebook"></i></button>
 <button onclick="window.showToast('Article link copied to clipboard!')" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-[#BD5579] hover:text-white transition flex items-center justify-center"><i class="fa-solid fa-link"></i></button>
 </div>
 </div>
 </div>

 <!-- Sidebar (1 Col) -->
 <div class="space-y-8">
 <!-- Author Card -->
 <div class="bg-white dark:bg-[#1A1517] p-6 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm text-center space-y-3">
 <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-[#BD5579] to-pink-300 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md">
 ${post.author.charAt(0)}
 </div>
 <h4 class="font-serif-luxury text-xl font-bold text-gray-900 dark:text-white">${post.author}</h4>
 <p class="text-xs text-[#BD5579] font-bold uppercase tracking-wider">${post.authorRole}</p>
 <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
 Certified aesthetic and styling consultant dedicated to bringing sterile, VIP salon grade experiences directly to homes.
 </p>
 </div>

 <!-- Doorstep Booking Promo Widget -->
 <div class="bg-gradient-to-br from-[#141010] to-[#25181C] text-white p-6 rounded-3xl shadow-xl space-y-4">
 <span class="bg-[#BD5579] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">VIP Doorstep Privilege</span>
 <h4 class="font-serif-luxury text-2xl font-bold leading-snug">Experience Salon Luxury in Your Living Room</h4>
 <p class="text-xs text-gray-300 leading-relaxed">Book a certified master therapist equipped with single-use monodose kits and hospital-grade autoclave sterilization.</p>
 <a href="${root}public/pages/services.html" class="block w-full bg-white text-[#141010] hover:bg-[#BD5579] hover:text-white py-3 rounded-xl font-bold text-xs text-center uppercase tracking-wider transition">
 Explore Services Menu
 </a>
 </div>

 <!-- Related Reads -->
 <div class="bg-white dark:bg-[#1A1517] p-6 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-4">
 <h4 class="font-serif-luxury text-xl font-bold text-gray-900 dark:text-white">Related Beauty Articles</h4>
 <div class="space-y-4">
 ${related.map(r => `
 <a href="${root}public/pages/blog-details.html?id=${r.id}" class="flex items-center gap-3 group">
 <img src="${root}assets/img/${r.image}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0">
 <div>
 <span class="text-[10px] text-[#BD5579] font-bold uppercase">${r.category}</span>
 <h5 class="text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#BD5579] transition line-clamp-2">${r.title}</h5>
 </div>
 </a>
 `).join('')}
 </div>
 </div>
 </div>
 </div>
 `;
 }

 document.addEventListener('DOMContentLoaded', () => {
 initBlogListing();
 initBlogDetailsPage();
 });
})();
