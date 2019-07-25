let drumButtons = document.querySelectorAll('.drum');

document.addEventListener('keydown', keysDrumPressed);

for (let i = 0; i < drumButtons.length; i++) {
	drumButtons[i].addEventListener('click', drumButtonClicked);
}

function drumButtonClicked() {
	drumSound(this.innerText);
}



function keysDrumPressed(e) {
	drumSound(e.key);
}

function drumSound(key) {
	switch (key) {
		case 'a':
			let tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		case 'z':
			let tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;
		case 'e':
			let tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;
		case 'r':
			let tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;
		case 'q':
			let snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;
		case 's':
			let crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;
		case 'd':
			let kickBass = new Audio('sounds/kick-bass.mp3');
			kickBass.play();
			break;
	}
}
