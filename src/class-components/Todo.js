import React, { Component } from 'react';

export default class Todo extends Component {
	state = {
		isComplete: false,
	};
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	componentDidUpdate() {}

	componentWillUnmount() {}

	render() {
		const { desc } = this.props;
		const { isComplete } = this.state;
		return (
			<div onClick={this.click}>
				{desc} {isComplete ? ' - done' : ''}
			</div>
		);
	}

	click = () => {
		this.setState({
			isComplete: true,
		});
	};
}
