// Simple client-side validation for the contact form
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission is static and not connected to a backend.)');
    form.reset();
  });
}
