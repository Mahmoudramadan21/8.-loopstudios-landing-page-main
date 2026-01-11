// Select Elements
const mobileNav = document.getElementById("mobile-nav");
const menuBtn = document.querySelector(".header__menu-btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");

// Open mobile nav
function openMenu() {
  mobileNav.removeAttribute("inert");
  mobileNav.style.display = "block";
  requestAnimationFrame(() => {
    mobileNav.classList.add("opened");
  });
}

// Close mobile nav
function closeMenu() {
  mobileNav.classList.remove("opened");
  setTimeout(() => {
    mobileNav.style.display = "none";
    mobileNav.setAttribute("inert", "");
  }, 300);
}

// Event Listeners
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Event Delegation for mobile nav links
mobileNav.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link) return;

  closeMenu();
});

// Close on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
