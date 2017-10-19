function dropElements(arr, func) {

	var arrResult = [];
	var numIndex = 0;

	numIndex = arguments[0].findIndex(arguments[1]);

	if (numIndex != -1){
		arrResult = arguments[0].slice(numIndex);
	}

	return arrResult;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});