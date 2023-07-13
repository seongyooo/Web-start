// JavaScript 코드
const checkbox = document.getElementById('checkbox');
const label = document.querySelector('header label');
const nav = document.querySelector('nav');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    label.classList.add('checked');
    nav.classList.add('open');
  } else {
    label.classList.remove('checked');
    nav.classList.remove('open');
  }
});
