// Select Elements
const sidebar = document.getElementById("sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const menuBtn = document.querySelector(".header__menu-btn");
const closeBtn = document.querySelector(".sidebar__close-btn");

// Open Sidebar
function openMenu() {
    sidebar.removeAttribute("inert"); // Enable sidebar
    sidebar.style.display = "block";
    setTimeout(() => {
        sidebar.classList.add("opened");
    }, 10);
}

// Close Sidebar
function closeMenu() {
    sidebar.classList.remove("opened");
    setTimeout(() => {
        sidebar.style.display = "none";
        sidebar.setAttribute("inert", ""); // Disable sidebar
    }, 300); // Match transition duration
}

// Event Listeners for Menu Buttons
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Close Sidebar and Scroll to Section on Link Click
sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior

        closeMenu(); // Close sidebar

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            targetSection.focus(); // Focus on target section for accessibility
        }
    });
});

// Close Sidebar on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});