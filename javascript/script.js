function playOnClick() {   
	globalObjects = {
		btnPlay: document.getElementById("btnPlay"),
		roleta: document.getElementById("roleta"),
	}
	
	globalObjects.timeInitial = new Date();
	globalObjects.btnPlay.style.display = "none";
	globalObjects.roleta.style.animation = "roleta 2s linear infinite";
	
	var random = Math.floor(Math.random() * 10) + 1
	setTimeout(() => {
		console.log('stopping')
		stopOnClick();
	}, 1000 * random);
}

function calculate() {
	var timeFinal = new Date();
	var tempo = Math.abs(timeFinal - globalObjects.timeInitial);
	var box = parseInt(tempo / 250);
	if (box > 7)
			box = parseInt(box % 8);
	
	console.log(globalObjects.timeInitial, timeFinal, tempo, box, (tempo / 250));
	return box;
}

function stopOnClick() {
	globalObjects.roleta.style["animation-play-state"] = "paused";
	globalObjects.btnPlay.style.display = "block";
	var box = calculate();
	var boxGanhador = document.getElementById("opt".concat(box))
	document.getElementById("msgGanhador").innerHTML = "Parabéns! Você ganhou ".concat(boxGanhador.innerHTML);
}