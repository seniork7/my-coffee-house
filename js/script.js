// make the hamburger menu functional
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
}