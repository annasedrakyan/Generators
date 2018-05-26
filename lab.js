
 const city = 'ANNA';
 var result = [];

 for (i = 0; i < city.length; i++) { //()
 	
 	result.push(city.charAt(i));
 	
 }
console.log(result);

//THE SAME

 //const city = 'ANNA';
//  var city1 = [];

//  for (let letter of city) { 
//  	city1.push(letter);
 	
//  }
// console.log(city1);


// function* foo() {

// }

// const x = foo();
// console.log(x.next()); //{value: undefined, done: true}


function* foo() {
	yield 42;
	console.log('sdsdsd');  //1st do not type
	yield 43;
}

const x = foo();
 console.log(x.next());   //type sdsdsd
console.log(x.next());   //{value: undefined, done: true}