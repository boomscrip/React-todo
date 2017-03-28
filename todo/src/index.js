import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './Todo';
import './todo.css';
import './index.css';

ReactDOM.render(
	<div>
			<App />
			<TodoApp />
	</div>,
  document.getElementById('root')
);

// ReactDOM.render(
// 	<TodoApp />,
//   document.getElementById("root")
// );
