

var input1 = document.getElementById('insert1');
var input2 = document.getElementById('insert2');


// LISTENS KEY PRESS

var count = 0;

document.onkeydown = function (evt) {

	evt = evt || window.event;

	if (evt.keyCode == 9 && count == 0) {
		evt.preventDefault();
		start();
		count = count + 1;
	} else if (evt.keyCode == 9 && count == 1) {
		evt.preventDefault();
		finish();
	} else if (evt.keyCode == 13) {
		ask();
	} else if (evt.keyCode == 27) {
		$(".modal").fadeOut(300);
	}
};


// STARTS RECORDING
function start() {

	document.getElementById('insert1').style.opacity = 0;

	document.getElementById('insert2').style.opacity = 1;
	document.getElementById('insert2').style.zIndex = 2;

}


// FINISHES RECORDING
function finish() {
	document.getElementById('insert2').focus();
	inputBox = document.getElementById('insert1').value;

};


// ASKS
function ask() {

	if (count == 0) {

		
		document.getElementById('answer').innerHTML = 'You should be more polite';
		document.getElementById('answer').style.marginBottom = '12%';
		
		$("#answer").fadeIn(4000);

	} else if (count == 1) {
		document.getElementById('answer').innerHTML = inputBox;

		$("#answer").fadeIn(4000);
	}
}


// ADDS LETTERS INTO INPUT BOX

var questions = ['Ma\'am, could you tell me what is', 'Dear Sant, I\'d like know what is', 'Please, could you tell me what is'];

var index = 0;

var num = Math.floor(Math.random() * questions.length);

function next_letter() {

	input2.value += questions[num].charAt(index, index + 1);
	index++;

}
