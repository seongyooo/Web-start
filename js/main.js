const myHeading = document.querySelector('h1');
const myAnchor = document.querySelector('h1 a');

myHeading.textContent = "Road Write";
myAnchor.href = "index.html";


myHeading.addEventListener('click', function() {
  window.location.href = "index.html";
});

// 워드 클라우드 데이터 (임의로 생성한 예시 데이터)
