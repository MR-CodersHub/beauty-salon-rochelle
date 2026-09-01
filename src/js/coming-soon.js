/**
 * ROCHELLE AT-HOME | Coming Soon Countdown Timer
 */
document.addEventListener('DOMContentLoaded', () => {
 let seconds = 10;
 let minutes = 35;
 let hours = 18;
 let days = 42;

 const sEl = document.getElementById('cd-secs');
 const mEl = document.getElementById('cd-mins');
 const hEl = document.getElementById('cd-hours');
 const dEl = document.getElementById('cd-days');

 if (!sEl) return;

 setInterval(() => {
 seconds--;
 if (seconds < 0) {
 seconds = 59;
 minutes--;
 if (minutes < 0) {
 minutes = 59;
 hours--;
 }
 }
 if (sEl) sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
 if (mEl) mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
 if (hEl) hEl.innerText = hours < 10 ? '0' + hours : hours;
 if (dEl) dEl.innerText = days;
 }, 1000);
});
