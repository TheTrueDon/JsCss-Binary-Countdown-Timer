function initTimerGrid(){
	document.body.innerHTML+="<div id='timerGrid' class='timer'></div>"
	var timerGrid = document.getElementById("timerGrid");
	for(let row = 0; row < 4; row++){
		for(let col = 0; col < 9; col++){
			timerGrid.innerHTML+="<div id='" + row + "-" + col + "' class='digit'></div>";
		}
	}
}

function setRow(num, row){
	var bin = (num >>> 0).toString(2).padStart(9, "0");
	for(let i=0; i<9;i++){
		var digit = document.getElementById(row + "-" + i);
		if (bin[i] == "0"){
			digit.classList.remove("digit-on");
			digit.classList.add("digit-off");
		} else {
			digit.classList.remove("digit-off");
			digit.classList.add("digit-on");
		}
	}
}

function visualizeTime(daysLeft, hoursLeft, minutesLeft, secondsLeft){
    setRow(daysLeft, 0);
	setRow(hoursLeft, 1);
	setRow(minutesLeft, 2);
	setRow(secondsLeft, 3);
}