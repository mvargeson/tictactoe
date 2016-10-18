const readline = require('readline');

class Game {
  constructor() {
    // factor out board into separate class
    this.board = [...new Array(9)].map((_, i) => i + 1);
    this.turn = 0;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'enter number> '
    });
  }

  play(n) {
    const i = n - 1;
    if (this.board[i] === 'X' || this.board[i] === 'O') return false; // already played
    if (n < 1 || n > 9) return false; // out of bounds

    this.board[i] = this.turn % 2 === 0 ? 'X' : 'O';
    return true;
  }

  invalidMove() {
    console.error('invalid move, please try again');
  }

  listen() {
    this.rl.on('line', (line) => {
      line = line.trim();

      if (this.play(line)) {
        this.turn++;
        this.render();
      } else {
        this.invalidMove();
      }

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
    for(let i = 0; i < 9; i += 3) {
      process.stdout.write(`${this.board.slice(i, i + 3).join(' | ')}\n`);
    }
    process.stdout.write(`Player ${(this.turn % 2) + 1}'s Turn\n`);
  }
}

const g = new Game();
g.start();
