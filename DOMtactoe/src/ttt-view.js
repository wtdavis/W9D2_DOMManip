class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement('ul');
    this.el.appendChild(ul);
    for (let i=0; i<9; i++){
      const li = document.createElement('li');
      li.setAttribute("data-location", i);
      ul.appendChild(li);
    }

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
