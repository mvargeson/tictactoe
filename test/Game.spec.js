const expect = require('chai').expect;

const Game = require('../src/Game');
const Board = require('../src/Board');

describe('Game', () => {
  const game = new Game(Board);

  describe('start', () => {
    it('should be a method', () => {
      expect(game.start).to.be.a('function');
    });
  });

  describe('stop', () => {
    it('should be a method', () => {
      expect(game.stop).to.be.a('function');
    });
  });

  describe('listen', () => {
    it('should be a method', () => {
      expect(game.listen).to.be.a('function');
    });
  });

  describe('invalidMove', () => {
    it('should be a method', () => {
      expect(game.invalidMove).to.be.a('function');
    });
  });

  describe('render', () => {
    it('should be a method', () => {
      expect(game.render).to.be.a('function');
    });
  });
});
