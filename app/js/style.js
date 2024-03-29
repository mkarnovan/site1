(function () {
	let burger = document.getElementById("burger-button");

	burger.addEventListener("click", (e) => {
		e.preventDefault();
		document.body.classList.toggle("open");
		burger.classList.toggle("open");
	});
}());
(function() { 
	let left = document.querySelector('.slider .arrows .prev'), 
	right = document.querySelector('.slider .arrows .next'), 
	slide = document.querySelectorAll('.slider .slider_content .slide'), 
	i = 0;
	
	left.onclick = function() {
		event.preventDefault();
		slide[i].classList.remove('active'); 
		i--; 
		if (i < 0) { 
			i = slide.length-1; 
		} 

		slide[i].classList.add('active'); 
	}

	right.onclick = function(){
		event.preventDefault(); 
		slide[i].classList.remove('active'); 
		i++; 
		if(i >= slide.length) { 
			i = 0; 
		}

		slide[i].classList.add('active'); 
	} 
}());
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