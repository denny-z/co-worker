import React, {Component} from 'react';
import TasksList from '../../shared/TasksList';
import Repository from '../../repositories/Repository';

export default class Active extends Component {
  constructor() {
    super();
    this.repo = new Repository('activeTasks');
    this.state = {
      tasks: this.repo.getAll()
    };
  }

  render() {
    return (
      <TasksList
        tasks={this.state.tasks}
      />
    )
  }
}
