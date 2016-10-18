const readline = require('readline');

class Board {
  constructor() {
    this.board = [...new Array(9)].map((_, i) => i + 1);
  }

  isOpen() {
    // check if game is not won
    return true;
  }

  play(square, player) {
    const i = square - 1;
    if (this.board[i] === 'X' || this.board[i] === 'O') return false; // already played
    if (square < 1 || square > 9) return false; // out of bounds

    this.board[i] = player === 0 ? 'X' : 'O';
    return true;
  }

  render() {
    for(let i = 0; i < 9; i += 3) {
      process.stdout.write(`${this.board.slice(i, i + 3).join(' | ')}\n`);
    }
  }
}

class Game {
  constructor(Board) {
    this.board = new Board();
    this.turn = 0;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'enter number> '
    });
  }

  get player() {
    return this.turn % 2;
  }

  invalidMove() {
    console.error('invalid move, please try again');
  }

  listen() {
    this.rl.on('line', (line) => {
      const square = line.trim();

      if (this.board.play(square, this.player)) {
        this.turn++;
        this.render();
      } else {
        this.invalidMove();
      }

      if(!this.board.isOpen()) this.stop();

      this.rl.prompt();
    }).on('close', this.stop);
  }

  start() {
    this.render();
    this.rl.prompt();
    this.listen();
  }

  stop() {
    process.stdout.write('\nthanks for playing tic-tac-toe\n');
    process.exit(0);
  }

  render() {
    this.board.render();
    process.stdout.write(`Player ${(this.turn % 2) + 1}'s Turn\n`);
  }
}

const g = new Game(Board);
g.start();
