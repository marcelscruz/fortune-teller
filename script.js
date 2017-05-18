var insert1 = document.getElementById('insert1');
var insert2 = document.getElementById('insert2');
var noAnswer;
var questions;
var madeBy = document.getElementById('made_by');
var help = document.getElementById('help');
var instr = document.getElementById('instruction');
var en = document.getElementById('en');
var pt = document.getElementById('pt');

window.onpaint = english();


/* ENGLISH  */ 
function english() {

	questions = ['Ma\'am, could you tell me what is ', 'Dear Sant, I\'d like know what is ', 'Please, could you tell me what is '];
	
	noAnswer = 'You should be more polite';
	
	madeBy.innerHTML = 'made by ';
	
	help.innerHTML = "Press <span class='underline'>TAB</span> to start typing the answer<br><br>Press <span class='underline'>TAB</span> again once you're done to finish writing the question";
	
	instr.innerHTML = 'Type your question and press ENTER to ask her';
	
	$("#pt").removeClass("active");
	$("#en").addClass("active");
	insert1.focus();
	
};

/* PORTUGUESE */
function portuguese() {

	questions = ['A senhora poderia me dizer qual é ', 'Senhora vidente, poderia me dizer qual é ', 'Por favor, poderia me dizer qual é '];
	
	noAnswer = 'Você deveria ser mais educado';
	
	madeBy.innerHTML = 'feito por ';
	
	help.innerHTML = "Aperte <span class='underline'>TAB</span> para começar a escrevar a resposta<br><br>Aperte <span class='underline'>TAB</span> de novo quando estiver pronto para terminar de escrever a pergunta";
	
	instr.innerHTML = 'Escreva sua pergunta e aperte ENTER para perguntar';
	
	$("#en").removeClass("active");
	$("#pt").addClass("active");
	insert1.focus();
	
};


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

	insert1.style.opacity = 0;

	insert2.style.opacity = 1;
	insert2.style.zIndex = 2;

}


// FINISHES RECORDING
function finish() {
	insert2.focus();
	inputBox = document.getElementById('insert1').value;

};


// ASKS
function ask() {

	if (count == 0) {

		
		document.getElementById('answer').innerHTML = noAnswer;
		document.getElementById('answer').style.marginBottom = '12%';
		
		$("#answer").fadeIn(4000);

	} else if (count == 1) {
		document.getElementById('answer').innerHTML = inputBox;

		$("#answer").fadeIn(4000);
	}
}


// ADDS LETTERS INTO INPUT BOX

var index = 0;

var num = Math.floor(Math.random() * questions.length);

function next_letter() {

	insert2.value += questions[num].charAt(index, index + 1);
	index++;

}
