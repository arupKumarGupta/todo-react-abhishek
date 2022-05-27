/*
    class <ClassName> [extends <Parent>] [implements <interfaceName> (not in JS)] {
        [constructor([params]) {
                [super(params)]
            }]
        [data members]
        [methods]
    }
*/

// class Person {
// 	// data member
// 	name;
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	// method print not a data member
// 	print() {
// 		console.log(`I am ${this.name}`);
// 		this.yell();
// 	}
// 	// method - x -- but a data member as a function
// 	yell = () => {
// 		console.log('#$@%$');
// 	};
// }

// class MaleHuman extends Person {
// 	title;
// 	height;
// 	constructor(name, age, height) {
// 		super(name, age);
// 		this.title = 'Mr';
// 		this.height = height;
// 	}
// }

// const abhi = new MaleHuman('Abhi', 25, 180);
// console.log(abhi);
// abhi.print();
import Male from './Male';
import Female from './Female';
const he = new Male(180, 18, 'abhi');
// const she = new Female(160, 20, 'abhilasha');
console.log(he);
