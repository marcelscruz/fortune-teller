// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("about");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("x-button")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
//    modal.style.display = "block";
	$(".modal").fadeIn(300);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
//    modal.style.display = "none";
	$(".modal").fadeOut(300);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
//        modal.style.display = "none";
		$(".modal").fadeOut(300);
    }
}
