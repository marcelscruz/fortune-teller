var questions = ['Ma\'am, could you tell me what is', 'Dear Sant, I\'d like know what is', 'Please, could you tell me what is'];

var ques = 'Please, could you tell me what is';

var answer;

var input1 = document.getElementById('insert1');
var input2 = document.getElementById('insert2');


// LISTENS KEY PRESS

var count = 0;

document.onkeydown = function (evt) {
	
	evt = evt || window.event;
	
	if (evt.keyCode == 17 && count == 0) {
		start();
		count = count + 1;
	} else if (evt.keyCode == 17 && count == 1) {
		finish();
	} else if (evt.keyCode == 13) {
		ask();
	}
};


// STARTS RECORDING
function start() {
	
	document.getElementById('insert1').style.backgroundColor = 'yellow';
	document.getElementById('insert2').style.zIndex = 2;
	
}


// FINISHES RECORDING
function finish() {
	
	document.getElementById('insert2').focus();
	inputBox = document.getElementById('insert1').value;
	
};

function ask() {
	
	document.getElementById('answer').innerHTML = 'The answer you\'re looking for is ' + inputBox + '.';
	
}

// ADDS LETTERS INTO INPUT BOX

var index = 0;

function next_letter() {
	
    if (index <= ques.length) {
        input2.value = ques.substr(0, index++);
		
    }
}

/*
OK passar texto para variável 'answer'
OK pegar de 'questions' e botar no input  
OK uma letra por vez
OK acabar com a função
*/		 


