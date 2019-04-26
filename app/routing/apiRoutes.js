var friends = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get("/api/friends", function(req,res){
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    //grabs the new friend's scores to compare with friends in friendList array
    var FriendScores = req.body.scores;
    var Array = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i < friends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var k=0; k<FriendScores.length; k++){
        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(FriendScores[j])));
      }

      //push to array
      Array.push(scoresDiff);
    }

    //compare friends
    for(var i=0; i < Array.length; i++){
      if(Array[i] <= Array[bestMatch]){
        bestMatch = i;
      }
    }

    //return match
    var bff = friendList[bestMatch];
    res.json(bff);

    friendList.push(req.body);
  });
};