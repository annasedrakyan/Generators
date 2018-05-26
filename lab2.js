




function* getNumbers(start, end){
	var value = start;
	while(value < end) {
		yield value++;
	}
}

var i2 = getNumbers(1,10);
console.log(i2.next()); //{value: 1, done: false}
console.log(i2.next()); //{value: 2, done: false}



function* getNumbersFrom0to100(){
     yield* getNumbers(0,10);
     yield* getNumbers(11,20);
     yield* getNumbers(21,30);
}
console.log( [...getNumbersFrom0to100()]  );