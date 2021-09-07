const highScoreList = document.getElementById("highScoreList");
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

/*Add li for each high score*/
/*.map takes a array of items and convert them into something else */
highScoreList.innerHTML = highScore
  .map((score) => {
    return `<li class="high-score">${score.name}  -  ${score.score}</li>`;
  })
  .join("");
