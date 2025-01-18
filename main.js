// Get navbar and navLinks elements
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const burgerMenu = document.getElementById("burger-menu");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

// Check if elements exist to avoid errors
if (navbar && navLinks && burgerMenu && line1 && line2 && line3) {
  // Function to update navbar background based on scroll and menu state
  const updateNavbarBackground = () => {
    const isMenuOpen = !navLinks.classList.contains("hidden");
    if (window.scrollY > 50 || isMenuOpen) {
      navbar.classList.add("bg-[#3C6255]");
      navbar.classList.remove("bg-transparent");
      navLinks.classList.add("bg-[#3C6255]");
      navLinks.classList.remove("bg-black");
    } else {
      navbar.classList.remove("bg-[#3C6255]");
      navbar.classList.add("bg-transparent");
      navLinks.classList.remove("bg-[#3C6255]");
    }
  };

  // Add smooth animation for navLinks height
  const toggleNavLinks = () => {
    const isHidden = navLinks.classList.contains("hidden");

    if (isHidden) {
      navLinks.classList.remove("hidden");
      navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Animate opening
      setTimeout(() => {
        navLinks.style.maxHeight = "none"; // Reset height after animation
      }, 500);
      navbar.classList.add("bg-[#3C6255]");
      navLinks.classList.add("bg-[#3C6255]");
    } else {
      navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Start from full height
      setTimeout(() => {
        navLinks.style.maxHeight = "0"; // Animate closing
      }, 0);

      setTimeout(() => {
        navLinks.classList.add("hidden"); // Hide menu after animation
        navLinks.style.maxHeight = null; // Reset height
      }, 500);

      if (window.scrollY <= 50) {
        navbar.classList.remove("bg-[#3C6255]");
        navbar.classList.add("bg-transparent");
        navLinks.classList.remove("bg-[#3C6255]");
      }
    }
  };

  // Animate burger menu lines
  const toggleBurgerMenu = () => {
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-[10px]");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-[10px]");
    line2.classList.toggle("opacity-0");
  };

  // Add border to navLinks items
  const addBorderToNavLinks = () => {
    const navItems = navLinks.querySelectorAll("li");
    navItems.forEach(item => {
      item.classList.add("border-b-2");
    });
  };

  // Event listeners
  window.addEventListener("scroll", updateNavbarBackground);
  burgerMenu.addEventListener("click", () => {
    toggleNavLinks();
    toggleBurgerMenu();
  });

  // Initial setup
  updateNavbarBackground();
  addBorderToNavLinks();
}
