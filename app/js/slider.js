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