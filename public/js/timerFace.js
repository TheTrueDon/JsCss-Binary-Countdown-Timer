
/* The `treePixels` array represents a pixel art image of a tree. Each element in the array represents
a pixel in the image, and the numbers in the array represent different colors or features of the
tree. The numbers correspond to different classes that will be applied to the corresponding pixel
element in the HTML. For example, 0 represents a clear pixel, 2 represents a green pixel, 3
represents a brown pixel, 4 represents a blue pixel, 5 represents a yellow pixel, and 6 represents a
star pixel. */
const treePixels = [
	[0,0,0,0,0,0,0,6,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,6,5,6,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,6,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,2,2,2,2,2,0,0,0,0,0],
	[0,0,0,0,0,0,2,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,0,4,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,2,2,2,2,2,0,0,0,0,0],
	[0,0,0,0,0,2,2,2,4,2,0,0,0,0,0],
	[0,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
	[0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
	[0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
	[0,0,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,0,4,0,2,2,2,2,2,2,2,0,0,0,0],
	[0,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
	[0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
	[0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
	[0,0,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,0,2,2,2,2,2,2,2,2,2,2,2,0,0],
	[0,2,2,2,2,4,2,2,2,2,2,2,2,2,0],
	[0,2,2,2,2,2,2,2,2,2,2,4,2,2,0],
	[2,2,0,2,2,2,2,2,2,2,2,2,0,2,2],
	[0,0,0,2,2,0,3,3,3,0,2,2,0,0,0],
	[0,0,2,0,0,0,3,3,3,0,0,0,2,0,0]
	];
	
	/**
	 * The function `initTimerGrid` creates a grid of pixels with different colors based on the values in
	 * the `treePixels` array and appends it to a parent DOM object.
	 * @param parentDomObject - The parentDomObject is the DOM element where the timerGrid will be
	 * appended. It is the container element that will hold the timerGrid.
	 */
	function initTimerGrid(parentDomObject){
		parentDomObject.innerHTML+="<div class='container'><div id='timerTree' class='timerTree'></div></div>"
		var timerGrid = document.getElementById("timerTree");
		for(let row = 0; row < treePixels.length; row++){
			for(let col = 0; col < treePixels[row].length; col++){
				var pxColorClass = "";
				switch(treePixels[row][col]){
					case 2: pxColorClass = "greenPx"; break;
					case 3: pxColorClass = "brownPx"; break;
					case 4: pxColorClass = "bluePx"; break;
					case 5: pxColorClass = "yellowPx"; break;
					case 6: pxColorClass = "starPx"; break;
					default: pxColorClass = "clearpx";
				}
				timerGrid.innerHTML+="<div id='" + row + "-" + col + "' class='pixel " + pxColorClass + "'></div>";
			}
		}
	}

	
	/**
	 * The function `setRow` takes a number and a row as input, converts the number to binary, and updates
	 * the corresponding pixels in the row with the appropriate color class.
	 * @param num - The `num` parameter is the number that you want to convert to binary and display in
	 * the specified row of the tree.
	 * @param row - The `row` parameter is the row number of the tree where the binary number will be
	 * displayed.
	 */
	function setRow(num, row){
		var map = treeRowMapper(row);
		var mappedRow = map[0];
		var treeWidth = map[1];
		var bin = (num >>> 0).toString(2).padStart(treeWidth, "0");
		var offset = (treePixels[0].length-treeWidth)/2;
		
		for(let i = bin.length-1; i >= 0; i--){
			var pos = offset+i;
			var digit = document.getElementById(mappedRow + "-" + pos);

			if (bin[i] == "0"){
				digit.classList.remove("redPx");
				digit.classList.add("greenPx");
			} else if (bin[i] == "1"){
				digit.classList.remove("greenPx");
				digit.classList.add("redPx");
			}
		}
	}
	
	/**
	 * The function treeRowMapper takes a row number as input and returns an array of two numbers
	 * representing the width and height of a tree row.
	 * @param row - The `row` parameter represents the row number of a tree in a tree structure.
	 * @returns The function `treeRowMapper` returns an array of two numbers. The specific numbers being
	 * returned depend on the value of the `row` parameter passed to the function.
	 */
	function treeRowMapper(row){
		switch(row){
			case 0: return [13,9];
			case 1: return [15,7];
			case 2: return [17,9];
			case 3: return [19,11];
			default: return false;
		}
	}
	
	
/**
 * The function "visualizeTime" takes in the number of days, hours, minutes, and seconds left and sets
 * each value in a separate row.
 * @param daysLeft - The number of days left.
 * @param hoursLeft - The number of hours left until the event or deadline.
 * @param minutesLeft - The parameter "minutesLeft" represents the number of minutes remaining.
 * @param secondsLeft - The number of seconds left until the event or deadline.
 */
function visualizeTime(daysLeft, hoursLeft, minutesLeft, secondsLeft){
    setRow(daysLeft, 0);
	setRow(hoursLeft, 1);
	setRow(minutesLeft, 2);
	setRow(secondsLeft, 3);
}