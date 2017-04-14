//write the code you need to grab the data from keys.js. Then store the keys in a variable.
var keys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");
var fs = require("fs");
//variable for the node line commands
var command = process.argv [2];




// npm documentation for Twitter
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
 
var params = {screen_name: "tacozcat"};

// function for the twitter node line command
if (command === "my-tweets"){
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log("DATE: " + tweets[i].created_at + " TWEET: " + tweets[i].text + "------------------------------------------");
  	}
    
  }

  


});
break;
}

// --------------------------------------------------------------------------
var nodeArgs = process.argv;
var songTitle = "";
if (command === "spotify-this-song"){


	for (var i = 3; i < nodeArgs.length; i++) {

  		if (i > 3 && i < nodeArgs.length) {
		songTitle = songTitle + "+" + nodeArgs[i];
  		}else {
		songTitle += nodeArgs[i];
  	} 
}
}




spotify.search({ type: 'track', query: songTitle }, function(err, data) {
	if (songTitle.length === 0 ) {
		songTitle = "the+sign";
        console.log(data);
        
    }else{
    	// var songInfo = data.tracks.items[0];
			console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview: " + data.tracks.items[0].preview_url);
	}
    
 });
break;


// ------------------------------------------------------------


var nodeArgs = process.argv;

var movieName = "";

if (command === "movie-this"){
	for (var i = 3; i < nodeArgs.length; i++) {

  		if (i > 3 && i < nodeArgs.length) {

    	movieName = movieName + "+" + nodeArgs[i];

  	}else {

    movieName += nodeArgs[i];

 	 		}
	}
};

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {
	 //  * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.
  // * Rotten Tomatoes Rating.
  // * Rotten Tomatoes URL.

  if (!error && response.statusCode === 200) {
  	console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rated: " + JSON.parse(body).imdbRating);
    console.log("Produced In: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings.Source);
    // console.log("Rotten Tomatoes link" + )
// }else{
// 	movieName = "Mr Nobody"
// 	console.log(movieName);
};
});
break;

//----------------------------------------

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
if (command === "do-what-it-says"){
	fs.readFile("random.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);
  break;


// });
// }


// switch(command[0]){
// 	case "my-tweets":
// 		myTweets();
// 		break;
// 	case "spotify-this-song":
// 		if (command[]){
// 			spotifyRun();
// 		}else{
// 			spotifyRun("The Sign");
// 		}
// 		break;
// 	case "movie-this"

	
// }
 
	







