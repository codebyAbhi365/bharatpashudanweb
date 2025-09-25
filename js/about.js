document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.style.display = 'none';
    contactSuccess.style.display = 'block';
  });
});
