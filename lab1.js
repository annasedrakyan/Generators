



function* foo() {
	var x = yield 5;
	console.log(x);  
}




const g = foo();
console.log(g.next()); //{value: 5, done: false}
console.log(g.next('hello')); //{value: undefined, done: true} //because x is undefined from right to left 