// Get navbar and navLinks elements
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const burgerMenu = document.getElementById("burger-menu");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

// Check if elements exist to avoid errors
if (navbar && navLinks && burgerMenu && line1 && line2 && line3) {
  const updateNavbarBackground = () => {
    const isMenuOpen = !navLinks.classList.contains("hidden");
    if (window.scrollY > 50 || isMenuOpen) {
      // Add background color and update navbar when menu is open or scrolled
      navbar.classList.add("bg-[#3C6255]");
      navbar.classList.remove("bg-transparent");
      navLinks.classList.add("bg-[#3C6255]");
      navLinks.classList.remove("bg-black");
    } else {
      // Revert navbar to transparent background when not scrolled and menu is closed
      navbar.classList.remove("bg-[#3C6255]");
      navbar.classList.add("bg-transparent");
      navLinks.classList.remove("bg-[#3C6255]");
      
    }
  };

  // Call the function initially to set the correct navbar state
  updateNavbarBackground();

  // Add scroll event listener to update navbar on scroll
  window.addEventListener("scroll", updateNavbarBackground);

  // Burger menu click event
  burgerMenu.addEventListener("click", () => {
    const isHidden = navLinks.classList.contains("hidden");

    // Toggle visibility of navLinks with animation
    if (isHidden) {
      navLinks.classList.remove("hidden");
      navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Animate opening
      setTimeout(() => {
        navLinks.style.maxHeight = "none"; // After animation, set max height to auto
      }, 500);
      navbar.classList.add("bg-[#3C6255]");
      navLinks.classList.add("bg-[#3C6255]");
    } else {
      // Animate closing with smooth transition
      navLinks.style.maxHeight = `${navLinks.scrollHeight}px`; // Start from full height
      setTimeout(() => {
        navLinks.style.maxHeight = "0"; // Animate closing
      }, 0); // Set initial height to 0 for closing animation

      // After animation, hide the menu
      setTimeout(() => {
        navLinks.classList.add("hidden");
      }, 500);

      // Remove background color if scroll position is at the top
      if (window.scrollY <= 50) {
        navbar.classList.remove("bg-[#3C6255]");
        navbar.classList.add("bg-transparent");
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

  // Function to add border to each li in navLinks
  const addBorderToNavLinks = () => {
    const navItems = navLinks.querySelectorAll("li");
    navItems.forEach(item => {
      item.classList.add("border-b-2");
    });
  };

  // Call the function to add border to navLinks items
  addBorderToNavLinks();
}
