import React, {Component} from 'react';
import Button from '../../shared/Button';

export default class Timer extends Component {
  renderStartButton() {
    if(this.props.needShowStart(this.props.task))
      return (<Button name="Start track!" onAction={() => this.props.onStart(this.props.task)}/>);
    else
      return null;
  }

  renderStopButton() {
    if(this.props.needShowStop(this.props.task))
      return (<Button name="Stop track!" onAction={() => this.props.onStop(this.props.task)}/>);
    else
      return null;
  }

  render() {
    return (
      <div>
        {this.renderStartButton()}
        {this.renderStopButton()}
      </div>
    );
  }
}
