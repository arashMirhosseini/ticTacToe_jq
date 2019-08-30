const View = require("./ttt-view");
const Game = require("../backend/game");

  $(() => {
    const game = new Game();
    const view = new View(game, $('.ttt'));
  });
