const myHeading = document.querySelector('h1');
const myAnchor = document.querySelector('h1 a');

myHeading.textContent = "Road Write";
myAnchor.href = "index.html";


myHeading.addEventListener('click', function() {
  window.location.href = "index.html";
});

// 워드 클라우드 데이터 (임의로 생성한 예시 데이터)
const wordCloudData = [
  { text: 'RoadRight', size: 40 },
  { text: 'coding', size: 30 },
  { text: 'web', size: 25 },
  { text: 'python', size: 35 },
  // 추가적인 단어와 크기 데이터를 워드 클라우드에 맞게 설정해줍니다.
  // 예시 데이터는 크기(size) 값에 따라 단어의 크기가 결정됩니다.
];

// 워드 클라우드 생성 및 표시 함수
function createWordCloud(data) {
  const width = 600;
  const height = 400;

  // 워드 클라우드 레이아웃 설정
  const layout = d3.layout.cloud()
    .size([width, height])
    .words(data)
    .padding(5)
    .rotate(() => 0) // rotate 함수를 랜덤으로 지정하지 않음
    .fontSize(d => d.size)
    .on("end", draw);

  // 워드 클라우드 레이아웃 실행
  layout.start();

  // 워드 클라우드를 표시할 영역 선택
  const wordCloudDiv = d3.select("#wordcloud");

  // 워드 클라우드 그리기
  function draw(words) {
    wordCloudDiv
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", d => d.size + "px")
      .style("fill", "black")
      .attr("text-anchor", "middle")
      .attr("transform", d => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
      .text(d => d.text);
  }
}

// 워드 클라우드 생성 및 표시
createWordCloud(wordCloudData);
