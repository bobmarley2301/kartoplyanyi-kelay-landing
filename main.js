// Get navbar and navLinks elements
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const burgerMenu = document.getElementById("burger-menu");
const burgerSocial = document.getElementById("burger-social"); // Social icons in burger menu
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

// Add event listener for scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-[#3C6255]");
    navbar.classList.remove("bg-transparent");
    navLinks.classList.add("bg-[#3C6255]"); // Fixed to apply color to navLinks too
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-[#3C6255]");
    navLinks.classList.remove("bg-[#3C6255]"); // Removed extra class removal
  }
});

burgerMenu.addEventListener("click", () => {
  // Toggle menu visibility
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    burgerSocial.classList.remove("hidden"); // Show social media icons in burger menu
    navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Set max height dynamically
    setTimeout(() => {
      navLinks.style.maxHeight = "none"; // After animation, set max height to auto
    }, 500);
  } else {
    navLinks.style.maxHeight = "0"; // Set max height to 0 for closing the menu
    burgerSocial.classList.add("hidden"); // Hide social media icons when closing
    setTimeout(() => navLinks.classList.add("hidden"), 500); // Match the duration of animation
  }

  // Animate burger menu to cross
  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-[10px]");
  line3.classList.toggle("-rotate-45");
  line3.classList.toggle("-translate-y-[10px]");
  line2.classList.toggle("opacity-0");
});

