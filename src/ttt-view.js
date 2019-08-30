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
    $grid.css({
      display: "flex",
      width: "300px",
      flexWrap: "wrap"
    });
    
    for (let i = 0; i < 9; i++) {
      const $cell = $("<li>")
      $cell.css("width", "100px");
      $grid.append($cell);
    }
    this.$el.append($grid);
  }
}

module.exports = View;
