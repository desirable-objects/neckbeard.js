neckbeard = require('../src/neckbeard-node.js');

describe('spec which loops', function() {

  describe('Here is some functionality', function() {

    neckbeard
    .iterate('firstNumber', 'secondNumber', 'sum', 'difference')
    .where(   3,             3,              6,     0,
              10,            4,              14,    6,
              7,             1,              8,     6
    );

    neckbeard.loop('Hoping that #firstNumber plus #secondNumber is #sum, not #difference', function(firstNumber, secondNumber, sum, difference) {

      expect(firstNumber+secondNumber).toEqual(sum);
      expect(firstNumber-secondNumber).toEqual(difference);

    });

  });

  describe('Another quick functionality', function() {

    neckbeard
    .iterate('theNumber')
    .where(   1,
              2,
              3,
              4,
              5
    );

    neckbeard.loop('This time, what should happen is #theNumber should be less than 6, greater than 0', function(theNumber) {

      expect(theNumber).toBeLessThan(6);
      expect(theNumber).toBeGreaterThan(0);

    });

  });

});