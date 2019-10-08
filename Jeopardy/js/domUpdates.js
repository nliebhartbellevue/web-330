/**
 * Title: domUpdates.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file is used to handle some DOM manipulation
 */
const domUpdates = {
  hideInputs() {
    $(".player-one").hide();
  },
  displayPlayer(player1) {
    domUpdates.hideInputs();
    domUpdates.displayCards();
    $(".player-one-card").text(`NAME: ${player1.name}`);
  },
  displayScore(player1) {
    $(".player-one-score").text(`SCORE: ${player1.score}`);
    $(".player-one-right").text(`RIGHT ANSWERS: ${player1.right}`);
    $(".player-one-wrong").text(`WRONG ANSWERS: ${player1.wrong}`);
    $("#totalAnswered").text(`TOTAL ANSWERED: ${player1.total}`);
    $("#players-percentage").text(
      "TOTAL PERCENTAGE: " + player1.percentage(player1.right, player1.total)
    );
  },

  // Thes two methods shuffle the questions
  displayCategories(categories) {
    $(".category-card-one").text(categories[0]);
    $(".category-card-two").text(categories[1]);
    $(".category-card-three").text(categories[2]);
    $(".category-card-four").text(categories[3]);
  },
  displayCategories2(categories) {
    $(".category-card-one").text(categories[2]);
    $(".category-card-two").text(categories[3]);
    $(".category-card-three").text(categories[0]);
    $(".category-card-four").text(categories[1]);
  },
  displayCards() {
    $(".player-cards").css("display", "inline");
  },
  matchDomQuestion(matchedQuestion) {
    $(".question-window").css("z-index", "1");
    $(".question-window").css("visibility", "visible");
    $(".question-clue").text(matchedQuestion.question);
    $(".hint1").text(matchedQuestion.hints[0]);
    $(".hint2").text(matchedQuestion.hints[1]);
    $(".hint3").text(matchedQuestion.hints[2]);
    $(".hint4").text(matchedQuestion.hints[3]);
    if (matchedQuestion.dailyDouble) {
      $(".wager-btn").css("display", "inline");
      $(".wager-input").css("display", "inline");
    } else {
      $(".wager-btn").css("display", "none");
      $(".wager-input").css("display", "none");
    }
  },
  // Creates a new round and increases point values
  updateRound(round) {
    $(".round-display").text(`ROUND 2`);
    let currentPoints = 200;
    $("[data-question]").each((index, item, c) => {
      item.innerText = currentPoint;
      $(item).attr("class", "question-cards");
      if (currentPoint < 1000) {
        currentPoint += 200;
      } else {
        currentPoint = 200;
      }
    });
  }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
