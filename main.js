// Get navbar and navLinks elements
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const burgerMenu = document.getElementById("burger-menu");
const burgerSocial = document.getElementById("burger-social");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

// Check if elements exist to avoid errors
if (
  navbar &&
  navLinks &&
  burgerMenu &&
  burgerSocial &&
  line1 &&
  line2 &&
  line3
) {
  // Add event listener for scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#3C6255]");
      navbar.classList.remove("bg-transparent");
      navLinks.classList.add("bg-[#3C6255]");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-[#3C6255]");
      navLinks.classList.remove("bg-[#3C6255]");
    }
  });

  // Burger menu click event
  burgerMenu.addEventListener("click", () => {
    // Toggle menu visibility
    if (navLinks.classList.contains("hidden")) {
      navLinks.classList.remove("hidden");
      navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Animate opening
      setTimeout(() => {
        navLinks.style.maxHeight = "none"; // After animation, set max height to auto
      }, 500);
      // Make sure social icons are visible when menu is open
      burgerSocial.classList.remove("hidden");
    } else {
      navLinks.style.maxHeight = "0"; // Animate closing
      setTimeout(() => {
        navLinks.classList.add("hidden");
        // Hide social icons when menu is closed
        burgerSocial.classList.add("hidden");
      }, 500); // Match the duration of animation
    }

    // Animate burger menu to cross
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-[10px]");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-[10px]");
    line2.classList.toggle("opacity-0");
  });
}
