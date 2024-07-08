// HOME PAGE - popup
function closePopup() {
  const popup = document.getElementById('facebook-popup');
  popup.classList.add('hide');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500);
}

// SACRAMENTS PAGE - side menu js code
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.menu-button');
  const contents = document.querySelectorAll('.content-item');

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
      const contentId = this.getAttribute('data-content');
      document.getElementById(contentId).classList.add('active');
    });
  });

  // Show the first content item by default and set the first button as active
  contents[0].classList.add('active');
  buttons[0].classList.add('active');
});

// SACRAMENTS PAGE - dropdown menu js code
function toggleDropdown(section) {
  var dropdown = document.getElementById(section + 'Dropdown');
  dropdown.classList.toggle("show");
  var button = document.querySelector('.' + section + '-dropbtn');
  button.classList.toggle("active");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var buttons = document.getElementsByClassName("dropbtn");
    for (var j = 0; j < buttons.length; j++) {
      var button = buttons[j];
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    }
  }
}

// Get Involved Page Content Changer
function showContent(contentId) {
    document.getElementById('button_section').style.display = 'none';
    
    document.querySelectorAll('.content_section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(contentId).style.display = 'block';
}

function showButtons() {
    document.getElementById('button_section').style.display = 'flex';
    
    document.querySelectorAll('.content_section').forEach(section => {
        section.style.display = 'none';
    });
}