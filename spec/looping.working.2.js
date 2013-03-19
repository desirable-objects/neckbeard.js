var clauses = [];

exports.where = function(functionUnderTest, a, b, c) {
  clauses.push(function() {  eval("functionUnderTest(a, b, c)") });
};

exports.loop = function(description) {
  for(i=0; i<clauses.length; i++) {
    it(description, clauses[i]);
  };
};

describe('spec which loops', function() {

  var testFunc = function(a, b) {

    expect(a).toBe(2);
    expect(b).toBe(2);

  };

  exports.where(testFunc, 1, 1);
  exports.where(testFunc, 2, 2);

  exports.loop('Looping upon an iteration');

});