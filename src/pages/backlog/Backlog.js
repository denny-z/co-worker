import React, {Component} from 'react';
import NewTask from './NewTask';
import TasksList from './TasksList';
import TasksRepository from '../../repositories/TasksRepository';

export default class Backlog extends Component {
  constructor() {
    super();
    this.repo = TasksRepository;
    this.state = {
      tasks: this.repo.getAll()
    };
  }

  addTask(newTask) {
    let tasks = this.state.tasks.concat([newTask]);
    this.setState({
      tasks: tasks,
    });
    this.repo.saveAll(tasks);
  }

  removeTask(task) {
    let tasks = this.state.tasks.slice();
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks
    });
    this.repo.saveAll(tasks);
  }

  render() {
    return (
      <div>
        <h3>Backlog</h3>
        <div>
          <TasksList tasks={this.state.tasks} onRemove={(task) => this.removeTask(task)} />
        </div>
        <div>
          <h4>Create new task</h4>
          <NewTask onCreate={(newTask) => this.addTask(newTask)} />
        </div>
      </div>
    )
  }
}
