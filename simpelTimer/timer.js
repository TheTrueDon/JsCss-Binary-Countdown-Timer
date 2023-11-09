var timerFunc = setInterval(function(){
	var diff = releaseDate - new Date().getTime();
	var d = Math.floor(diff / 86400000);
	var h = Math.floor((diff % 86400000) / 3600000);
	var m = Math.floor((diff % 3600000) / 60000);
	var s = Math.floor((diff % 60000) / 1000);

	visualizeTime(d, h, m, s);
	
	if(diff < 0) {
		clearInterval(timerFunc);
		visualizeTime(0, 0, 0, 0);
	}
}, 1000);


