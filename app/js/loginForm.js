// Get the modal
(function() {
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBut");
	var spn = document.getElementById('myClose');
	var cancelBut = document.getElementById('cancelBut');

	btn.onclick = function () {
		console.log("in");
		modal.style.display = "block";
	}

	spn.onclick = function () {
		modal.style.display = "none";
	}

	cancelBut.onclick = function () {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}());