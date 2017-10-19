function steamrollArray(arr) {

	var arrResult = [];
	var numLength = arr.length;
	for(var i = 0; i < numLength; i++){

		console.log(Array.isArray(arr[i]));
		if(Array.isArray(arr[i])){

			arrResult = arrResult.concat(steamrollArray(arr[i]));
			console.log(arrResult);
		} 
		else {
			arrResult.push(arr[i]);
			console.log(arrResult);
		}
		
	}

	console.log(arrResult);


		// statements
  // I'm a steamroller, baby
  return arrResult;
}

steamrollArray([1, [2], [3, [[4]]]]);