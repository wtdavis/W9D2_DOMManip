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
    this.bindEvents()
  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(event) {
    let location = event.target.dataset.location
    // debugger
    this.makeMove(location)
    event.target.innerText =this.game.currentPlayer
  }
  
  makeMove(square) {
    
    let pos = [Math.floor(square / 3), square % 3]

    this.game.playMove(pos)
    if (this.game.isOver()) {
      const body = document.querySelector(body)
      body.append('<h1> You Won!</h1>')
    }
  }

}

module.exports = View;
