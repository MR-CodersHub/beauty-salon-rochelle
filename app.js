/**
 * LUXE AT-HOME | Master Application Logic
 * Comprehensive Doorstep Beauty Service Engine
 */

const SERVICES_DATA = [
  // Hair Category
  {
    id: 'hair-1',
    category: 'hair',
    title: 'Moroccan Argan Hair Spa & Steam',
    duration: 60,
    price: 79,
    origPrice: 99,
    rating: 4.98,
    reviewsCount: 342,
    badge: 'Bestseller',
    brand: 'Kérastase Pro',
    image: 'assets/hero.jpg',
    desc: 'Deep nourishing hot-towel infusion, scalp detoxification massage, and Dyson supersonic blowdry finish.',
    steps: ['Scalp analysis & deep clarifying wash', 'Nutritive masque steam infusion', 'Aromatherapy scalp & shoulder pressure point massage', 'Custom blowdry & smoothing serum'],
    included: '100% Monodose Kérastase kit, disposable cape, scalp massager'
  },
  {
    id: 'hair-2',
    category: 'hair',
    title: 'Couture Cut & Volume Blowout',
    duration: 45,
    price: 65,
    origPrice: 85,
    rating: 4.95,
    reviewsCount: 289,
    badge: 'Popular',
    brand: 'Dyson & Oribe',
    image: 'assets/hero.jpg',
    desc: 'Personalized face-framing precision cut, split-end removal, and iconic red-carpet blowout styling.',
    steps: ['Face-shape consultation', 'Precision texturizing cut', 'Heat defense primer application', 'Volumizing Dyson barrel styling'],
    included: 'Sanitized Japanese steel shears, heat protector, styling spray'
  },
  {
    id: 'hair-3',
    category: 'hair',
    title: 'Keratin Silk Gloss Treatment',
    duration: 120,
    price: 189,
    origPrice: 240,
    rating: 4.99,
    reviewsCount: 178,
    badge: 'Frizz-Free 4 Mos',
    brand: 'L’Oréal Professionnel',
    image: 'assets/hero.jpg',
    desc: 'Formaldehyde-free organic silk protein infusion for instant glassy, mirror-like smoothness and anti-humidity defense.',
    steps: ['Purifying wash', 'Nano-keratin bond saturation', 'Infrared sealed heat lock', 'Mirror shine gloss polish'],
    included: 'Full sealed salon kit, ventilation fan, sulfate-free aftercare mini'
  },

  // Skin Category
  {
    id: 'skin-1',
    category: 'skin',
    title: '6-Step HydraGlow Radiance Facial',
    duration: 75,
    price: 119,
    origPrice: 155,
    rating: 4.99,
    reviewsCount: 512,
    badge: 'Top Rated',
    brand: 'O3+ Derma Pro',
    image: 'assets/skin.jpg',
    desc: 'Deep ultrasonic pore vacuum extraction, antioxidant vitamin C infusion, cooling jade roller and peel-off algae mask.',
    steps: ['Double enzymatic cleanse', 'Ultrasonic painless blackhead extraction', 'Pure Vitamin C & Hyaluronic serum infusion', 'Cryo-cooling lymphatic massage & algae rubber mask'],
    included: 'Single-use vacuum nozzles, sealed monodose ampoules, sterile headband'
  },
  {
    id: 'skin-2',
    category: 'skin',
    title: '24K Pure Gold Glow Ceremony',
    duration: 90,
    price: 149,
    origPrice: 195,
    rating: 4.97,
    reviewsCount: 210,
    badge: 'Luxury Luxe',
    brand: 'Casmara Luxury',
    image: 'assets/skin.jpg',
    desc: 'Revitalizing anti-aging therapy with pure 24K gold foil sheets, collagen peptide lifting massage, and instant luminosity.',
    steps: ['Micro-crystal polish', 'Cellular booster massage', '24K colloidal gold leaf layering', 'Hydra-lift firming contour mask'],
    included: '24K gold leaf sealed booklet, collagen mask, disposable facial bedsheet'
  },
  {
    id: 'skin-3',
    category: 'skin',
    title: 'Detoxifying Berry Cleanup & D-Tan',
    duration: 40,
    price: 55,
    origPrice: 70,
    rating: 4.92,
    reviewsCount: 165,
    badge: 'Quick Refresh',
    brand: 'Sothys Paris',
    image: 'assets/skin.jpg',
    desc: 'Quick pore declogging, antioxidant wild berry scrub, tan reversal mask, and cooling rosewater toning mist.',
    steps: ['Gentle foam cleanse', 'Berry walnut exfoliation', 'Oxygen detox pack', 'SPF 50 protective barrier cream'],
    included: 'Single-use biodegradable sponges, sealed berry kit'
  },

  // Nails Category
  {
    id: 'nails-1',
    category: 'nails',
    title: 'Russian Gel Manicure & Chrome Glaze',
    duration: 60,
    price: 69,
    origPrice: 89,
    rating: 4.98,
    reviewsCount: 420,
    badge: 'Trending Hailey Glow',
    brand: 'OPI & BioGel',
    image: 'assets/nails.jpg',
    desc: 'Flawless dry cuticle alignment, long-lasting LED gel overlay, chrome pearl powder dust, and warm cuticle oil bath.',
    steps: ['Dry e-file Russian cuticle prep', 'Nail shaping & buffing', 'Gel base & 2-coat color application', 'Chrome glazed topcoat & UV cure', 'Shea butter hand massage'],
    included: 'Autoclaved diamond bits, single-use nail file & buffer, LED lamp'
  },
  {
    id: 'nails-2',
    category: 'nails',
    title: 'Signature Ice Cream Spa Pedicure',
    duration: 60,
    price: 75,
    origPrice: 95,
    rating: 4.96,
    reviewsCount: 310,
    badge: 'Ultimate Relax',
    brand: 'Voesh New York',
    image: 'assets/nails.jpg',
    desc: 'Relaxing mobile foot tub soak, bubble salt effervescence, callus smoothing, sea kelp mask, and heated bootie therapy.',
    steps: ['Sanitized tub liner & aromatherapy soak', 'Dead skin exfoliation & callus buff', 'Cooling peppermint clay wrap', 'Pressure point reflexology foot massage', 'High shine breathable polish'],
    included: 'Disposable tub liners, sterile pumice, individually packed Voesh 4-step kit'
  },

  // Bridal & Glam Category
  {
    id: 'bridal-1',
    category: 'bridal',
    title: 'HD 4K Airbrush Couture Bridal Glam',
    duration: 150,
    price: 289,
    origPrice: 380,
    rating: 5.0,
    reviewsCount: 195,
    badge: 'Celebrity Choice',
    brand: 'MAC Pro & Temptu',
    image: 'assets/bridal.jpg',
    desc: 'Sweat-proof 24-hour HD airbrush makeup, premium faux mink lashes, bespoke couture hair updos, and dupatta/saree draping.',
    steps: ['Pre-makeup skin prep & primer', 'Temptu waterproof airbrush foundation', 'Custom eye artistry & lash application', 'Couture hair styling & floral/jewelry placement', 'Pleating & pinning drape service'],
    included: 'Airbrush equipment, setting mist, emergency touchup kit for the bride'
  },
  {
    id: 'bridal-2',
    category: 'bridal',
    title: 'Pre-Bridal Radiance Head-to-Toe Ritual',
    duration: 180,
    price: 249,
    origPrice: 320,
    rating: 4.99,
    reviewsCount: 140,
    badge: 'Complete Package',
    brand: 'Kérastase & Casmara',
    image: 'assets/bridal.jpg',
    desc: 'The ultimate royal pampering before your big day: 24K Gold Facial, Argan Hair Spa, Gel Mani-Pedi, and Full Body Polish.',
    steps: ['Full body chocolate-sugar scrub', '24K Gold luxury facial', 'Kérastase hair rejuvenation', 'Russian Gel manicure & pedicure duo'],
    included: 'All premium monodose kits, body wrap, disposable spa slippers & robe'
  }
];

class LuxeApp {
  constructor() {
    this.selectedServices = [];
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.durationFilter = 'all';
    this.priceFilter = 'all';
    this.wizardStep = 1;
    this.discountPercent = 0;
    this.promoCode = '';
    this.user = {
      isLoggedIn: false,
      name: 'Clara Client',
      email: 'clara.client@luxe.com'
    };
    
    // Live tracking simulation state
    this.trackingState = {
      currentStepIndex: 2, // 'enroute'
      etaMinutes: 8,
      markerX: 240,
      markerY: 115,
      intervalId: null
    };

    this.init();
  }

  init() {
    this.renderServicesGrid();
    this.renderCalculatorOptions();
    this.renderBookingServicePicker();
    this.bindEvents();
    this.setupDatePickers();
  }

  setupDatePickers() {
    const today = new Date().toISOString().split('T')[0];
    const quickDate = document.getElementById('quick-date-input');
    const bookDate = document.getElementById('booking-date-field');
    if (quickDate) quickDate.value = today;
    if (bookDate) bookDate.value = today;
  }

  bindEvents() {
    // Header location selector
    const locBtn = document.getElementById('location-picker-btn');
    if (locBtn) {
      locBtn.addEventListener('click', () => {
        const city = prompt('Enter your city or zipcode for doorstep service:', 'Beverly Hills, CA 90210');
        if (city) {
          document.getElementById('current-location').innerText = city;
          this.showToast(`Location updated to ${city}. 14 specialists available!`);
        }
      });
    }

    // Category Tabs
    document.querySelectorAll('.service-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.service-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.renderServicesGrid();
      });
    });

    // Search Input
    const searchInput = document.getElementById('service-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this.renderServicesGrid();
      });
    }

    // Duration & Price filters
    const durationFilter = document.getElementById('duration-filter');
    if (durationFilter) {
      durationFilter.addEventListener('change', (e) => {
        this.durationFilter = e.target.value;
        this.renderServicesGrid();
      });
    }

    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
      priceFilter.addEventListener('change', (e) => {
        this.priceFilter = e.target.value;
        this.renderServicesGrid();
      });
    }

    // Quick Hero Search Button
    const quickSearchBtn = document.getElementById('quick-search-btn');
    if (quickSearchBtn) {
      quickSearchBtn.addEventListener('click', () => {
        const cat = document.getElementById('quick-category-select').value;
        this.filterCategory(cat);
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        this.showToast(`Found 8 available beauticians for selected time slot!`);
      });
    }

    // Booking Button Triggers
    const headerBookBtn = document.getElementById('header-book-btn');
    if (headerBookBtn) headerBookBtn.addEventListener('click', () => this.openBookingModal());

    const heroBookBtn = document.getElementById('hero-book-btn');
    if (heroBookBtn) heroBookBtn.addEventListener('click', () => this.openBookingModal());

    const heroExploreBtn = document.getElementById('hero-explore-btn');
    if (heroExploreBtn) {
      heroExploreBtn.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Live Tracker Triggers
    document.getElementById('quick-track-btn')?.addEventListener('click', () => this.openTrackerModal());
    document.getElementById('launch-demo-tracker-btn')?.addEventListener('click', () => this.openTrackerModal());
    document.getElementById('footer-track-btn')?.addEventListener('click', () => this.openTrackerModal());

    // Safety Cert Button
    document.getElementById('view-cert-btn')?.addEventListener('click', () => this.openModal('safety-modal'));

    // Auth Button
    document.getElementById('auth-btn')?.addEventListener('click', () => this.openAuthModal());

    // Cart Button in Header
    document.getElementById('nav-cart-btn')?.addEventListener('click', () => this.openBookingModal());

    // Custom Bundle Book Button
    document.getElementById('book-custom-bundle-btn')?.addEventListener('click', () => {
      this.openBookingModal();
    });

    // Time Slot Buttons in Wizard
    document.querySelectorAll('.slot-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.slot-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const parent = q.parentElement;
        parent.classList.toggle('active');
      });
    });

    // Mobile nav toggle
    document.getElementById('mobile-toggle')?.addEventListener('click', () => {
      const nav = document.getElementById('main-nav');
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '80px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#FFFFFF';
        nav.style.padding = '1.5rem';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }
    });
  }

  // ==================== RENDERING SERVICES ====================
  renderServicesGrid() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    let filtered = SERVICES_DATA.filter(s => {
      const matchCat = this.currentCategory === 'all' || s.category === this.currentCategory;
      const matchSearch = s.title.toLowerCase().includes(this.searchQuery) ||
                          s.desc.toLowerCase().includes(this.searchQuery) ||
                          s.brand.toLowerCase().includes(this.searchQuery);
      let matchDur = true;
      if (this.durationFilter === 'quick') matchDur = s.duration <= 45;
      else if (this.durationFilter === 'standard') matchDur = s.duration > 45 && s.duration <= 90;
      else if (this.durationFilter === 'luxury') matchDur = s.duration > 90;

      return matchCat && matchSearch && matchDur;
    });

    if (this.priceFilter === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (this.priceFilter === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (this.priceFilter === 'popular') filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--color-blush); margin-bottom: 1rem;"></i>
          <h3>No services found</h3>
          <p style="color: var(--color-text-muted);">Try adjusting your search query or category filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(s => `
      <div class="service-card" id="card-${s.id}">
        <div class="service-card-img">
          <img src="${s.image}" alt="${s.title}" loading="lazy">
          <span class="service-badge-pill">${s.badge}</span>
          <span class="service-brand-tag"><i class="fa-solid fa-gem"></i> ${s.brand}</span>
        </div>
        <div class="service-card-content">
          <div class="service-meta">
            <span class="service-duration"><i class="fa-regular fa-clock"></i> ${s.duration} mins</span>
            <span class="service-rating"><i class="fa-solid fa-star"></i> ${s.rating} (${s.reviewsCount})</span>
          </div>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
          <div class="service-kit-tag">
            <i class="fa-solid fa-shield-virus"></i> 100% Sealed Monodose Kit Included
          </div>
          <div class="service-footer">
            <div class="service-price-box">
              <span class="price-strike">$${s.origPrice}</span>
              <span class="price-main">$${s.price}</span>
            </div>
            <div class="service-actions">
              <button class="btn-icon-details" onclick="app.openServiceDetailModal('${s.id}')" title="View details & steps">
                Details
              </button>
              <button class="btn-icon-book" onclick="app.quickAddService('${s.id}')">
                <i class="fa-solid fa-plus"></i> Book
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('.service-tab-btn').forEach(b => {
      if (b.dataset.category === cat) b.classList.add('active');
      else b.classList.remove('active');
    });
    this.renderServicesGrid();
  }

  openServiceDetailModal(id) {
    const s = SERVICES_DATA.find(item => item.id === id);
    if (!s) return;

    document.getElementById('modal-service-title').innerText = s.title;
    document.getElementById('modal-service-content').innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <img src="${s.image}" style="width: 100%; border-radius: 12px; object-fit: cover; max-height: 240px;">
        <div>
          <span class="section-badge">${s.category.toUpperCase()}</span>
          <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${s.title}</h4>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${s.desc}</p>
          <div style="display: flex; gap: 1rem; font-size: 0.85rem; font-weight: 700;">
            <span><i class="fa-regular fa-clock text-blush"></i> ${s.duration} mins</span>
            <span><i class="fa-solid fa-star" style="color: #F59E0B;"></i> ${s.rating} Rating</span>
            <span><i class="fa-solid fa-dollar-sign text-blush"></i> $${s.price} Total</span>
          </div>
        </div>
      </div>

      <div style="background: var(--color-porcelain); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
        <h5 style="font-weight: 700; margin-bottom: 0.75rem;"><i class="fa-solid fa-list-check text-blush"></i> Step-By-Step Doorstep Treatment:</h5>
        <ol style="padding-left: 1.25rem; font-size: 0.88rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--color-text-main);">
          ${s.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>

      <div style="background: #F4FAF5; border: 1px solid #C8E6C9; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem;">
        <h5 style="color: #2E7D32; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.25rem;"><i class="fa-solid fa-shield"></i> Hygiene & Product Kit Guarantee:</h5>
        <p style="font-size: 0.82rem; color: #1B5E20;">${s.included}</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 0.8rem; color: var(--color-text-light);">Guaranteed Price (0 travel fees):</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem;">$${s.price}.00</h3>
        </div>
        <button class="btn btn-primary" onclick="app.quickAddService('${s.id}'); app.closeModal('service-detail-modal'); app.openBookingModal();">
          Book This Look Now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    this.openModal('service-detail-modal');
  }

  // ==================== INTERACTIVE CALCULATOR ====================
  renderCalculatorOptions() {
    const container = document.getElementById('calc-checkbox-container');
    if (!container) return;

    container.innerHTML = SERVICES_DATA.slice(0, 6).map(s => `
      <div class="calc-option-item" id="calc-opt-${s.id}" onclick="app.toggleCalcOption('${s.id}')">
        <input type="checkbox" id="calc-chk-${s.id}" ${this.selectedServices.some(sel => sel.id === s.id) ? 'checked' : ''}>
        <div class="calc-opt-info">
          <strong>${s.title}</strong>
          <span><i class="fa-regular fa-clock"></i> ${s.duration} min • ${s.brand}</span>
        </div>
        <span class="calc-opt-price">$${s.price}</span>
      </div>
    `).join('');

    this.updateCalculatorTotals();
  }

  toggleCalcOption(id) {
    const s = SERVICES_DATA.find(item => item.id === id);
    if (!s) return;

    const existingIdx = this.selectedServices.findIndex(item => item.id === id);
    if (existingIdx >= 0) {
      this.selectedServices.splice(existingIdx, 1);
    } else {
      this.selectedServices.push(s);
    }

    // update styles
    const el = document.getElementById(`calc-opt-${id}`);
    const chk = document.getElementById(`calc-chk-${id}`);
    if (el && chk) {
      if (this.selectedServices.some(item => item.id === id)) {
        el.classList.add('selected');
        chk.checked = true;
      } else {
        el.classList.remove('selected');
        chk.checked = false;
      }
    }

    this.updateCalculatorTotals();
    this.updateCartCount();
    this.renderBookingServicePicker();
  }

  updateCalculatorTotals() {
    let rawTotal = 0;
    let totalDuration = 0;
    this.selectedServices.forEach(s => {
      rawTotal += s.price;
      totalDuration += s.duration;
    });

    let discount = 0;
    let discountMsg = 'Add 2+ items to unlock 15% OFF';
    if (this.selectedServices.length === 2) {
      discount = 0.15;
      discountMsg = '🎉 15% Duo Bundle Discount Applied!';
    } else if (this.selectedServices.length >= 3) {
      discount = 0.25;
      discountMsg = '🔥 25% VIP Spa Day Discount Applied!';
    }

    const finalPrice = Math.round(rawTotal * (1 - discount));
    const savings = rawTotal - finalPrice;

    document.getElementById('calc-total-duration').innerText = `${totalDuration} mins`;
    const origPriceEl = document.getElementById('calc-orig-price');
    const finalPriceEl = document.getElementById('calc-final-price');
    const savingsEl = document.getElementById('calc-savings');
    const badgeEl = document.getElementById('bundle-discount-badge');
    const bookBtn = document.getElementById('book-custom-bundle-btn');

    if (discount > 0) {
      origPriceEl.innerText = `$${rawTotal}`;
      origPriceEl.style.display = 'inline';
      savingsEl.innerText = `Save $${savings}`;
      savingsEl.style.display = 'inline';
    } else {
      origPriceEl.style.display = 'none';
      savingsEl.style.display = 'none';
    }

    finalPriceEl.innerText = `$${finalPrice}`;
    if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-tags"></i> <span>${discountMsg}</span>`;
    if (bookBtn) bookBtn.disabled = this.selectedServices.length === 0;

    document.getElementById('wiz-subtotal-display').innerText = `$${finalPrice}.00`;
  }

  updateCartCount() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = this.selectedServices.length;
  }

  // ==================== BOOKING WIZARD FLOW ====================
  renderBookingServicePicker() {
    const picker = document.getElementById('booking-service-picker');
    if (!picker) return;

    picker.innerHTML = SERVICES_DATA.map(s => {
      const isChecked = this.selectedServices.some(sel => sel.id === s.id);
      return `
        <div class="picker-item ${isChecked ? 'selected' : ''}" onclick="app.toggleServiceInPicker('${s.id}')">
          <div class="picker-left">
            <input type="checkbox" ${isChecked ? 'checked' : ''}>
            <div>
              <div class="picker-name">${s.title}</div>
              <div class="picker-meta"><i class="fa-regular fa-clock"></i> ${s.duration} mins • ${s.brand}</div>
            </div>
          </div>
          <span class="picker-price">$${s.price}</span>
        </div>
      `;
    }).join('');
  }

  toggleServiceInPicker(id) {
    this.toggleCalcOption(id);
    this.renderBookingServicePicker();
  }

  quickAddService(id) {
    const s = SERVICES_DATA.find(item => item.id === id);
    if (!s) return;
    if (!this.selectedServices.some(item => item.id === id)) {
      this.selectedServices.push(s);
      this.updateCalculatorTotals();
      this.updateCartCount();
      this.renderBookingServicePicker();
      this.showToast(`Added "${s.title}" to doorstep booking!`);
    }
    this.openBookingModal();
  }

  selectPackage(name, price) {
    this.selectedServices = [
      { id: 'custom-pkg', title: name, price: price, duration: 90, brand: 'Curated Luxe Package' }
    ];
    this.updateCalculatorTotals();
    this.updateCartCount();
    this.renderBookingServicePicker();
    this.openBookingModal();
    this.showToast(`Selected "${name}" bundle!`);
  }

  openBookingModal() {
    if (this.selectedServices.length === 0) {
      // Default to premier combo if none selected
      this.selectedServices = [SERVICES_DATA[0], SERVICES_DATA[3]];
      this.updateCalculatorTotals();
      this.updateCartCount();
      this.renderBookingServicePicker();
    }
    this.wizardStep = 1;
    this.updateWizardView();
    this.openModal('booking-modal');
  }

  wizardNext() {
    if (this.wizardStep === 1) {
      if (this.selectedServices.length === 0) {
        alert('Please select at least one treatment for your home visit.');
        return;
      }
      this.wizardStep = 2;
    } else if (this.wizardStep === 2) {
      this.wizardStep = 3;
    } else if (this.wizardStep === 3) {
      const addr = document.getElementById('booking-address').value;
      if (!addr) {
        alert('Please enter your home or doorstep address.');
        return;
      }
      this.updateBookingReview();
      this.wizardStep = 4;
    } else if (this.wizardStep === 4) {
      // Confirm booking
      this.closeModal('booking-modal');
      this.showToast('🎉 Appointment Confirmed! Sophia Vance has been assigned to your doorstep.');
      setTimeout(() => {
        this.openTrackerModal();
      }, 700);
      return;
    }
    this.updateWizardView();
  }

  wizardPrev() {
    if (this.wizardStep > 1) {
      this.wizardStep--;
      this.updateWizardView();
    }
  }

  updateWizardView() {
    for (let i = 1; i <= 4; i++) {
      const pane = document.getElementById(`wiz-pane-${i}`);
      const ind = document.getElementById(`wiz-ind-${i}`);
      if (pane) pane.classList.toggle('active', i === this.wizardStep);
      if (ind) ind.classList.toggle('active', i === this.wizardStep);
    }

    const prevBtn = document.getElementById('wiz-prev-btn');
    const nextBtn = document.getElementById('wiz-next-btn');

    if (prevBtn) prevBtn.style.display = this.wizardStep > 1 ? 'block' : 'none';

    if (nextBtn) {
      if (this.wizardStep === 1) nextBtn.innerHTML = `<span>Continue to Schedule</span> <i class="fa-solid fa-arrow-right"></i>`;
      else if (this.wizardStep === 2) nextBtn.innerHTML = `<span>Enter Doorstep Address</span> <i class="fa-solid fa-arrow-right"></i>`;
      else if (this.wizardStep === 3) nextBtn.innerHTML = `<span>Review & Confirm</span> <i class="fa-solid fa-arrow-right"></i>`;
      else if (this.wizardStep === 4) nextBtn.innerHTML = `<span>Confirm Home Booking</span> <i class="fa-solid fa-check"></i>`;
    }
  }

  updateBookingReview() {
    const servicesText = this.selectedServices.map(s => s.title).join(' + ');
    document.getElementById('review-services-list').innerText = servicesText;

    const dateVal = document.getElementById('booking-date-field').value || 'Today';
    const activeSlot = document.querySelector('.slot-pill.active')?.innerText || '01:00 PM';
    document.getElementById('review-datetime').innerText = `${dateVal} at ${activeSlot}`;

    const addr = document.getElementById('booking-address').value;
    const city = document.getElementById('booking-city').value;
    const zip = document.getElementById('booking-zip').value;
    document.getElementById('review-address').innerText = `${addr}, ${city} ${zip}`;

    let subtotal = 0;
    this.selectedServices.forEach(s => subtotal += s.price);
    let discount = this.selectedServices.length >= 3 ? 0.25 : (this.selectedServices.length === 2 ? 0.15 : 0);
    if (this.promoCode === 'GLOW20') discount = Math.max(discount, 0.20);
    const finalTotal = Math.round(subtotal * (1 - discount));

    document.getElementById('review-final-price').innerText = `$${finalTotal}.00`;
  }

  applyPromoCode() {
    const input = document.getElementById('booking-promo-code');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === 'GLOW20') {
      this.promoCode = 'GLOW20';
      this.showToast('✅ Promo code GLOW20 applied: 20% discount granted!');
      this.updateBookingReview();
    } else {
      alert('Invalid promo code. Try using code "GLOW20" for 20% off!');
    }
  }

  // ==================== LIVE TRACKER SIMULATION ====================
  openTrackerModal() {
    this.openModal('tracker-modal');
    this.startTrackingLiveSimulation();
  }

  startTrackingLiveSimulation() {
    if (this.trackingState.intervalId) clearInterval(this.trackingState.intervalId);

    // Dynamic countdown
    this.trackingState.intervalId = setInterval(() => {
      if (this.trackingState.etaMinutes > 1) {
        this.trackingState.etaMinutes--;
        const etaEl = document.getElementById('live-eta-minutes');
        const mapEtaEl = document.getElementById('map-eta-label');
        if (etaEl) etaEl.innerText = this.trackingState.etaMinutes;
        if (mapEtaEl) mapEtaEl.innerText = `${this.trackingState.etaMinutes} mins away`;

        // Animate vehicle marker towards destination
        this.trackingState.markerX += 15;
        const marker = document.getElementById('map-moving-marker');
        if (marker) marker.setAttribute('transform', `translate(${this.trackingState.markerX}, 115)`);

        if (this.trackingState.etaMinutes <= 2) {
          this.simulateArrivalStep('arrived');
        }
      }
    }, 8000);
  }

  simulateArrivalStep(step) {
    const steps = ['confirmed', 'sanitized', 'enroute', 'arrived', 'session', 'completed'];
    const sConfirmed = document.getElementById('step-confirmed');
    const sSanitized = document.getElementById('step-sanitized');
    const sEnroute = document.getElementById('step-enroute');
    const sArrived = document.getElementById('step-arrived');
    const sSession = document.getElementById('step-session');

    const l1 = document.getElementById('line-1');
    const l2 = document.getElementById('line-2');
    const l3 = document.getElementById('line-3');
    const l4 = document.getElementById('line-4');

    // Reset classes
    [sConfirmed, sSanitized, sEnroute, sArrived, sSession].forEach(s => {
      s.className = 'stepper-step';
    });
    [l1, l2, l3, l4].forEach(l => l.classList.remove('active'));

    sConfirmed.classList.add('completed');
    l1.classList.add('active');
    sSanitized.classList.add('completed');
    l2.classList.add('active');

    if (step === 'enroute') {
      sEnroute.classList.add('current');
      document.getElementById('live-eta-minutes').innerText = '8';
      document.getElementById('map-eta-label').innerText = '8 mins away';
      this.showToast('Specialist Sophia Vance is currently driving to your location.');
    } else if (step === 'arrived') {
      sEnroute.classList.add('completed');
      l3.classList.add('active');
      sArrived.classList.add('current');
      document.getElementById('live-eta-minutes').innerText = '0';
      document.getElementById('map-eta-label').innerText = 'Arrived at Doorstep!';
      document.getElementById('live-eta-clock').innerText = 'Sophia is ringing front bell with sanitized kit.';
      this.showToast('🔔 Beautician has arrived at your doorstep!');
    } else if (step === 'session') {
      sEnroute.classList.add('completed');
      l3.classList.add('active');
      sArrived.classList.add('completed');
      l4.classList.add('active');
      sSession.classList.add('current');
      document.getElementById('live-eta-clock').innerText = 'Treatment session in progress. Relax and enjoy!';
      this.showToast('✨ Home salon session is now underway!');
    } else if (step === 'completed') {
      sEnroute.classList.add('completed');
      l3.classList.add('active');
      sArrived.classList.add('completed');
      l4.classList.add('active');
      sSession.classList.add('completed');
      document.getElementById('live-eta-clock').innerText = 'Session completed & area sanitized. Thank you for choosing LUXE!';
      this.showToast('💖 Session completed! Spotless cleanup verified.');
    }
  }

  simulateCall() {
    alert('📞 Calling Sophia Vance (+1 310-555-LUXE)... Connected to mobile concierge bridge.');
  }

  simulateChat() {
    const msg = prompt('Send direct instruction to your beautician (e.g. "Gate code is #8812"):', 'Gate code is #8812, you can park in front.');
    if (msg) {
      this.showToast('Message dispatched to Sophia’s mobile device.');
      setTimeout(() => {
        alert('💬 Sophia Vance (Beautician): "Got it Clara! Bringing up the sanitized kit and protective floor coverings now 🌸"');
      }, 1500);
    }
  }

  // ==================== AUTHENTICATION & PORTAL ====================
  openAuthModal() {
    if (this.user.isLoggedIn) {
      document.getElementById('auth-form-container').style.display = 'none';
      document.getElementById('auth-logged-in-view').style.display = 'block';
    } else {
      document.getElementById('auth-form-container').style.display = 'block';
      document.getElementById('auth-logged-in-view').style.display = 'none';
    }
    this.openModal('auth-modal');
  }

  switchAuthTab(tab) {
    document.getElementById('tab-login').classList.toggle('active', tab === 'login');
    document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  }

  handleAuthSubmit() {
    const email = document.getElementById('auth-email').value;
    this.user.isLoggedIn = true;
    this.user.email = email;
    this.user.name = email.split('@')[0].toUpperCase();
    this.showToast(`Welcome back, ${this.user.name}!`);
    this.updateUserUI();
    this.closeModal('auth-modal');
  }

  demoQuickLogin() {
    this.user.isLoggedIn = true;
    this.user.name = 'Clara Client';
    this.user.email = 'clara.client@luxe.com';
    this.showToast('Signed in as VIP Member (Clara Client)');
    this.updateUserUI();
    this.openAuthModal();
  }

  logoutUser() {
    this.user.isLoggedIn = false;
    this.updateUserUI();
    this.closeModal('auth-modal');
    this.showToast('You have been signed out.');
  }

  updateUserUI() {
    const btnText = document.getElementById('user-btn-text');
    if (btnText) btnText.innerText = this.user.isLoggedIn ? 'VIP Portal' : 'Sign In';
  }

  openCustomPackageModal() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    this.showToast('Use our interactive custom builder to bundle your group looks!');
  }

  // ==================== MODAL HELPERS & TOASTS ====================
  openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-sparkles text-blush"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Instantiate App
const app = new LuxeApp();
window.app = app;
