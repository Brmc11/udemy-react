const add = (a, b) => {
	return a + b; 
}; 

console.log(add(65, 1));

const user = {
	name: 'Ben', 
	cities: ['Cincinnati', 'Chicago', 'Jacksonville'], 
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city + '.'); 
	}
}; 

console.log(user.printPlacesLived());


const multiplier = {
	nums : [6, 9 , 12, 123], 
	multiplyBy: 3, 
	multiply: function () {
		return this.nums.map(num => num * this.multiplyBy); 
	}
}

console.log(multiplier.multiply()); 










