neckbeard = require('./neckbeard');

describe('spec which loops', function() {

  describe('Here is some functionality', function() {

    // neckbeard.where(
    //   ['firstNumber', 'secondNumber', 'sum', 'difference'],
    //   [[3,            3,              6,              0],
    //    [10,           4,              14,             6],
    //    [7,            1,              8,              6]]
    // );

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

  // describe('Another quick functionality', function() {

  //   neckbeard.where(['myVariable'], [[1], [2], [3], [4], [5]])

  //   neckbeard.loop('This time, what should happen is 4=#myVariable and #pass', function(theNumber) {

  //     expect(theNumber).toBeLessThan(6);
  //     expect(theNumber).toBeGreaterThan(0);

  //   });

  // });

});