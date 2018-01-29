import React, {Component} from 'react';

export default class TasksList extends Component {
  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <li key={task.name + index}>
          <div>Name: {task.name}</div>
          <div>Description: {task.description}</div>
          {this.renderChildren(task)}
        </li>);
    });
  }

  renderChildren(task) {
    return React.Children.map(this.props.children, (child) => {
      return (<div>{this.renderChild(child, task)}</div>)
    })
  }

  renderChild(child, task) {
    return React.cloneElement(child, {
      task: task
    })
  }

  render() {
    return (
      <ul>
        {this.renderTasks()}
      </ul>
    )
  }
}
