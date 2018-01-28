import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return (<button onClick={() => this.props.onAction(this.props.task)}>{this.props.name}</button>)
  }
}
