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
		stopOnClick();
	}, 1000 * random);
}

function stopOnClick() {
	globalObjects.roleta.style["animation-play-state"] = "paused";
	globalObjects.btnPlay.style.display = "block";
}