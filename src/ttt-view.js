class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }
  
  makeMove($square) {
    const posString = $square.attr("data-pos");
    const pos = [
      parseInt(posString[0], 10),
      parseInt(posString[2], 10)
    ];
    const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This " + e.msg.toLowerCase());
      return;
    }

    $square.addClass(currentPlayer);
    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }

  }

  setupBoard() {
    const $grid = $("<ul>");
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $cell = $("<li>").attr("data-pos", [i , j]);
        $grid.append($cell);
        
      }
      
    }
    this.$el.append($grid);
    
  }
}

module.exports = View;
