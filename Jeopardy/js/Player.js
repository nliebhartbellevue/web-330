/**
 * Title: Player.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file is used to create the Player class
 */
class Player {
  constructor(name, turn, score, right, wrong) {
    this.name = name;
    this.score = 0;
    this.turn = turn;
    this.right = 0;
    this.wrong = 0;
    this.total = 0;
  }

  // computes the percentage of right answers given
  percentage(right, total) {
    return ((this.right / this.total) * 100).toFixed(0) + "%";
  }
}

if (typeof module !== "undefined") {
  module.exports = Player;
}
