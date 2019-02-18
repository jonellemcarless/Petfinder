var path = require('path');

module.exports = function(app){

  //if app crashes this is why
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

	app.get('/petfinder', function(req, res){
		
		res.sendFile(path.join(__dirname + '/../public/petfinder.html'));

	});

    app.get('/map', function(req, res){
		
		res.sendFile(path.join(__dirname + '/../public/map.html'));

	});
	// app.use(function(req, res){
	// 	res.sendFile(path.join(__dirname + '../public/home.html'));
	// });

}