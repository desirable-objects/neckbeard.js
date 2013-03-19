var clauses = [];

exports.where = function(arguments) {
  clauses.push(arguments);
};

var createDescription = function(description, items) {

  var newDescription = description;

  items.forEach(function(element, index) {
    newDescription = newDescription.replace('#'+index, element);  
  });

  return newDescription;
};

exports.loop = function(description, functionUnderTest) {

  clauses.forEach(function(element, index) {
    
    return it(createDescription(description, element), function() {
      functionUnderTest.apply(this, element);
    });
  });

};

describe('spec which loops', function() {

  describe('Here is some functionality', function() {

    exports.where([1, 1]);
    exports.where([2, 2]);
    exports.where([3, 3]);

    exports.loop('Looping upon an iteration where 2=#0 and 2=#1', function(a, b) {

      expect(a).toBe(2);
      expect(b).toBe(2);

    });

  });

});