// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("about");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("x-button")[0];

// Get the page section to make the input always on focus
var pageSection = document.getElementById('page-section');

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	$(".modal").fadeIn(300);
	count2 = 1; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	$(".modal").fadeOut(300);
	insert1.focus();
}

// When the user clicks anywhere outside of the modal, close it
// When the user clicks anywhere in the page keeps focus on input1 or input2
window.onclick = function(event) {
    if (event.target == modal) {
		$(".modal").fadeOut(300);
		insert1.focus();
    } else if (event.target == pageSection && count == 0 || count == 1) {
		insert1.focus();
    } else if (event.target == pageSection && count == 2) {
		insert2.focus();
    }
}
