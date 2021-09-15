import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    inTodo: false
  }


  render() {
    return (
      <li onClick={() => this.props.handleAdd(this.props.data)}>
        {this.props.data.date} {this.props.data.time} {this.props.data.ToDo}{''}
      
      </li>
    );
  }
}

export default ToDoList;