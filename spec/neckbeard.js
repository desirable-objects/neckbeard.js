var definitions = [];
var clauses = [];

exports.where = function(tokens, arguments) {
  definitions = tokens;
  clauses = arguments;
};

var createDescription = function(description, items) {

  var newDescription = description;

  items.forEach(function(element, index) {
    newDescription = newDescription.replace('#'+definitions[index], element);  
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