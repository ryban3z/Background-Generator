var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

window.onload = setGradient; 

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);

function randomColor() { 
 	ranColor1 = "#" + Math.random().toString(16).slice(2, 8); 
 	ranColor2 = "#" + Math.random().toString(16).slice(2, 8);

 	body.style.background = 
	"linear-gradient(to right, " 
	+ ranColor1 
	+ ", " 
	+ ranColor2
	+ ")";

	color1.value = ranColor1; 
	color2.value = ranColor2;

	css.textContent = body.style.background + ";";
}
