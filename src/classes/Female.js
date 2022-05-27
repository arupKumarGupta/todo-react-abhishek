import Person from './Person';
class Female extends Person {
	height;
	title;
	constructor(height, title, age, name) {
		super(name, age);
		this.title = 'Ms';
		this.height = height;
	}
}
export default Female;
