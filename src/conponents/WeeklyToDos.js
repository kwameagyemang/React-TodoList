import React, { Component } from 'react';

class WeeklyToDos extends Component {
  render() {
    return (
      <li>{this.props.list.date} {this.props.list.time} {this.props.list.ToDo}</li>
    );
  }
}

export default WeeklyToDos ;