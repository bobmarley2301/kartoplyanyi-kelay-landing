// Get navbar and navLinks elements
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const burgerMenu = document.getElementById("burger-menu");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

// Check if elements exist to avoid errors
if (
  navbar &&
  navLinks &&
  burgerMenu &&
  line1 &&
  line2 &&
  line3
) {
  // Add event listener for scroll
  window.addEventListener("scroll", function () {
    // Check if menu is open
    const isMenuOpen = !navLinks.classList.contains("hidden");

    if (window.scrollY > 50 || isMenuOpen) {
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

      // Ensure background color is applied when menu opens
      navbar.classList.add("bg-[#3C6255]");
      navLinks.classList.add("bg-[#3C6255]");
    } else {
      navLinks.style.maxHeight = "0"; // Animate closing
      setTimeout(() => {
        navLinks.classList.add("hidden");
      }, 500); // Match the duration of animation

      // Remove background color if scroll position is at the top
      if (window.scrollY <= 50) {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-[#3C6255]");
        navLinks.classList.remove("bg-[#3C6255]");
      }
    }

    // Animate burger menu to cross
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-[10px]");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-[10px]");
    line2.classList.toggle("opacity-0");
  });
}
