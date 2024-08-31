document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const close = document.querySelector(".logo-close-wrapper .close");
    const creationImages = document.querySelectorAll(".creation-image");

    // Toggle menu visibility
    hamburger.addEventListener("click", function () {
        links.classList.add("fade-in");
    });

    close.addEventListener("click", function () {
        links.classList.remove("fade-in");
    });

    // Function to update image sources based on window width
    function updateCreationImages() {
        creationImages.forEach(image => {
            const newSrc = window.innerWidth <= 767 ? image.src.replace("desktop", "mobile") : image.src.replace("mobile", "desktop");
            image.src = newSrc;
        });
    }

    // Update images on initial load
    updateCreationImages();

    // Update images on window resize
    window.addEventListener("resize", updateCreationImages);
});
