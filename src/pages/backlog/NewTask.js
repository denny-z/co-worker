import React, {Component} from 'react';

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  changeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onCreate() {
    this.props.onCreate(this.state)
    this.setState({
      description: '',
      name: ''
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.changeName(e)}
          placeholder="Name"
        />
        <br/>
        <textarea
          value={this.state.description}
          onChange={(e) => this.changeDescription(e)}
          placeholder="Description"
        />
        <br/>
        <button onClick={() => this.onCreate()}>Create!</button>
      </div>
    )
  }
}
