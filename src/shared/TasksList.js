import React, {Component} from 'react';

export default class TasksList extends Component {
  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <li key={task.name + index}>
          <p>Name: {task.name}</p>
          <p>Description: {task.description}</p>
          {this.renderChildren(task)}
        </li>);
    });
  }

  renderChildren(task) {
    return React.Children.map(this.props.children, (child) => {
      return (<p>{this.renderChild(child, task)}</p>)
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
