
function addTogether(x){

	var numResult;

	var i = !isNaN(x);

	console.log(i);

	if(!isNaN(x)){

		return function(y){
			return x + y;
		};

	}

	//console.log(numResult);

}

addTogether(2, 3);// should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); //should return undefined.
addTogether(2, "3"); // should return undefined.
addTogether(2)([3]); // should return undefined.
