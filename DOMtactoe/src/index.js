const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")


document.addEventListener("DOMContentLoaded", () => {
  const ttt = document.querySelector(".ttt")
  const game = new Game();
  const view = new View(game, ttt);
  // window.view = view
  // window.game = game
});
