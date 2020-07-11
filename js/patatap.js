var intro = document.querySelector("div");
var canvas = document.querySelector("canvas");
intro.addEventListener("click",function(){
	intro.style.display="none";	
	intro.remove();
	canvas.classList.add("open");
});

