// scripts/include.js
function loadComponent(selector, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => document.querySelector(selector).innerHTML = html);
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#navbarq", "navbar.html");
  loadComponent("#footerq", "footer.html");
});
