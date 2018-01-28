import React, {Component} from 'react';
import NewTask from './NewTask';
import TasksList from '../../shared/TasksList';
import Button from '../../shared/Button';
import Repository from '../../repositories/Repository';

export default class Backlog extends Component {
  constructor() {
    super();
    this.repo = new Repository('backlogTasks');
    this.activeRepo = new Repository('activeTasks');
    this.state = {
      tasks: this.repo.getAll()
    };
  }

  addTask(newTask) {
    let tasks = this.state.tasks.concat([newTask]);
    this.setState({
      tasks: tasks,
    });
    this.repo.rewriteAll(tasks);
  }

  moveToActive(task) {
    this.removeTask(task);
    this.activeRepo.save(task);
  }

  removeTask(task) {
    let tasks = this.state.tasks.slice();
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks
    });
    this.repo.rewriteAll(tasks);
  }

  render() {
    return (
      <div>
        <h3>Backlog</h3>
        <div>
          <h4>Tasks list</h4>
          <TasksList tasks={this.state.tasks}>
            <Button name="Remove!" onAction={(task) => this.removeTask(task)}/>
            <Button name="Move to active!" onAction={(task) => this.moveToActive(task)}/>
          </TasksList>
        </div>
        <div>
          <h4>Create new task</h4>
          <NewTask onCreate={(newTask) => this.addTask(newTask)} />
        </div>
      </div>
    )
  }
}
