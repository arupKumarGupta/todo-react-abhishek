import logo from './logo.svg';
import './App.css';
import Todo from './class-components/Todo';

import './classes';
import todos from '../todos.json';
function App() {
	return <TodoList todos={todos} />;
}

export default App;
