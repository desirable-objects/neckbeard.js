console.log('Loggy McLoggerson');

jasmine.neckbeard = (typeof jasmine.neckbeard === 'undefined') ? {} : jasmine.neckbeard;

var createDescription = function(description, items) {

  var newDescription = description;

  items.forEach(function(element, index) {
    newDescription = newDescription.replace('#'+definitions[index], element);
  });

  return newDescription;
};

jasmine.neckbeard.Looping = {

	where: function(tokens, arguments) {
	  definitions = tokens;
	  clauses = arguments;
	},

	loop: function(description, functionUnderTest) {

	  clauses.forEach(function(element, index) {
	  	return this._addStepToCurrentSpec(createDescription(description, element), function() {
	       functionUnderTest.apply(this, element);
	     });
	  });

	},

	_addStepToCurrentSpec: function(desc, func) {
        var spec = jasmine.neckbeard.getEnv().currentSpec;
        spec.details = spec.details || [];
        spec.details.push(desc);
        spec.runs(func);
        return spec;
    }

};


