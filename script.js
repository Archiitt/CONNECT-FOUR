// We need to use jQuery for the following:

var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');
// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function reportWin(rowNum, colNum) {
	console.log("You won starting at this row,col");
	console.log(rowNum);
	console.log(colNum);
}
// Change the color of a button
function changeColor(rowIndex, colIndex, color) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// Report Back to current color of a button
function returnColor(rowIndex, colIndex) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
	var colorReport = returnColor(5, colIndex);
	for (var row = 5; row > -1; row--) {
		colorReport = returnColor(row, colIndex);
		if (colorReport === 'rgb(128, 128, 128)') {
			return row
		}
	}
}
