var questions = ['Ma\'am, could you tell me what is', 'Dear Sant, I\'d like know what is', 'Please, could you tell me what is'];

var answer;
var inputBox = document.getElementById('insert');

document.onkeydown = function (evt) {
	
	evt = evt || window.event;
	
	if (evt.keyCode == 17) {
		inputBox.value = questions[1];
	} else if (evt.keyCode == 18) {
		inputBox.value = 'option';
	}
};

function autocompletion () {
	
}


	
	



