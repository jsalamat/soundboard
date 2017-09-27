window.addEventListener('keydown', function(e) {
// to test the event keycode when pressing keyboards down
	// console.log(e.keyCode);
// Look for data-element of key and select its audio element 
// use attribute selector like example line 6
	// const audio = document.querySelector("audio[data-key=65]")
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
// to test selection of audio element
		console.log(audio);
});