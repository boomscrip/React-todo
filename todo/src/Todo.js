import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div className="content">
        <div>
        		<div className="text">
          		
          		<h4> Задач  { -1 +            (this.state.items.length + 1)} </h4>
        		</div>
        		<form className="form"onSubmit={this.handleSubmit}>
        		<input type='text' placeholder="Новая задача..." className="do-field" onChange={this.handleChange} value={this.state.text} />
          		<button className="butt">{'Добавить'}</button>
          		<TodoList items={this.state.items} />
        		</form>
      	</div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}


export default TodoApp;
