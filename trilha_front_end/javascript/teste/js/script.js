var paragrafos = document.querySelectorAll("p");

for(var i = 0; i <= paragrafos.length; i++){
	paragrafos[i].textContent = "Listen " + [i];
}