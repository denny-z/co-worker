import React, {Component} from 'react';
import NewTask from './NewTask';
import TasksRepository from '../../repositories/TasksRepository';

export default class Backlog extends Component {
  constructor() {
    super();
    this.repo = new TasksRepository();
    this.state = {
      tasks: this.repo.getAll() || []
    };
  }

  addTask(newTask) {
    this.setState({
      tasks: this.state.tasks.concat([newTask]),
    });
    this.repo.save(newTask);
  }

  removeTask(task) {
    let tasks = this.state.tasks.slice();
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  }

  renderTasksList() {
    return this.state.tasks.map((task, index) => {
      return (
        <li key={task.name + index}>
          <p>Name: {task.name}</p>
          <p>Description: {task.description}</p>
          <p><button onClick={() => this.removeTask(task)}>Remove!</button></p>
        </li>);
    });
  }

  render() {
    return (
      <div>
        <h3>Backlog</h3>
        <div>
          <ul>
            {this.renderTasksList()}
          </ul>
        </div>
        <div>
          <h4>Create new task</h4>
          <NewTask onCreate={(newTask) => this.addTask(newTask)} />
        </div>
      </div>
    )
  }
}
