const hamburgerMenu = document.querySelector('.js-hamburger-container');
const hamburgerMenu1 = document.querySelector('.js-hamburger-container1');
let click;

hamburgerMenu.addEventListener('click', function() { 
    const sidebar = document.querySelector('.js-sidebar');

    sidebar.classList.toggle('show');

});

hamburgerMenu1.addEventListener('click', function() { 
  const sidebar = document.querySelector('.js-sidebar');

  sidebar.classList.remove('show');

});
