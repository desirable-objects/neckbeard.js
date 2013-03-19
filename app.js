var app, express;

express = require('express');

exports.app = app = express();

app.get("/", function(req, res) {
  return res.send("Hello, world!");
});

app.post("/quote", function(req, res) {
  return res.json({quote: 0});
});

app.get('/laptop/cpus', function(req, res) {
	res.json({cpus:[
		{id: -1, name: "Don't know"},
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
		{id: -1, name: "Don't know"},
		{id: 0, name: '128 MB or Less'},
		{id: 256, name: '256 MB'},
		{id: 512, name: '512 MB'},
		{id: 1024, name: '1 GB'},
		{id: 2048, name: '2 GB'},
		{id: 3072, name: '3 GB'},
		{id: 4096, name: '4 GB'},
		{id: 6144, name: '6 GB'},
		{id: 8192, name: '8 GB'},
		{id: 8193, name: 'More than 8 GB'}
	]});	

});

// Make these into sliders
app.get('/laptop/disk-size', function(req, res) {
	res.json({disks:[
		{id: -1, name: "Don't know"},
		{id: 0, name: 'Under 10 GB'},
		{id: 10, name: 'Between 10 and 30 GB'},
		{id: 30, name: 'Between 30 and 60 GB'},
		{id: 60, name: 'Between 60 and 120 GB'},
		{id: 120, name: 'Between 120 and 320 GB'},
		{id: 320, name: 'Between 320 and 500 GB'},
		{id: 500, name: 'Over 500 GB'}
	]});
});

if (__filename === process.argv[1]) {
  app.listen(6789);
}

