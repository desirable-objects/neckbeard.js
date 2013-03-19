neckbeard = require('./neckbeard');

describe('spec which loops', function() {

  describe('Here is some functionality', function() {

    neckbeard.where(
      ['firstNumber', 'secondNumber'],
      [[1,            1],
       [2,            2],
       [3,            3]]
    );

    neckbeard.loop('Looping upon an iteration where 2=#firstNumber and 2=#secondNumber', function(a, b) {

      expect(a).toBe(2);
      expect(b).toBe(2);

    });

  });

});