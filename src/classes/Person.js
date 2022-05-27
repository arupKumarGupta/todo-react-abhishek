class Person {
	name;
	age;
	constructor({ name, age }) {
		this.name = name;
		this.age = age;
	}
	getAge() {
		return `Age of ${this.name} is ${this.age}`;
	}
}
// named export
export class Ghost {}

// default export
export default Person;
