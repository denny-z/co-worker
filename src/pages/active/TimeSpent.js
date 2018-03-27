import React, {Component} from 'react';
import Button from '../../shared/Button';
import moment from 'moment';

export default class TimeSpent extends Component {
  calculatePreciseHours() {
    const intialValue = 0.0;

    const activities = this.props.task.activities;
    if(activities == null)
      return intialValue;

    let total = 0;
    activities.forEach(function(activity) {
      const startTime = activity.start;
      const endTime = activity.stop;

      if(startTime == null || endTime == null)
        return intialValue;

      const difference = moment(endTime).diff(moment(startTime), 'hours', true);
      total += difference;
    });

    return total;
  }

  format() {
    const preciseHours = this.calculatePreciseHours();

    const integerHours = Math.floor(preciseHours);
    const minutes = Math.trunc(((+(preciseHours - integerHours)) * 60));
    return {
      hours: integerHours,
      minutes: minutes
    }
  }

  render() {
    return (
      <div>
        Time spent:
        <div>
          Hours: {this.format().hours}
        </div>
        <div>
          Minutes: {this.format().minutes}
        </div>
      </div>
    );
  }
}
