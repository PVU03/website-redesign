document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-button');
    const contents = document.querySelectorAll('.content-item');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
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
        const contentId = this.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
      });
    });
  
    // Show the first content item by default and set the first button as active
    contents[0].classList.add('active');
    buttons[0].classList.add('active');
  });
  