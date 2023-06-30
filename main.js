<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.5/d3.layout.cloud.min.js"></script>


const myHeading = document.querySelector('h1');
const myAnchor = document.querySelector('h1 a');

myHeading.textContent = "Road Right";
myAnchor.href = "index.html";


myHeading.addEventListener('click', function() {
  window.location.href = "index.html";
});

// 워드 클라우드 데이터 (임의로 생성한 예시 데이터)
// 워드 클라우드 데이터
const wordCloudData = [
  "Hello", "world", "normally", "you", "want", "more", "words",
  "than", "this"
];

// 워드 클라우드 생성 및 표시 함수
function createWordCloud(data) {
  const width = 500;
  const height = 500;

  cloud()
    .size([width, height])
    .words(data.map(function(d) {
      return { text: d, size: 10 + Math.random() * 90 };
    }))
    .padding(5)
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();

  function draw(words) {
    d3.select("#wordcloud")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black")
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
  }
}

// 워드 클라우드 생성 및 표시
createWordCloud(wordCloudData);
