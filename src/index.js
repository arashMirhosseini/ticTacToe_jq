const View = require("./ttt-view");
const Game = require("../backend/game");

  $(() => {
    const game = new Game();
    new View(game, $('.ttt'));
  });
