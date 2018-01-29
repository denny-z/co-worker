import React, {Component} from 'react';
import moment from 'moment';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      task: nextProps.task
    })
  }

  renderActivity(activities) {
    if (activities == null) {
      return ''
    } else {
      return activities.map((a) => {
          return (
            <div key={a.start + a.stop}>
              <span>Start {this.formatDate(a.start)} </span>
              <span>Stop {this.formatDate(a.stop)}</span>
            </div>
          )
      })
    }
  }

  formatDate(date) {
    if(date == null)
      return '...';
    else
      return moment(date).format('llll');
  }

  render () {
    return (
      <div>
        Activity tracked:
        { this.renderActivity(this.state.task.activities) }
      </div>
    )
  }
}
