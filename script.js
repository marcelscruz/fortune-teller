var insert1 = document.getElementById('insert1');
var insert2 = document.getElementById('insert2');
var inputBox = '';
var answer = document.getElementById('answer');
var noAnswer;
var questions;
var madeBy = document.getElementById('made_by');
var help = document.getElementById('help');
var instr = document.getElementById('instruction');
var en = document.getElementById('en');
var pt = document.getElementById('pt');

window.onpaint = english();


// ENGLISH   

function english() {

	questions = ['Miss, could you tell me what is ', 'Dear, I\'d like know what is ', 'Please, could you tell me what is '];
	
	noAnswer = 'You should be more polite';
	
	madeBy.innerHTML = 'made by ';
	
	help.innerHTML = "Press TAB to start typing the <span class='underline'>answer</span>. It won't appear on the screen, you'll actually see the beginning of the q<span class='underline'>uestion</span> being written for you while you type.<br><br>Press TAB again once the <span class='underline'>answer</span> is ready, so you can finish typing the q<span class='underline'>uestion</span> by yourself.";
	
	instr.innerHTML = 'Type your question and press ENTER to ask or ESC to reset';
	
	$("#pt").removeClass("active");
	$("#en").addClass("active");
	insert1.focus();
	reset();
	
};


// PORTUGUESE 

function portuguese() {

	questions = ['A senhora poderia me dizer qual é ', 'Senhora vidente, poderia me dizer qual é ', 'Por favor, poderia me dizer qual é '];
	
	noAnswer = 'Você deveria ser mais educado';
	
	madeBy.innerHTML = 'feito por ';
	
	help.innerHTML = "Aperte TAB para começar a digitar a <span class='underline'>res</span>p<span class='underline'>osta</span>. Ela não vai aparecer na tela, você vai na verdade ver a p<span class='underline'>er</span>g<span class='underline'>unta</span> sendo escrita enquanto você digita.<br><br>Aperte TAB de novo quando a <span class='underline'>res</span>p<span class='underline'>osta</span> estiver pronta, então você pode terminar de digitar a p<span class='underline'>er</span>g<span class='underline'>unta</span> por si mesmo.";
	
	instr.innerHTML = 'Escreva sua pergunta e aperte ENTER para perguntar ou ESC para reiniciar';
	
	$("#en").removeClass("active");
	$("#pt").addClass("active");
	insert1.focus();
	reset();
	
};


// LISTENS KEY PRESS 

var count = 0; // NUMBERING START AND FINISH TO DECIDE FOR INPUT BOX
var count2 = 0;	// CHECKING IF MODAL IS ON OR OFF

document.onkeydown = function (evt) {

	evt = evt || window.event;

	if (evt.keyCode == 9 && count == 0) {
		evt.preventDefault();
		start();
	} else if (evt.keyCode == 9 && count == 1) {
		evt.preventDefault();
		finish();
	} else if (evt.keyCode == 13) {
		ask();
	} else if (evt.keyCode == 27 && count2 == 0) {
		reset();
	} else if (evt.keyCode == 27 && count2 == 1) {
		$(".modal").fadeOut(300);
		insert1.focus();
		count2 = 0;
	}
};

// STARTS RECORDING
function start() {

	insert1.style.opacity = 0;
	
	insert2.style.opacity = 1;
	insert2.style.zIndex = 2;
	
	count = 1;

}


// FINISHES RECORDING
function finish() {
	
	insert2.focus();
	inputBox = document.getElementById('insert1').value;
	
	count = 2;
};


// ASKS
function ask() {

	if (count == 0) {

		
		answer.innerHTML = noAnswer;
		answer.style.marginBottom = '12%';
		
		$("#answer").fadeIn(2000);

	} else if (count == 2) {
		document.getElementById('answer').innerHTML = inputBox;

		$("#answer").fadeIn(2000);
	}
}

// RESET

function reset() {
	insert1.value = '';
	insert1.focus();
	insert1.style.opacity = 1;
	
	insert2.value = '';
	insert2.style.opacity = 0;
	insert2.style.zIndex = 0;
	
	inputBox = '';
	
	answer.value = '';
	answer.style.display = 'none';
	answer.style.marginBottom = '15%';
	
	index = 0;
	count = 0;
}


// ADDS LETTERS INTO INPUT BOX

var index = 0;

var num = Math.floor(Math.random() * questions.length);

function next_letter() {

	insert2.value += questions[num].charAt(index, index + 1);
	index++;

}
