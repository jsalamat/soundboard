window.addEventListener('keydown', function(e) {
	// to test the event keycode when pressing keyboards down
		// console.log(e.keyCode);

// Look for data-element of key and select its audio element 
	// use attribute selector like example line 6
	// const audio = document.querySelector("audio[data-key=65]")
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	// to test selection of audio element
			// console.log(audio);

//to select key element
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	// to test selection of key element
		console.log(key);

//stop the function from running all together if there no audio
	if(!audio) return;

//problem it plays once and needs to play in succession when keys press
//solve this by adding current time it rewind it to the start
	audio.currentTime = 0;
	audio.play();

});