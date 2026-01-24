// Navigation functions
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

// Scroll button
window.onload = function() {
	const mybutton = document.getElementById("myBtn");
	if (mybutton) {
		window.onscroll = function() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		};
	}
};

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}