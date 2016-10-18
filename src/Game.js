const readline = require('readline');

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
    return (this.turn % 2) + 1;
  }

  invalidMove() {
    console.log('invalid move, please try again');
  }

  listen() {
    this.rl.on('line', (line) => {
      const square = line.trim();

      if (this.board.play(square, this.player)) {
        if(this.board.isDone()) {
          this.render();
          this.stop(true);
        } else {
          this.turn++;
          this.render();
        }
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

  stop(complete = false) {
    if (complete) process.stdout.write(`\nPlayer ${this.player} Won\n`);
    process.stdout.write('\nthanks for playing tic-tac-toe\n');
    process.exit(0);
  }

  render() {
    process.stdout.write('\x1Bc');
    this.board.render();
    process.stdout.write(`Player ${this.player}'s Turn\n`);
  }
}

module.exports = Game;
