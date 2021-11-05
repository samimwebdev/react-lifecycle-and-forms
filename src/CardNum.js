import React from 'react'

import styles from './Card.module.css'

class CardNum extends React.Component {
  pickedNumber = evt => {
    //this.props.handlePicked
    this.props.handlePicked(+evt.target.textContent)
  }
  render() {
    return (
      <div onClick={this.pickedNumber} className={styles.card}>
        {this.props.number}
      </div>
    )
  }
}

export default CardNum
