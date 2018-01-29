import React, {Component} from 'react';
import Button from '../../shared/Button';

export default class Timer extends Component {  
  render() {
    return (
      <div>
        <Button name="Start track!" onAction={() => this.props.onStart(this.props.task)}/>
        <Button name="Stop track!" onAction={() => this.props.onStop(this.props.task)}/>
      </div>
    );
  }
}
