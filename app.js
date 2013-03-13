var app, express;

express = require('express');

exports.app = app = express();

app.get("/", function(req, res) {
  return res.send("Hello, world!");
});

app.post("/", function(req, res) {
  return res.send("You posted!");
});

app.get('/laptop/cpus', function(req, res) {
	res.json({cpus:[
        {id: 0, name: 'Intel Core i3'}, 
        {id: 1, name: 'Intel Core i5'}, 
        {id: 2, name: 'Intel Core i7'},
        {id: 3, name: 'Intel Core Duo'},
        {id: 4, name: 'Intel Core 2 Duo'},
        {id: 5, name: 'Intel Pentium 4'},
        {id: 6, name: 'Intel Pentium III'},
        {id: 7, name: 'Intel Pentium II'},
        {id: 8, name: 'Intel Pentium'},
        {id: 9, name: 'AMD Athlon'},
        {id: 10, name: 'Intel Atom'},
        {id: 11, name: 'Intel Pentium D'},
        {id: 12, name: 'Intel Celeron'}
    ]});
});

app.get('/laptop/memory', function(req, res) {

	res.json({memory:[
		{id: 0, name: '128 MB or Less'},
		{id: 1, name: '256 MB'},
		{id: 2, name: '512 MB'},
		{id: 3, name: '1 GB'},
		{id: 4, name: '2 GB'},
		{id: 5, name: '3 GB'},
		{id: 6, name: '4 GB'},
		{id: 7, name: '6 GB'},
		{id: 8, name: '8 GB'},
		{id: 9, name: 'More than 8 GB'}
	]});	

});

if (__filename === process.argv[1]) {
  app.listen(6789);
}

