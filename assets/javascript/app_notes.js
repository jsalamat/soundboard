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
		// console.log(key);

//stop the function from running all together if there no audio
	if(!audio) return;

//problem it plays once and needs to play in succession when keys press
//solve this by adding current time it rewind it to the start
	audio.currentTime = 0;
	audio.play();

// adding animation by adding a class playing from css
	key.classList.add('playing');
	// in jquery -> key.addClass('playing')

//removetransition steps here------------------------------------
	function removeTransition(e) {
		// console.log(e); 
		//this console log everything that transition
		if (e.propertyName !== 'transform') return;
		// if the propertyName Does not equal to transform skip it
		// console.log(e.propertyName);
		// console.log(this)
		//console log test on which transform and the key in this
		this.classList.remove('playing');

	}
//------------------------------------------------

// Add transition end event once the animation stop when it happens
// this selct all of the arrays that match
	const keys = document.querySelectorAll('.key');

// Listen for event transitionend on each one [node list]
// When the transitionend runss we run function removeTransition
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Next we remove playing by creating a function removeTransition

//Last step is to clean up comments put events in its own function at line 1 seen at app.js
});