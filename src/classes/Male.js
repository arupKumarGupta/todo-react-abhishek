import Person from './Person';
class Male extends Person {
	height;
	title;
	constructor(height, age, name) {
		super({ name, age });
		this.title = 'Mr';
		this.height = height;
	}
}
export default Male;
