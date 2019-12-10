
class Person {

	constructor(name, age = 100) {
		this.name = name;
		this.age = age;   
	}

	getGreeting() {
		return `Hi, my name is ${this.name}!`; 
	}

	getDescription() {
		return `${this.name} is ${this.age} years old.`; 
	}

}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age); 
		this.major = major; 
	}

	hasMajor() {
		return !!this.major; 
	}

	getDescription() {
		let description = super.getDescription();

		if(this.hasMajor()) {
			description += ` Their major is ${this.major}.`; 
		}
		return description; 
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age); 
		this.homeLocation = homeLocation; 
	}


	getGreeting() {
		let greeting = super.getGreeting();

		if(this.homeLocation) {
			greeting += ` I am visiting from ${this.homeLocation}.`; 
		} 
		return greeting; 
	}
}

const stacy = new Student();

const me = new Student('Benjamin McGrath', 32, 'Construction Management');
const bill = new Student('William Cleary', 33, 'Java Development');
const tim = new Person('Tim Buckley', 30);
const mike = new Traveler('MiChael. P Buckmeyer', undefined, 'Denver'); 

const people = [me, bill, tim, mike];
 
// console.log(bill.hasMajor());
// console.log(bill.getGreeting()); 
// console.log(bill.getDescription());
// console.log(me.getDescription());
// console.log(me.getGreeting())
// console.log(mike.getGreeting());
// console.log(mike.getDescription()); 
people.forEach(person => console.log(person.getDescription()));

 