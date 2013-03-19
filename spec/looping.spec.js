var clauses = [];

exports.where = function(arguments) {
  clauses.push(arguments);
};

var executor = function(testMethod, arguments) {
  testMethod.apply(this, arguments);  
}

var createDescription = function(description) {

  var newDescription = description;
    for (d=0; d<clauses[i].length; d++) {
      newDescription = newDescription.replace('#'+d, clauses[i][d]);
  }

};

exports.loop = function(description, functionUnderTest) {

  for(i=0; i<clauses.length; i++) {
    var arguments = [this, functionUnderTest];
    arguments.push(clauses[i]);
    it(createDescription(description), executor.apply(this, arguments) );
  };

};

// jasmine.Spec.prototype.chewit = jasmine.Spec.prototype.it;
// jasmine.Spec.prototype.it = function(description, underlyingFunc) {

//     for(i=0; i<clauses.length; i++) {
//       var arguments = [functionUnderTest];
//       arguments.push(clauses[i]);
//       chewit(createDescription(description), executor.apply(this, arguments));
//     };  

// }

describe('spec which loops', function() {

  describe('Here is some functionality', function() {

    // beforeEach(function() {
    //   this.expect = jasmine.Spec.expect;
    // });

    exports.where([1, 1]);
    exports.where([2, 2]);

    exports.loop('Looping upon an iteration where 2=#1 and 2=#2', function(a, b) {

      expect(a).toBe(2);
      expect(b).toBe(2);

    });

  });

});