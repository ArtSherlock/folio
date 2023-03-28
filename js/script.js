const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills-percents'),
      lines = document.querySelectorAll('.skills-scale-actual');
      
percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});