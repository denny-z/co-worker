import React, {Component} from 'react';
import TasksList from '../../shared/TasksList';
import Repository from '../../repositories/Repository';
import Timer from './Timer';
import Activity from './Activity';
import moment from 'moment';

export default class Active extends Component {
  constructor() {
    super();
    this.repo = new Repository('activeTasks');
    this.state = {tasks: []}
    this.repo.getAll().then((tasks) => {
      this.setState({tasks: tasks})
    })
  }

  startTrack(task) {
    task.activities = (task.activities || []).concat(
      [{start: this.getNow()}]
    )

    this.save(task);
  }

  stopTrack(task) {
    let lastItemIndex = (task.activities.length - 1);
    let newActivity = {...task.activities[lastItemIndex], stop: this.getNow()}
    task.activities
      .splice(lastItemIndex, 1, newActivity);

    this.save(task);
  }

  save(task) {
    let existingTask = this.state.tasks.find((t) => {return t.id === task.id});
    let existingTaskIndex = this.state.tasks.indexOf(existingTask);
    this.repo.save(task).then(
      ()=> {
        this.setState({tasks: this.state.tasks.splice(existingTaskIndex, 1, task)});
      }
    )
  }

  getNow() {
    return moment().format()
  }

  render() {
    return (
      <div>
        <h3>Active tasks</h3>
        <div>
          <h4>Tasks list</h4>
          <TasksList tasks={this.state.tasks}>
            <Timer
              onStart={(task) => this.startTrack(task)}
              onStop={(task) => this.stopTrack(task)}
            />
            <Activity />
          </TasksList>
        </div>
      </div>
    )
  }
}
