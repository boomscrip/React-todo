import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className="main-page">
        {this.props.items.map(item => (
          <div className="main" key={item.id}>{item.text}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
