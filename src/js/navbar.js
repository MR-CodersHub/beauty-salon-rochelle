/**
 * ROCHELLE AT-HOME | Universal Navbar Component
 * Renders identical luxury navigation bar across all pages with profile dropdown,
 * theme toggle, RTL mode, and full-featured responsive mobile drawer.
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
    <header class="sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#141012]/95 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <!-- Main Header Nav -->
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        <!-- Brand Logo -->
        <a href="${root}index.html" class="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <img src="${root}assets/img/logo.png" alt="ROCHELLE Logo" class="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
          <div class="flex flex-col">
            <span class="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#141010] dark:text-white group-hover:text-[#BD5579] transition leading-none">ROCHELLE</span>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#BD5579] font-bold mt-0.5 sm:mt-1">At Home Studio</span>
          </div>
        </a>

        <!-- Desktop Links -->
        <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
          <a href="${root}index.html" class="hover:text-[#BD5579] transition">Home</a>
          <a href="${root}public/pages/home-2.html" class="hover:text-[#BD5579] transition">Home 2</a>
          <a href="${root}public/pages/about.html" class="hover:text-[#BD5579] transition">About</a>
          <a href="${root}public/pages/services.html" class="hover:text-[#BD5579] transition">Services</a>
          <a href="${root}public/pages/pricing.html" class="hover:text-[#BD5579] transition">Pricing</a>
          <a href="${root}public/pages/blog.html" class="hover:text-[#BD5579] transition">Blog</a>
          <a href="${root}public/pages/contact.html" class="hover:text-[#BD5579] transition">Contact</a>
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-1.5 sm:gap-3">
          <!-- Theme Toggle (Dark / Light) -->
          <button onclick="window.toggleTheme()" class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-950/40 hover:text-[#BD5579] transition" title="Toggle Theme" aria-label="Toggle Theme">
            <i class="fa-solid fa-sun theme-icon-light text-xs sm:text-sm" style="display:none;"></i>
            <i class="fa-solid fa-moon theme-icon-dark text-xs sm:text-sm"></i>
          </button>

          <!-- RTL Toggle -->
          <button onclick="window.toggleRTL()" class="px-2 sm:px-2.5 h-8 sm:h-9 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 text-[11px] sm:text-xs font-bold hover:bg-pink-100 dark:hover:bg-pink-950/40 hover:text-[#BD5579] transition flex items-center gap-1" title="Toggle RTL Direction" aria-label="Toggle RTL">
            <span class="rtl-status-text">${isRtl ? 'LTR' : 'RTL'}</span>
          </button>

          <!-- Profile Dropdown -->
          <div class="relative py-1" id="nav-profile-container">
            <button id="nav-profile-btn" class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#141010] text-white dark:bg-white dark:text-[#141010] flex items-center justify-center hover:scale-105 transition shadow-sm" title="Account & Dashboards" aria-label="User Account">
              <i class="fa-regular fa-user text-xs sm:text-sm"></i>
            </button>

            <!-- Profile Dropdown Menu -->
            <div id="nav-profile-menu" class="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-[#1A1517] border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-2xl py-2 opacity-0 invisible transition-all duration-200 z-50">
              <div class="px-4 py-2 border-b border-gray-100 dark:border-zinc-800">
                <span class="text-[10px] uppercase font-bold text-gray-400 block">Sanctuary Account</span>
                <span class="text-xs font-bold text-gray-900 dark:text-white">Clara Moreau</span>
              </div>
              <div class="py-1">
                <a href="${root}public/auth/login.html" class="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579] transition">
                  <i class="fa-solid fa-right-to-bracket text-gray-400 w-4"></i> Sign In
                </a>
                <a href="${root}public/auth/signup.html" class="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579] transition">
                  <i class="fa-solid fa-user-plus text-gray-400 w-4"></i> Create Account
                </a>
              </div>
              <div class="border-t border-gray-100 dark:border-zinc-800 py-1">
                <a href="${root}auth/user/user-dashboard.html" class="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579] transition">
                  <i class="fa-solid fa-calendar-check text-[#BD5579] w-4"></i> User Dashboard
                </a>
                <a href="${root}auth/admin/admin-dashboard.html" class="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-[#BD5579] transition">
                  <i class="fa-solid fa-chart-line text-[#C69B7B] w-4"></i> Admin Dashboard
                </a>
              </div>
            </div>
          </div>

          <!-- Book CTA Button (Desktop & Tablet) -->
          <a href="${root}public/pages/booking.html" class="hidden md:inline-flex items-center gap-2 bg-[#141010] dark:bg-white text-white dark:text-[#141010] hover:bg-[#BD5579] dark:hover:bg-[#BD5579] dark:hover:text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md flex-shrink-0">
            <span>Book Look</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-nav-toggle" class="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gray-800 dark:text-white text-lg rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition" aria-label="Toggle Navigation Menu">
            <i id="mobile-nav-icon" class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Enhanced Mobile Drawer Menu -->
      <div id="mobile-nav-drawer" class="lg:hidden hidden bg-white/95 dark:bg-[#141012]/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto drawer-enter shadow-2xl">
        <!-- Navigation Links Grid -->
        <div class="grid grid-cols-2 gap-2 text-xs font-bold">
          <a href="${root}index.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-house text-[#BD5579] w-4"></i> Home
          </a>
          <a href="${root}public/pages/home-2.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-crown text-[#C69B7B] w-4"></i> Home 2 (Bridal)
          </a>
          <a href="${root}public/pages/services.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-scissors text-[#BD5579] w-4"></i> Services Menu
          </a>
          <a href="${root}public/pages/pricing.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-tags text-emerald-600 w-4"></i> Pricing Tiers
          </a>
          <a href="${root}public/pages/about.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-feather text-gray-400 w-4"></i> About Atelier
          </a>
          <a href="${root}public/pages/blog.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-newspaper text-gray-400 w-4"></i> Beauty Journal
          </a>
          <a href="${root}public/pages/contact.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-headset text-gray-400 w-4"></i> Contact Us
          </a>
          <a href="${root}public/pages/FAQ.html" class="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/60 text-gray-800 dark:text-gray-200 hover:text-[#BD5579] hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
            <i class="fa-solid fa-circle-question text-gray-400 w-4"></i> FAQs
          </a>
        </div>

        <!-- Portals & Dashboards -->
        <div class="border-t border-gray-200 dark:border-zinc-800 pt-3 space-y-2">
          <span class="text-[10px] uppercase font-extrabold tracking-wider text-gray-400 block px-1">Portals & Client Hub</span>
          <div class="grid grid-cols-2 gap-2 text-xs font-bold">
            <a href="${root}auth/user/user-dashboard.html" class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-[#BD5579] border border-pink-200 dark:border-pink-900/50 hover:bg-[#BD5579] hover:text-white transition">
              <i class="fa-solid fa-calendar-check"></i> Client Portal
            </a>
            <a href="${root}auth/admin/admin-dashboard.html" class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-[#BD5579] hover:text-white transition">
              <i class="fa-solid fa-chart-line text-[#C69B7B]"></i> Admin Fleet
            </a>
          </div>
        </div>

        <!-- Full-Width Mobile Book CTA -->
        <div class="pt-2">
          <a href="${root}public/pages/booking.html" class="w-full bg-[#BD5579] hover:bg-[#A33F62] text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2">
            <i class="fa-solid fa-sparkles"></i>
            <span>Book Doorstep Look</span>
          </a>
        </div>
      </div>
    </header>
    `;

    setupNavbarListeners();
    setActiveNavLinks();
  }

  function setActiveNavLinks() {
    const currentPath = window.location.pathname.replace(/\\/g, '/').replace(/\/index\.html$/, '/');

    // Desktop nav links
    const desktopNav = document.querySelector('header nav');
    if (desktopNav) {
      desktopNav.querySelectorAll('a').forEach((link) => {
        const linkPath = new URL(link.href).pathname.replace(/\\/g, '/').replace(/\/index\.html$/, '/');
        if (linkPath === currentPath) {
          link.classList.add('text-[#BD5579]', 'relative');
          link.classList.remove('text-gray-700', 'dark:text-gray-200');
          // Add underline accent
          link.style.cssText += ';position:relative;';
          const underline = document.createElement('span');
          underline.style.cssText = 'position:absolute;bottom:-2px;left:0;right:0;height:2px;background:#BD5579;border-radius:2px;';
          link.appendChild(underline);
        }
      });
    }

    // Mobile drawer links
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileDrawer) {
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        const linkPath = new URL(link.href).pathname.replace(/\\/g, '/').replace(/\/index\.html$/, '/');
        if (linkPath === currentPath) {
          link.classList.add('bg-pink-100', 'dark:bg-pink-950/60', 'text-[#BD5579]', '!border-[#BD5579]/40');
          link.classList.remove('bg-gray-50', 'dark:bg-zinc-800/60', 'text-gray-800', 'dark:text-gray-200');
        }
      });
    }
  }

  function setupNavbarListeners() {
    const profileBtn = document.getElementById('nav-profile-btn');
    const profileMenu = document.getElementById('nav-profile-menu');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileIcon = document.getElementById('mobile-nav-icon');

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
        const isHidden = mobileDrawer.classList.toggle('hidden');
        if (mobileIcon) {
          mobileIcon.className = isHidden ? 'fa-solid fa-bars' : 'fa-solid fa-xmark text-xl text-[#BD5579]';
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', renderNavbar);
})();
