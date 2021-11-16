import React, { Component } from 'react'
import Counter from './Counter'
import ControlledForm from './ControlledForm'

export default class App extends Component {
  state = {
    rendered: true
  }

  render() {
    return (
      <div>
        {/* {this.state.rendered ? <Counter random={10} /> : 'Not rendered'}
        <button
          onClick={() => this.setState({ rendered: !this.state.rendered })}
        >
          Toggle render
        </button> */}
        <ControlledForm />
      </div>
    )
  }
}
