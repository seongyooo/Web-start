const myHeading = document.querySelector('h1');
const myAnchor = document.querySelector('h1 a');

myHeading.textContent = "Road Write";
myAnchor.href = "index.html";


myHeading.addEventListener('click', function() {
  window.location.href = "index.html";
});