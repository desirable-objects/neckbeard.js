var definitions = 0;
var clauses = [];

exports.iterate = function() {

      definitions = arguments.length;

      return {

        where: function() {

          valuesOf(arguments).forEach(function(element, index) {
            var iteration = Math.floor(index/definitions);
            if (clauses[iteration] === undefined) {
              clauses[iteration] = [];
            };
            clauses[iteration].push(element);
          });

        }
      };
};

var valuesOf = function(object) {

  var values = [];

  for (var key in object) {
    values.push(object[key]);
  };

  return values;
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