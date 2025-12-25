function animateCounter(id, target) {
  let count = 0;
  const speed = target / 100;

  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).innerText = Math.floor(count);
  }, 20);
}

// Animate counters when page loads
window.addEventListener('load', () => {
  animateCounter("wins", 54);
  animateCounter("titles", 3);
  animateCounter("poles", 32);
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.querySelector('input[type="text"]').value.trim();
  const message = this.querySelector('textarea').value.trim();
  
  if (name && message) {
    alert(`Thank you ${name}! Your message has been sent to Max.`);
    this.reset();
  } else {
    alert('Please fill in all fields');
  }
});
