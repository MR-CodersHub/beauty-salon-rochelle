/**
 * ROCHELLE AT-HOME | Universal Form Validation & Toast Notification Engine
 * Validates Contact forms, Newsletters, Auth forms, and displays rich feedback alerts.
 */

(function () {
  // Create toast container if not present
  function ensureToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  window.showToast = function (message, type = 'success') {
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast-msg flex items-center gap-3 p-4 rounded-xl shadow-2xl border text-sm font-semibold transition-all duration-300 ${
      type === 'error'
        ? 'bg-rose-900/95 text-rose-100 border-rose-700'
        : 'bg-[#141010]/95 dark:bg-white/95 text-white dark:text-[#141010] border-[#BD5579]'
    }`;

    const icon = type === 'error' ? 'fa-triangle-exclamation text-rose-400' : 'fa-circle-check text-[#BD5579]';
    toast.innerHTML = `
      <i class="fa-solid ${icon} text-lg"></i>
      <div class="flex-grow">${message}</div>
      <button onclick="this.parentElement.remove()" class="opacity-70 hover:opacity-100">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };

  // Newsletter Validation Handler
  window.handleNewsletterSubmit = function (form) {
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput || !emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      window.showToast('Please enter a valid email address.', 'error');
      return;
    }

    const email = emailInput.value.trim();
    form.reset();
    window.showToast(`✨ Thank you! ${email} has been added to the VIP Glam Gazette list.`);
  };

  // Contact Form Validation Handler
  window.handleContactSubmit = function (event, form) {
    if (event) event.preventDefault();

    const name = form.querySelector('#contact-name')?.value.trim();
    const email = form.querySelector('#contact-email')?.value.trim();
    const phone = form.querySelector('#contact-phone')?.value.trim();
    const service = form.querySelector('#contact-service')?.value;
    const message = form.querySelector('#contact-message')?.value.trim();

    if (!name || name.length < 2) {
      window.showToast('Please enter your full name (minimum 2 characters).', 'error');
      return false;
    }

    if (!email || !validateEmail(email)) {
      window.showToast('Please enter a valid email address.', 'error');
      return false;
    }

    if (!message || message.length < 10) {
      window.showToast('Please enter a message with at least 10 characters.', 'error');
      return false;
    }

    // Success Acknowledgement
    const responseBox = document.getElementById('contact-success-box');
    if (responseBox) {
      responseBox.classList.remove('hidden');
      responseBox.innerHTML = `
        <div class="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200">
          <div class="flex items-center gap-3 mb-2">
            <i class="fa-solid fa-circle-check text-2xl text-emerald-600"></i>
            <h4 class="text-lg font-bold">Message Dispatched to Concierge</h4>
          </div>
          <p class="text-sm">Thank you, <strong>${name}</strong>! Your inquiry regarding <em>${service || 'General Inquiries'}</em> has been assigned to our VIP concierge. A specialist will call/email you within 15 minutes.</p>
        </div>
      `;
      form.style.display = 'none';
    }

    window.showToast(`🎉 Message successfully received! We will be in touch shortly, ${name}.`);
    return false;
  };

  // Login Form Validation Handler
  window.handleLoginSubmit = function (event, form) {
    if (event) event.preventDefault();

    const email = form.querySelector('#login-email')?.value.trim();
    const password = form.querySelector('#login-password')?.value.trim();

    if (!email || !validateEmail(email)) {
      window.showToast('Please enter a valid email address.', 'error');
      return false;
    }

    if (!password || password.length < 6) {
      window.showToast('Password must be at least 6 characters.', 'error');
      return false;
    }

    window.showToast(`Welcome back! Redirecting to User Dashboard...`);
    setTimeout(() => {
      window.location.href = '../../auth/user/user-dashboard.html';
    }, 1200);
    return false;
  };

  // Signup Form Validation Handler
  window.handleSignupSubmit = function (event, form) {
    if (event) event.preventDefault();

    const name = form.querySelector('#signup-name')?.value.trim();
    const email = form.querySelector('#signup-email')?.value.trim();
    const phone = form.querySelector('#signup-phone')?.value.trim();
    const password = form.querySelector('#signup-password')?.value.trim();
    const terms = form.querySelector('#signup-terms')?.checked;

    if (!name || name.length < 2) {
      window.showToast('Please enter your full name.', 'error');
      return false;
    }

    if (!email || !validateEmail(email)) {
      window.showToast('Please enter a valid email address.', 'error');
      return false;
    }

    if (!password || password.length < 6) {
      window.showToast('Password must be at least 6 characters.', 'error');
      return false;
    }

    if (!terms) {
      window.showToast('You must accept the Terms of Service & Privacy Policy.', 'error');
      return false;
    }

    window.showToast(`Account created successfully! Welcome to Rochelle, ${name}. Redirecting...`);
    setTimeout(() => {
      window.location.href = '../../auth/user/user-dashboard.html';
    }, 1200);
    return false;
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
