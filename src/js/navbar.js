/**
 * ROCHELLE AT-HOME | Universal Navbar Component
 * Renders identical luxury navigation bar across all pages with profile dropdown,
 * theme toggle, RTL mode, and mobile drawer.
 */

(function () {
  function getRootPath() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/public/pages/') || path.includes('/public/auth/') || path.includes('/auth/admin/') || path.includes('/auth/user/')) {
      return '../../';
    }
    return './';
  }

  function renderNavbar() {
    const target = document.getElementById('navbar-container');
    if (!target) return;

    const root = getRootPath();
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    target.innerHTML = `
      <header class="sticky top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#141012]/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">

        <!-- Main Header Nav -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <!-- Brand Logo -->
          <a href="${root}index.html" class="flex items-center gap-3 group">
            <img src="${root}assets/img/logo.png" alt="ROCHELLE Logo" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
            <div class="flex flex-col">
              <span class="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-widest text-[#141010] dark:text-white group-hover:text-[#BD5579] transition leading-none">ROCHELLE</span>
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#BD5579] font-bold mt-1">At Home Studio</span>
            </div>
          </a>

          <!-- Desktop Links -->
          <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
            <a href="${root}index.html" class="hover:text-[#BD5579] transition">Home</a>
            <a href="${root}public/pages/home-2.html" class="hover:text-[#BD5579] transition">Home 2</a>
            <a href="${root}public/pages/about.html" class="hover:text-[#BD5579] transition">About</a>
            <a href="${root}public/pages/services.html" class="hover:text-[#BD5579] transition">Services</a>
            <a href="${root}public/pages/blog.html" class="hover:text-[#BD5579] transition">Blog</a>
            <a href="${root}public/pages/contact.html" class="hover:text-[#BD5579] transition">Contact</a>
          </nav>

          <!-- Right Action Controls -->
          <div class="flex items-center gap-3">
            <!-- Theme Toggle (Dark / Light) -->
            <button onclick="window.toggleTheme()" class="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-950/40 hover:text-[#BD5579] transition" title="Toggle Theme">
              <i class="fa-solid fa-sun theme-icon-light text-sm" style="display:none;"></i>
              <i class="fa-solid fa-moon theme-icon-dark text-sm"></i>
            </button>

            <!-- RTL Toggle -->
            <button onclick="window.toggleRTL()" class="px-2.5 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 text-xs font-bold hover:bg-pink-100 dark:hover:bg-pink-950/40 hover:text-[#BD5579] transition flex items-center gap-1" title="Toggle RTL Direction">
              <i class="fa-solid fa-globe text-xs"></i>
              <span class="rtl-status-text">${isRtl ? 'LTR' : 'RTL'}</span>
            </button>

            <!-- Profile Dropdown (Requirement #1) -->
            <div class="relative py-2" id="nav-profile-container">
              <button id="nav-profile-btn" class="w-9 h-9 rounded-full bg-[#141010] text-white dark:bg-white dark:text-[#141010] flex items-center justify-center hover:scale-105 transition shadow-sm" title="Account & Dashboards">
                <i class="fa-regular fa-user text-sm"></i>
              </button>

              <!-- Profile Dropdown Menu -->
              <div id="nav-profile-menu" class="absolute right-0 top-full mt-1 w-56 bg-white dark:bg-[#1A1517] border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-2xl py-2 opacity-0 invisible transition-all duration-200 z-50">
                <div class="px-4 py-2.5 border-b border-gray-100 dark:border-zinc-800">
                  <p class="text-xs font-bold text-gray-900 dark:text-white">Rochelle Member</p>
                  <p class="text-[11px] text-gray-500 dark:text-gray-400">client.portal@rochelle.com</p>
                </div>
                
                <div class="py-1">
                  <a href="${root}public/auth/login.html" class="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579]">
                    <i class="fa-solid fa-right-to-bracket text-gray-400 w-4"></i> Sign In
                  </a>
                  <a href="${root}public/auth/signup.html" class="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579]">
                    <i class="fa-solid fa-user-plus text-gray-400 w-4"></i> Create Account
                  </a>
                </div>

                <div class="border-t border-gray-100 dark:border-zinc-800 py-1">
                  <div class="px-4 py-1 text-[10px] uppercase font-extrabold tracking-wider text-gray-400">Dashboards</div>
                  <a href="${root}auth/user/user-dashboard.html" class="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579]">
                    <i class="fa-solid fa-calendar-check text-[#BD5579] w-4"></i> User Dashboard
                  </a>
                  <a href="${root}auth/admin/admin-dashboard.html" class="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579]">
                    <i class="fa-solid fa-chart-line text-[#C69B7B] w-4"></i> Admin Dashboard
                  </a>
                </div>

                <div class="border-t border-gray-100 dark:border-zinc-800 pt-1">
                  <a href="${root}public/pages/coming-soon.html" class="flex items-center gap-2 px-4 py-1.5 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <i class="fa-solid fa-clock-rotate-left w-4"></i> Maintenance Mode
                  </a>
                </div>
              </div>
            </div>

            <!-- Book CTA Button -->
            <a href="${root}public/pages/booking.html" class="hidden sm:inline-flex items-center gap-2 bg-[#141010] dark:bg-white text-white dark:text-[#141010] hover:bg-[#BD5579] dark:hover:bg-[#BD5579] dark:hover:text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md">
              <span>Book Look</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button id="mobile-nav-toggle" class="lg:hidden w-9 h-9 flex items-center justify-center text-gray-800 dark:text-white text-lg">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-nav-drawer" class="lg:hidden hidden bg-white dark:bg-[#141012] border-b border-gray-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-3">
          <a href="${root}index.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">Home </a>
          <a href="${root}public/pages/home-2.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">Home 2 </a>
          <a href="${root}public/pages/about.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">About Us</a>
          <a href="${root}public/pages/services.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">Services </a>
          <a href="${root}public/pages/blog.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">Blog</a>
          <a href="${root}public/pages/contact.html" class="block py-2 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BD5579]">Contact Us</a>
        </div>
      </header>
    `;

    setupNavbarListeners();
  }

  function setupNavbarListeners() {
    const profileBtn = document.getElementById('nav-profile-btn');
    const profileMenu = document.getElementById('nav-profile-menu');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');

    if (profileBtn && profileMenu) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = profileMenu.classList.contains('opacity-100');
        if (isVisible) {
          profileMenu.classList.remove('opacity-100', 'visible');
          profileMenu.classList.add('opacity-0', 'invisible');
        } else {
          profileMenu.classList.remove('opacity-0', 'invisible');
          profileMenu.classList.add('opacity-100', 'visible');
        }
      });

      document.addEventListener('click', (e) => {
        if (!profileMenu.contains(e.target) && e.target !== profileBtn) {
          profileMenu.classList.remove('opacity-100', 'visible');
          profileMenu.classList.add('opacity-0', 'invisible');
        }
      });
    }

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.toggle('hidden');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', renderNavbar);
})();
