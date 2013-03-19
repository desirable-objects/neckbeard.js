describe('spec which loops', function() {

  var testFunc = function(a, b) {

    expect(a).toBe(2);
    expect(b).toBe(2);

  };

  var where = [
    function() { testFunc(1, 1) },
    function() { testFunc(2, 2) }
  ];

  for(i=0; i<2; i++) {
    it('loop on iteration '+i, where[i]);
  };

});