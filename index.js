const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const navIcon = document.querySelector('.nav-icon');

const hidden = 'hiddenTag';
const active = 'active';

function addClass(tag, className) {
  tag.classList.add(className);
}
function removeClass(tag, className) {
  tag.classList.remove(className);
}

navIcon.addEventListener('click', () => {
  // addClass(navIcon, hidden);
  // removeClass(navList, hidden);
  navList.classList.toggle(hidden);
});

console.log(navItems);
navItems.forEach((item) => {
  return item.addEventListener('click', (tag) => {
    // addClass(tag.target, active);
    // removeClass(navIcon, hidden);
    addClass(navList, hidden);
  });
});
