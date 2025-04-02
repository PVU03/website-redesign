// MOBILE HEADER - side menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu_toggle");
  const menuClose = document.getElementById("menu_close");
  const mobileMenu = document.getElementById("mobile_menu");
  const overlay = document.getElementById("overlay");

  // Function to open menu
  function openMenu() {
      mobileMenu.classList.add("active");
      overlay.style.background = "rgba(0, 0, 0, 0.3)";
      overlay.style.pointerEvents = "all";
  }

  // Function to close menu
  function closeMenu() {
      mobileMenu.classList.remove("active");
      overlay.style.background = "rgba(0, 0, 0, 0)";
      overlay.style.pointerEvents = "none";
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});

// SACRAMENTS PAGE - side menu js code
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.menu_button');
  const contents = document.querySelectorAll('.content_item');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Add active class to the clicked button
      this.classList.add('active');

      // Hide all content items
      contents.forEach(content => {
        content.classList.remove('active');
      });

      // Show the clicked content item
      const contentId = this.getAttribute('data_content');
      document.getElementById(contentId).classList.add('active');
    });
  });

  // Show the first content item by default and set the first button as active
  contents[0].classList.add('active');
  buttons[0].classList.add('active');
});

// SACRAMENTS PAGE - slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n, n);
}

function showSlides(n, direction = 1) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-left", "slide-right");
  }

  // Determine slide direction
  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  currentSlide.classList.add(direction > 0 ? "slide-right" : "slide-left");
}
