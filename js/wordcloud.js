function drawWordCloud() {
  var element = document.getElementById('wordcloud');
  var wordcloudtWidth = element.offsetWidth;
  var wordcloudtHeight = element.offsetHeight;

  var fill = d3.scale.category10();
  var dataNum = 10;

  var layout = d3.layout.cloud()
    .size([wordcloudtWidth, wordcloudtHeight])
    .words([
      "텍스트", "마이닝", "샘플", "좋아요",
      "RoadRight", "Word", "Cloud", "text", "mining", "의미"
    ].map(function(d) {
      return { text: d, size: 7 + Math.random() * dataNum * 7, test: "haha" };
    }))
    .padding(5)
    .rotate(function() {
      return [0, 90, 180, 270][Math.floor(Math.random() * 4)];
    })
    .font("Impact")
    .fontSize(function(d) {
      return d.size;
    })
    .on("end", draw);

  layout.start();

  function draw(words) {
    d3.select("#wordcloud")
      .append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
      .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) {
        return d.size + "px";
      })
      .style("font-family", "Impact")
      .style("fill", function(d, i) {
        return fill(i);
      })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) {
        return d.text;
      });

    // 워드 클라우드가 한 번 그려진 후, 이벤트 핸들러를 제거합니다.
    layout.on("end", null);
  }
}

// 초기 로드 시 word cloud 그리기
drawWordCloud();
