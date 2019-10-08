/**
 * Title: Question.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file creates the Question class, and holds the GameViewModel as well as methods
 */
class Question {
  constructor(clue) {
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
    this.hints = clue.hints;
    this.pointValue = clue.pointValue;
  }

  checkAnswer() {
    let currentPlayer = game.players.find(player => {
      return player.turn;
    });

    // if the answer is right add points to player, add 1 to right answers and add 1 to total answers
    // if the answer is wrong subtract from players score, add 1 to wrong answers and add 1 to total answers
    if ($(".question-answer-input").val() === this.answer) {
      currentPlayer.score += this.pointValue;
      currentPlayer.right += 1;
      currentPlayer.total += 1;
    } else {
      currentPlayer.score -= this.pointValue;
      currentPlayer.wrong += 1;
      currentPlayer.total += 1;
    }

    $(".question-window").css("z-index", "-1");
    domUpdates.displayScore(player1);
  }
}
/**
 * TODO: work needs to be done with the daily double class
 */
class DailyDouble extends Question {
  constructor(clue) {
    super(clue);
    this.dailyDouble = true;
  }

  checkWagerValidity() {}
}

function GameViewModel() {
  let self = this;

  // ko observable bindings used to update player card
  self.name = ko.observable("");
  self.rightAnswers = ko.observable(0);
  self.wrongAnswers = ko.observable(0);

  // ko computed used to total questions answered
  self.totalAnswered = ko.computed(function() {
    return this.rightAnswers() + this.wrongAnswers();
  }, self);

  // ko computed used to calculate the percentage of right answers given
  self.overallScore = ko.computed(function() {
    return (
      ((this.rightAnswers() / this.totalAnswered()) * 100).toFixed(0) + "%"
    );
  }, self);

  ko.bindingHandlers.leaderboard = {
    update: function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      let value = ko.unwrap(valueAccessor());
      console.log(value);

      if (value >= 16) {
        $(element).text("Expert");
      }
      if (value === 12 || value === 13 || value === 14) {
        $(element).text("Novice");
      }
      if (value <= 11) {
        $(element).text("Beginner");
      }
    }
  };
}
ko.applyBindings(new GameViewModel());

if (typeof module !== "undefined") {
  module.exports = Question;
}
