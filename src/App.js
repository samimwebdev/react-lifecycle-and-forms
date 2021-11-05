//functional way
//class based way
//JSX -Javascript XML
// <h1>Heading</h1>
//<img src='' />

//Expression not statement

//changing state, props,manual forcing re-render

//style inline, html, local scoped style

//synthetic event
import React from 'react'

import CardNum from './CardNum'
import OddOrEven from './OddOrEven'

class App extends React.Component {
  state = {
    count: 0,
    randomValues: [30, 33, 37, 42]
  }

  handleIncrement = evt => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleDecrement = evt => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  handlePicked = num => {
    this.setState({
      pickedNum: num
    })
  }

  render() {
    return (
      <div className='App'>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <OddOrEven number={this.state.pickedNum} />

        <br />
        {this.state.randomValues.map((number, index) => {
          return (
            <CardNum
              number={number}
              key={index}
              handlePicked={this.handlePicked}
            />
          )
        })}
      </div>
    )
  }
}

export default App
