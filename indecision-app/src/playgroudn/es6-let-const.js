var nameLet = 'Jim'; 
nameLet = 'Julie';

console.log('nameLet: ', nameLet);

const nameConst = 'Freddie';
const nameConst1 = 'Maria'; 

console.log('nameConst: ', nameConst);
console.log('nameConst: ', nameConst1);

function getPetName() {
	const petName = 'Hal';
	return petName;  
}

const petName = getPetName(); 
console.log(petName);

//Block scoping 

const fullName = 'Ben McGrath'; 
let firstName; 
if (fullName) {
	firstName = fullName.split(" ")[0];
	console.log(firstName); 
}

console.log(firstName);










