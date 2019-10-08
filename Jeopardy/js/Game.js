/**
 * Title: Game.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file is used to declare the Game class
 */
class Game {
  constructor(round, players, winner) {
    this.roundNumber = 1;
    this.players = [];
    this.winner = winner;
    this.categories = [];
    this.questions = [];
    this.matchedQuestion = null;
  }

  // starts the Game
  start() {
    this.createCategories();
    this.getQuestions(this.categories);
    domUpdates.displayCategories(this.categories);
  }

  // creates a new player
  createPlayer() {
    let playerOne = $(".player-one").val();
    player1 = new Player(playerOne, true);
    this.players.push(player1);
    domUpdates.displayPlayer(player1);
    domUpdates.displayScore(player1);
  }

  createCategories() {
    let categoryName = Object.keys(data.categories);
    return this.categories.push(...categoryName);
  }

  getQuestions(categories) {
    this.questions = categories
      .reduce((array, category) => {
        let clues = data.clues.filter(clue => {
          return clue.categoryId === data.categories[category];
        });
        array.push(...clues.slice(0, 5));
        return array;
      }, [])
      .map(question => {
        return new Question(question);
      });
    const randIndex = Math.floor(Math.random() * this.questions.length);
    let randomDaily = this.questions[randIndex];
    this.dailyDouble = new DailyDouble(randomDaily);
    this.questions[randIndex] = this.dailyDouble;
  }

  matchQuestion(category, pointValue) {
    this.matchedQuestion = this.questions.find(question => {
      return (
        question.pointValue === pointValue &&
        question.categoryId === data.categories[category]
      );
    });
    domUpdates.matchDomQuestion(this.matchedQuestion);
  }

  // creates a new round after 20 rounds
  newRound(round) {
    if (this.roundNumber > 20) {
      this.createCategories();
      this.getQuestions(this.categories);
      domUpdates.displayCategories2(this.categories);
      domUpdates.updateRound(this.roundNumber);
      this.roundNumber = 1;
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = Game;
}
