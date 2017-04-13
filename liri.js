//Twitter Function

var keys = require("./keys.js");

// var keysList = client.twitterKeys;

var Twitter = require('twitter');
 
var client = new Twitter(keys); // Create Twitter object

var tweets = process.argv[2];

var params = {screen_name: 'Iamusingnode'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(error);
  }
  else {
  
  console.log(JSON.stringify(tweets, null, 2));
  }
});


//------------------------------------------------------------------------------------------------------------------------------


//OMDB Function

var request = require('request');
var command = process.argv[2];
var secondCommand = process.argv[3];



function nameThatMovie(){

	
	var searchMovie;
	if (command === 'movie-this') {
		console.log(secondCommand);
	}
	if(secondCommand === undefined){
		searchMovie = "Mr.-Nobody"
	}else{
		searchMovie = secondCommand;
	};


	var url = 'http://www.omdbapi.com/?t=' + searchMovie +'&y=&plot=long&tomatoes=true&r=json';
   	request(url, function(error, response, body){
	    if(!error && response.statusCode == 200){
	        console.log("Title: " + JSON.parse(body)["Title"]);
	        console.log("Year: " + JSON.parse(body)["Year"]);
	        console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
	        console.log("Country: " + JSON.parse(body)["Country"]);
	        console.log("Language: " + JSON.parse(body)["Language"]);
	        console.log("Plot: " + JSON.parse(body)["Plot"]);
	        console.log("Actors: " + JSON.parse(body)["Actors"]);
	        console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
	        console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
	    }
    });
};

 nameThatMovie();


//----------------------------------------------------------------------------------------------------------------------------------------

//Spotify Function

var spotify = require('spotify');
var command = process.argv[2];
var secondCommand = process.argv[3];

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});



function nameThatSong(){


	var searchSong;
	if (command === 'spotify-this-song') {
		console.log(secondCommand);
	}
	if(secondCommand === undefined){
		searchSong = "What's-My-Age-Again?";
	}
	else{
		searchSong = secondCommand;
	}
	spotify.search({type:'track', query:searchSong}, function(err,data){
	    if(err){
	        console.log('Error occurred: ' + err);
	        return;
	    }
	    else{
	  		console.log("Artist: " + data.tracks.items[0].artists[0].name);
	        console.log("Song: " + data.tracks.items[0].name);
	        console.log("Album: " + data.tracks.items[0].album.name);
	        console.log("Preview Here: " + data.tracks.items[0].preview_url);
	    }
	});
};

nameThatSong();



//---------------------------------------------------------------------------------------------------------------------


function doWhatitSays() {

var fs = require("fs");
var command = process.argv[2];

	fs.readFile("random.txt", "utf8", function(error, data){
		console.log(data);
	})

}
doWhatitSays();


  
 