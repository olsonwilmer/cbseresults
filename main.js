// script.js
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resultForm');
    form.addEventListener('submit', event => {
      event.preventDefault();
      // Redirect after validation
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
  });
