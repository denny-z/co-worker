import React, {Component} from 'react';

export default class TasksList extends Component {
  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <li key={task.name + index}>
          <p>Name: {task.name}</p>
          <p>Description: {task.description}</p>
          <p><button onClick={() => this.props.onRemove(task)}>Remove!</button></p>
          <p><button onClick={() => this.props.onMove(task)}>Move!</button></p>
        </li>);
    });
  }

  render() {
    return (
      <ul>
        {this.renderTasks()}
      </ul>
    )
  }
}
