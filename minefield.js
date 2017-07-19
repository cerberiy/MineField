var field = `5 6
.*....
......
..*.**
....*.
....**`;

var fieldArray = field.split('');
var martixRows = fieldArray[0];
var matrixCols = fieldArray[2];

var filteredFieldArray = fieldArray.filter(function(item){
	return ( ( item.localeCompare(".") === 0 ) || ( item.localeCompare("*") === 0 ) );
});

var fieldMatrix = listToMatrix(filteredFieldArray, matrixCols); 
var resultMatrix = fieldMatrix;

function listToMatrix(list, elementsPerRow) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
    	
        if (i % elementsPerRow === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    	
    }

    return matrix;
}

function countMines(i, k){
	var bombs = 0;
	if ((k-1 >= 0) && (i-1 >= 0) && (fieldMatrix[i-1][k-1] == '*')) {
		bombs++;
	} // k- i-
	if ((k-1 >= 0) && (fieldMatrix[i][k-1] == '*')) {
		bombs++;
	} //k- i
	if ((k-1 >= 0) && (i+1 <= martixRows -1 ) && (fieldMatrix[i+1][k-1] == '*')) {
		bombs++;
	}// k- i+
	if ((i-1 >= 0) && (fieldMatrix[i-1][k] == '*')) {
		bombs++;
	}// k i-
	if ((fieldMatrix[i][k] == '*')) {
		return '*';
	}// k i
	if ((i+1 <= martixRows - 1) && (fieldMatrix[i + 1][k] == '*')) {
		bombs++;
	}//k i+
	if ((i-1 >= 0) && (k+1 <= matrixCols - 1) && (fieldMatrix[i-1][k+1] == '*')) {
		bombs++;
	}//k+ 1-
	if ((k+1 <= matrixCols - 1) && (fieldMatrix[i][k+1] == '*')) {
		bombs++;
	}//k+ i
	if ((i+1 <= martixRows - 1) && (k+1 <= matrixCols - 1) && (fieldMatrix[i+1][k+1] == '*')) {
		bombs++;
	}//k+ i+
	
	return bombs;
};

function forEachMatrixElem(){
	for (var k = matrixCols - 1; k >= 0; k--) {
		for (var i = martixRows - 1; i >= 0; i--) {
			resultMatrix[i][k] = countMines(i, k);
		}
	}

}

forEachMatrixElem();
console.log(resultMatrix.join("\n"));
