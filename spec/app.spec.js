var helper;

helper = require('./spec-helper');

describe("App", function() {

  describe("get /", function() {

    it("responds successfully", function() {
      helper.withServer(function(r, done) {
        r.get("/", function(err, res, body) {
          expect(res.statusCode).toEqual(200);
          done();
        });
      });
    });

    it("has the correct body", function() {

      helper.withServer(function(r, done) {
        r.get("/", function(err, res, body) {
          expect(body).toEqual("Hello, world!");
          done();
        });
      });

    });

  });

  describe("get /laptop/cpus", function() {

    it("retrieve a list of cpu types", function() {

      helper.withServer(function(r, done) {
        r.get("/laptop/cpus", function(err, res, body) {
          var result = JSON.parse(body);
          expect(result.cpus[0].name).toEqual('Intel Core i3');
          expect(result.cpus[1].name).toEqual('Intel Core i5');
          expect(result.cpus[2].name).toEqual('Intel Core i7');
          expect(result.cpus.length).toEqual(13);
          done();
        });
      });

    });

  });

  describe("get /laptop/memory", function() {

    it("retrieve a list of memory sizes", function() {

      helper.withServer(function(r, done) {
        r.get("/laptop/memory", function(err, res, body) {
          var result = JSON.parse(body);
          expect(result.memory[0].name).toEqual('128 MB or Less');
          expect(result.memory[1].name).toEqual('256 MB');
          expect(result.memory[2].name).toEqual('512 MB');
          expect(result.memory[3].name).toEqual('1 GB');
          expect(result.memory[4].name).toEqual('2 GB');
          expect(result.memory[5].name).toEqual('3 GB');
          expect(result.memory[6].name).toEqual('4 GB');
          expect(result.memory[7].name).toEqual('6 GB');
          expect(result.memory[8].name).toEqual('8 GB');
          expect(result.memory[9].name).toEqual('More than 8 GB');
          expect(result.memory.length).toEqual(10);
          done();
        });
      });

    });

  });

  describe("post /", function() {

    it("has the correct body", function() {
      helper.withServer(function(r, done) {
        r.post("/", "post body", function(err, res, body) {
          expect(body).toEqual("You posted!");
          done();
        });
      });
    });

  });

});

