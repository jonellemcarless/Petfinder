var path = require('path');
// var allFriends 		= require('../data/friends.js');
var friends = require('../data/friends.js');


module.exports = function(app){

app.get('/api/friends', function(req, res){

	return res.json(friends)
	// friend.findAll({})
	// 	.then(function(result){
	// 		res.json(result);
	// 			})	
	});

app.post('/api/friends', function(req, res){

	var newFriend = req.body;
	var friendScore = newFriend.scores;
	var diffScores = [];

	for(var i=0; i<friends.length; i++) {
		diffScores[i] = checkScores(friends[i].scores,friendScore)
	}

	var index = 0;
	var value = diffScores[0]

	for(var i=0; i<10; i++) {
		if (diffScores[i] < value) {
		value = diffScores[i];
		index = i;	
		}
		} 
	
	friends.push(newFriend);
	res.json(friends[index]);
	

	});

	function checkScores (compScore, friendScore) {
		var diff = 0;
		for (var i=0; i<10; i++) {
			diff+=Math.abs(compScore[i]-friendScore[1]);
		}
		return diff;
	}
};
