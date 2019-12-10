const addOne = (num) => {
	return num + 1; 
}
console.log(addOne(3));

const square = function(x) {
	return x * x; 
}

// const squareArrow = (x) => { 
// 	return x * x 
// }; 

const squareArrow = x => x * x;  

console.log(square(5));
console.log(squareArrow(12));

const getFirstName = (fullName) => {
	const firstName = fullName.split(' ')[0]; 
	return firstName; 
};

const getFirstNameImp = fullName => fullName.split(' ')[0];

console.log(getFirstName('Roger Moore'));
console.log(getFirstName('Timothy Dalton')); 
console.log(getFirstName('Pierce Brosnan'));
console.log(getFirstNameImp('Mike Smith'));