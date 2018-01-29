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
    this.state = {tasks: []}
    this.repo.getAll().then((tasks) => {
      this.setState({tasks: tasks})
    })
  }

  addTask(newTask) {
    this.repo.create(newTask).then((task)=> {
      this.setState({
        tasks: this.state.tasks.concat([task])
      });
    })
  }

  moveToActive(task) {
    this.removeTask(task);
    this.activeRepo.create(task);
  }

  removeTask(task) {
    this.repo.remove(task).then(() => {
      let tasks = this.state.tasks.slice();
      let index = tasks.indexOf(task);
      tasks.splice(index, 1);

      this.setState({
        tasks: tasks
      });
    })
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
