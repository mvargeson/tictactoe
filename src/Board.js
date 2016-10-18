class Board {
  constructor() {
    this.board = [...new Array(9)].map((_, i) => i + 1);
  }

  isDone() {
    for(let i = 0; i < this.board.length; i += 3) {
      // check row
      let row = this.board.slice(i, i + 3);
      if (row.every(s => s === 'X') || row.every(s => s === 'O')) return true;

      // check col
      let col = [this.board[i], this.board[i + 3], this.board[i + 6]];
      if (col.every(s => s === 'X') || col.every(s => s === 'O')) return true;
    }

    // check diag
    // ...

    return false;
  }

  play(square, player) {
    const i = square - 1;
    if (this.board[i] === 'X' || this.board[i] === 'O') return false; // already played
    if (square < 1 || square > 9) return false; // out of bounds

    this.board[i] = player === 1 ? 'X' : 'O';
    return true;
  }

  render() {
    for(let i = 0; i < this.board.length; i += 3) {
      let row = this.board.slice(i, i + 3);
      process.stdout.write(`${row.join(' | ')}\n`);
    }
  }
}

module.exports = Board;
