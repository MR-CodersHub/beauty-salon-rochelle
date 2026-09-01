/**
 * ROCHELLE AT-HOME | Services Catalog & Dynamic Detail Renderer
 * Handles client-side service filtering, search, and URL parameter driven details.
 */

(function () {
  function getRootPath() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
      return '../../';
    }
    return './';
  }

  // Render Services Listing Page (services.html)
  function initServicesListing() {
    const grid = document.getElementById('services-grid-container');
    if (!grid || !window.ROCHELLE_DATA) return;

    const root = getRootPath();
    let currentCategory = 'all';
    let searchQuery = '';
    let sortFilter = 'popular';

    function render() {
      let items = window.ROCHELLE_DATA.services.filter(s => {
        const matchCat = currentCategory === 'all' || s.category === currentCategory;
        const matchSearch = s.title.toLowerCase().includes(searchQuery) ||
                            s.shortDesc.toLowerCase().includes(searchQuery) ||
                            s.brand.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
      });

      if (sortFilter === 'price-asc') items.sort((a, b) => a.price - b.price);
      else if (sortFilter === 'price-desc') items.sort((a, b) => b.price - a.price);
      else if (sortFilter === 'popular') items.sort((a, b) => b.reviewsCount - a.reviewsCount);

      if (items.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full text-center py-16">
            <i class="fa-solid fa-magnifying-glass text-4xl text-[#BD5579] mb-4"></i>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">No treatments found</h3>
            <p class="text-gray-500 text-sm mt-1">Try searching for other terms like 'Keratin', 'Hydra', 'Nails', or 'Bridal'.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = items.map(s => `
        <div class="group bg-white dark:bg-[#1A1517] rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
          <div class="relative h-56 overflow-hidden">
            <img src="${root}assets/img/${s.image}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <span class="absolute top-3 left-3 bg-[#141010]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              ${s.badge}
            </span>
            <span class="absolute bottom-3 right-3 bg-white/95 text-[#141010] text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow">
              <i class="fa-solid fa-gem text-[#BD5579] mr-1"></i> ${s.brand}
            </span>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span><i class="fa-regular fa-clock mr-1"></i> ${s.duration} mins</span>
              <span class="font-bold text-amber-500"><i class="fa-solid fa-star mr-1"></i> ${s.rating} (${s.reviewsCount})</span>
            </div>

            <h3 class="font-serif-luxury text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#BD5579] transition mb-2">
              <a href="${root}public/pages/service-details.html?id=${s.id}">${s.title}</a>
            </h3>

            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-4 flex-grow">
              ${s.shortDesc}
            </p>

            <div class="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg mb-6">
              <i class="fa-solid fa-shield-virus"></i> 100% Sealed Monodose Kit Included
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-800">
              <div>
                <span class="text-xs text-gray-400 line-through mr-1 font-sans-clean font-medium">$${s.origPrice}</span>
                <span class="font-sans-clean text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">$${s.price}</span>
              </div>
              <div class="flex gap-2">
                <a href="${root}public/pages/service-details.html?id=${s.id}" class="px-3 py-2 rounded-full border border-gray-300 dark:border-zinc-700 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-[#BD5579] hover:text-[#BD5579] transition">
                  Details
                </a>
                <a href="${root}public/pages/booking.html?service=${s.id}" class="px-4 py-2 rounded-full bg-[#141010] dark:bg-white text-white dark:text-[#141010] hover:bg-[#BD5579] dark:hover:bg-[#BD5579] dark:hover:text-white text-xs font-bold transition">
                  Book Look
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Category Tabs
    document.querySelectorAll('.service-category-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.service-category-tab').forEach(b => {
          b.classList.remove('bg-[#141010]', 'text-white', 'dark:bg-white', 'dark:text-[#141010]');
          b.classList.add('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
        });
        btn.classList.add('bg-[#141010]', 'text-white', 'dark:bg-white', 'dark:text-[#141010]');
        btn.classList.remove('bg-white', 'text-gray-700', 'dark:bg-zinc-800', 'dark:text-gray-200');
        currentCategory = btn.dataset.category;
        render();
      });
    });

    // Search Input
    const searchInput = document.getElementById('services-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        render();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('services-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        sortFilter = e.target.value;
        render();
      });
    }

    render();
  }

  // Dynamic Service Details Loader (service-details.html?id=...)
  function initServiceDetailsPage() {
    const detailContainer = document.getElementById('service-detail-view');
    if (!detailContainer || !window.ROCHELLE_DATA) return;

    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id') || 'hydra-facial';
    const root = getRootPath();

    const service = window.ROCHELLE_DATA.services.find(s => s.id === serviceId) || window.ROCHELLE_DATA.services[0];

    document.title = `${service.title} | ROCHELLE Doorstep Salon`;

    // Breadcrumb
    const breadcrumb = document.getElementById('detail-breadcrumb-title');
    if (breadcrumb) breadcrumb.innerText = service.title;

    detailContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left 2 Cols: Main Service Dossier -->
        <div class="lg:col-span-2 space-y-10">
          <!-- Hero Image & Badges -->
          <div class="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800">
            <img src="${root}assets/img/${service.image}" alt="${service.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 flex justify-between items-end flex-wrap gap-4 text-white">
              <div>
                <span class="inline-block bg-[#BD5579] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                  ${service.categoryName}
                </span>
                <h1 class="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">${service.title}</h1>
              </div>
              <div class="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                <i class="fa-solid fa-star text-amber-400"></i>
                <span class="font-bold text-sm">${service.rating}</span>
                <span class="text-xs text-gray-300">(${service.reviewsCount} verified reviews)</span>
              </div>
            </div>
          </div>

          <!-- Overview & Description -->
          <div class="bg-white dark:bg-[#1A1517] p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-4">
            <h2 class="font-serif-luxury text-2xl font-bold text-gray-900 dark:text-white">Treatment Overview</h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">${service.fullDesc}</p>
          </div>

          <!-- Step-by-Step Experience Checklist -->
          <div class="bg-white dark:bg-[#1A1517] p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-6">
            <h2 class="font-serif-luxury text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-[#BD5579]"></i> Step-By-Step Home Salon Protocol
            </h2>
            <div class="space-y-4">
              ${service.features.map((feat, idx) => `
                <div class="flex items-start gap-4 p-4 rounded-2xl bg-pink-50/50 dark:bg-zinc-800/40 border border-pink-100 dark:border-zinc-700/50">
                  <span class="w-8 h-8 rounded-full bg-[#BD5579] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    0${idx + 1}
                  </span>
                  <div>
                    <h4 class="font-bold text-sm text-gray-900 dark:text-white">${feat}</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Performed with medical-grade precision and sanitized instruments.</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Single-Use Kit Guarantee -->
          <div class="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700 space-y-2">
            <div class="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
              <i class="fa-solid fa-shield-halved text-emerald-600 text-lg"></i> What’s Inside Your Monodose Kit:
            </div>
            <p class="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">${service.includedKit}</p>
          </div>

          <!-- Dynamic FAQs for this service -->
          <div class="bg-white dark:bg-[#1A1517] p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-4">
            <h2 class="font-serif-luxury text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked About This Look</h2>
            <div class="space-y-3">
              ${service.faqs.map(faq => `
                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700">
                  <h4 class="font-bold text-sm text-gray-900 dark:text-white mb-1"><i class="fa-solid fa-circle-question text-[#BD5579] mr-1.5"></i> ${faq.q}</h4>
                  <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${faq.a}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Col: Booking & Pricing Tier Sticky Card -->
        <div class="space-y-6">
          <div class="sticky top-28 bg-white dark:bg-[#1A1517] p-8 rounded-3xl border-2 border-[#BD5579] shadow-xl space-y-6">
            <div class="flex justify-between items-baseline border-b border-gray-100 dark:border-zinc-800 pb-4">
              <div>
                <span class="text-xs text-gray-400 uppercase font-bold tracking-wider">Starting at</span>
                <div class="flex items-baseline gap-2">
                  <span class="font-sans-clean text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">$${service.price}</span>
                  <span class="text-sm text-gray-400 line-through font-sans-clean font-medium">$${service.origPrice}</span>
                </div>
              </div>
              <span class="bg-pink-100 dark:bg-pink-950/60 text-[#BD5579] text-xs font-extrabold px-3 py-1 rounded-full">
                <i class="fa-regular fa-clock mr-1"></i> ${service.duration} mins
              </span>
            </div>

            <!-- Pricing Tiers Selection -->
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Select Tier Package</label>
              ${service.pricingTiers.map((tier, idx) => `
                <label class="flex items-start gap-3 p-3.5 rounded-2xl border ${idx === 0 ? 'border-[#BD5579] bg-pink-50/40 dark:bg-pink-950/20' : 'border-gray-200 dark:border-zinc-700'} cursor-pointer hover:border-[#BD5579] transition">
                  <input type="radio" name="tier-choice" ${idx === 0 ? 'checked' : ''} class="mt-1 accent-[#BD5579]">
                  <div class="flex-grow">
                    <div class="flex justify-between items-center text-xs font-bold text-gray-900 dark:text-white">
                      <span>${tier.name}</span>
                      <span>$${tier.price}</span>
                    </div>
                    <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">${tier.desc}</p>
                  </div>
                </label>
              `).join('')}
            </div>

            <!-- Instant Doorstep Booking Button -->
            <a href="${root}public/pages/booking.html?service=${service.id}" class="w-full bg-[#BD5579] hover:bg-[#A33F62] text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest text-center shadow-lg transition flex items-center justify-center gap-2">
              <span>Book Appointment Now</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>

            <div class="space-y-2 pt-2 text-[11px] text-gray-500 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-check text-emerald-500"></i> Free Doorstep Travel (No hidden fees)
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-check text-emerald-500"></i> 100% Police Verified Specialist Assigned
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-check text-emerald-500"></i> Free Rescheduling up to 2 hours prior
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    initServicesListing();
    initServiceDetailsPage();
  });
})();
