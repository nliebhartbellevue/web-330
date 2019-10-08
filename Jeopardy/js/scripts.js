/**
 * Title: scripts.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file is used to handle ui transitions, animations and movements
 */
let player1;
let game = new Game();

$(".start-btn").on("click", () => {
  game.start();
  game.createPlayer();
});

$(".categories").on("click", e => {
  let category = $(e.target)
    .siblings(".category-cards")
    .text();
  let pointValue = parseInt($(event.target).text());
  game.matchQuestion(category, pointValue);
  $(e.target).text("X");
  $(e.target).removeClass("question-cards");
  $(e.target).addClass("question-no-hover");
});

$(".answer-btn").on("click", () => {
  game.matchedQuestion.checkAnswer();
  game.newRound(game.round);
});

$(".end-btn").on("click", () => {
  location.reload();
});

// used for the sidebar leader board
const mainsidebar = document.getElementById("mainSidebar");
const leaderboard = document.getElementById("lBContainer");

// used to create the sidebar animations
const hamburgerFunc = x => {
  x.classList.toggle("change");
  toggleSide();
  if (leaderboard.style.visibility == "visible") {
    leaderboard.style.visibility = "hidden";
  } else {
    leaderboard.style.visibility = "visible";
  }
};

const toggleSide = () => {
  mainsidebar.classList.toggle("openSide");
};

if (typeof module !== "undefined") {
  module.exports = scripts;
}
