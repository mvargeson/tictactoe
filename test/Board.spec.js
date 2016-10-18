const expect = require('chai').expect;

const Board = require('../src/Board');

describe('Board', () => {
  const board = new Board();

  describe('isDone', () => {
    it('should be a method', () => {
      expect(board.isDone).to.be.a('function');
    });

    it('should return a boolean', () => {
      expect(board.isDone()).to.be.a('boolean');
    });
  })

  describe('play', () => {
    it('should be a method', () => {
      expect(board.play).to.be.a('function');
    });
  })

  describe('render', () => {
    it('should be a method', () => {
      expect(board.render).to.be.a('function');
    });
  })
});
