const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

//Save High Score in Local Storage
const highScore = JSON.parse(localStorage.getItem("highScore")) || []; //array of high score
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; //if no name entered disable save button
});

saveHighScore = (e) => {
  console.log("clicked the save button");
  e.preventDefault();

  //object
  const score = {
    // score: mostRecentScore,
    score: Math.floor(Math.random() * 100),
    name: username.value,
  };

  highScore.push(score);
  highScore.sort((a, b) => {
    //if b score is higher then a score put b before a
    return b.score - a.score;
  });

  //cut off from index 5
  highScore.splice(5);

  //update local storage with high score and save as a string
  localStorage.setItem("highScore", JSON.stringify(highScore)); //update local storage with high score and save as a string
  window.location.assign("/");
};
