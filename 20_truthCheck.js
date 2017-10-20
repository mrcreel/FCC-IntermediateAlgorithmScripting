
function truthCheck(collection, pre) {

	var boolResult = true;
	var varFalsy = [false, 0, "", null, undefined, NaN];

	for (var i in collection){
		varTest = collection[i][pre];
		console.log(collection[i], varTest, varFalsy.indexOf(varTest));
		console.log(varTest !== varTest);
		if(varTest !== varTest || varFalsy.indexOf(varTest) > 0){
			//if(varFalsy.indexOf(varTest) > 0  ){
				boolResult = false;
		//}
	}
	}

	console.log();
	console.log(boolResult);
	console.log();
  // Is everyone being true?
  return boolResult;
}
truthCheck([{"single": "yes"}], "single");
truthCheck([{"single": "double"}, {"single": NaN}], "single");
