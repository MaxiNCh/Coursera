function makeMultiplier(multiplier) {
	var myFunc = function (x) {		
		console.log("Multiplier is " + multiplier);
		return multiplier * x;
	}
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
var doubleAll = makeMultiplier(2);
console.log(multiplyBy3);
console.log(doubleAll);
console.log(multiplyBy3.multiplier);
console.log(doubleAll.multiplier);
console.log(makeMultiplier);
console.log(multiplyBy3(100));
console.log(doubleAll(100));

console.log(multiplyBy3(10));
