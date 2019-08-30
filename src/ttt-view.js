class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $cell = $(event.currentTarget);
      this.makeMove($cell);
    });
  }
  
  makeMove($square) {
    const posString = $cell.attr("data-pos");
    const pos = [
      parseInt(posString[0], 10),
      parseInt(posString[2], 10)
    ];
    this.game.playMove(pos);


    let mark = "x";
    mark = (mark === "x") ? "o" : "x";
    $square.addClass(mark);
    return mark;

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
