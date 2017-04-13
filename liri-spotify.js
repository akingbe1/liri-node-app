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


	//variable for search term, test if defined.

	var searchSong;
	if (command === 'spotify-this-song') {
		console.log(secondCommand);
	}
	if(secondCommand === undefined){
		searchSong = "What's-My-Age-Again?";
	}else{
		searchSong = secondCommand;
	}
	//launch spotify search
	spotify.search({type:'track', query:searchSong}, function(err,data){
	    if(err){
	        console.log('Error occurred: ' + err);
	        return;
	    }else{
	        //tried searching for release year! Spotify doesn't return this!
	  		console.log("Artist: " + data.tracks.items[0].artists[0].name);
	        console.log("Song: " + data.tracks.items[0].name);
	        console.log("Album: " + data.tracks.items[0].album.name);
	        console.log("Preview Here: " + data.tracks.items[0].preview_url);
	    }
	});
};//end spotifyMe

nameThatSong();