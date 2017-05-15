
var btn = document.getElementById("detailBut");
var modal = document.getElementById('detailModal');
var spn = document.getElementById('closeSpan');
var cancelBut = document.getElementById('cancelBut');

btn.onclick = function () {
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
};