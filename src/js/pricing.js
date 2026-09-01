/**
 * ROCHELLE AT-HOME | Interactive Bundle Calculator Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.calc-box');
  const totalEl = document.getElementById('calc-total-price');
  const rawEl = document.getElementById('calc-raw-price');
  const savingsEl = document.getElementById('calc-savings-badge');
  const statusEl = document.getElementById('calc-discount-status');

  if (!boxes.length || !totalEl) return;

  function updateCalc() {
    let sum = 0;
    let count = 0;
    boxes.forEach(b => {
      if (b.checked) {
        sum += parseFloat(b.value);
        count++;
      }
    });

    let discount = 0;
    if (count === 2) discount = 0.15;
    else if (count >= 3) discount = 0.25;

    const finalVal = Math.round(sum * (1 - discount));
    totalEl.innerText = `$${finalVal}`;

    if (discount > 0) {
      if (rawEl) {
        rawEl.innerText = `$${sum}`;
        rawEl.classList.remove('hidden');
      }
      if (savingsEl) {
        savingsEl.innerText = `Save $${sum - finalVal} (${discount * 100}%)`;
        savingsEl.classList.remove('hidden');
      }
      if (statusEl) {
        statusEl.innerText = count >= 3 ? '🎉 25% VIP Spa Day Discount Applied!' : '🎉 15% Duo Bundle Discount Applied!';
      }
    } else {
      if (rawEl) rawEl.classList.add('hidden');
      if (savingsEl) savingsEl.classList.add('hidden');
      if (statusEl) statusEl.innerText = 'Add 2+ items to unlock bundled discount';
    }
  }

  boxes.forEach(b => b.addEventListener('change', updateCalc));
});
