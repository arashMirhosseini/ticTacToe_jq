class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard = this.setupBoard.bind(this);
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $grid = $("<ul>");
    
    for (let i = 0; i < 9; i++) {
      const $cell = $("<li>")
      
      $grid.append($cell);
    }
    this.$el.append($grid);
  }
}

module.exports = View;
