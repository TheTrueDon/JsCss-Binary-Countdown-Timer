/**
 * The above JavaScript code sets a release date for a project and continuously updates a timer until
 * that release date is reached.
 * @returns The function setReleaseDate() returns the release date in milliseconds since January 1,
 * 1970 00:00:00 UTC.
 */
function setReleaseDate(){
	var currDate = new Date();
	var year = currDate.getFullYear();
	if (currDate.getMonth() == 12 && currDate.getDate() > 24)
		year += 1;
	var releaseDateShow = new Date("Dec 24, " + year + " 00:00:00");
	document.title = "Timer bis zum " + releaseDateShow.toLocaleDateString("de-DE");
	return releaseDateShow.getTime();
}





var releaseDate = setReleaseDate();

/* The code snippet is using the `setInterval()` function to repeatedly execute a function every 1000
milliseconds (1 second). It calculates days, hours, minutes and seconds until the releaseDate.*/
var timerFunc = setInterval(function(){
	var diff = releaseDate - new Date().getTime();
	var d = Math.floor(diff / 86400000);
	var h = Math.floor((diff % 86400000) / 3600000);
	var m = Math.floor((diff % 3600000) / 60000);
	var s = Math.floor((diff % 60000) / 1000);

	visualizeTime(d, h, m, s);
	
	if(diff < 0) {
		releaseDate = setReleaseDate();
	}
}, 1000);


