import React from 'react'

class OddOrEven extends React.Component {
  render() {
    return <p>{this.props.number % 2 === 0 ? 'Even' : 'Odd'}</p>
  }
}

export default OddOrEven
