class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on("click", "li", event => {
      const $cell = $(event.currentTarget);
      const posString = $cell.attr("data-pos");
      const pos = [
        parseInt(posString[0], 10), 
        parseInt(posString[2], 10)
      ];
      
      this.game.playMove(pos);
    });
  }

  makeMove($square) {}

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
