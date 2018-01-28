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
      <div>
        <h3>Active tasks</h3>
        <div>
          <h4>Tasks list</h4>
          <TasksList tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}
