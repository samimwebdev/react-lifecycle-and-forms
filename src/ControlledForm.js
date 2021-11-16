import React, { Component } from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  submitted: false,
  profession: 'developer',
  gender: 'male',
  errors: {}
}

export default class ControlledForm extends Component {
  state = initialState
  //uncontrolled input
  // firstNameRef = React.createRef()

  handleChange = e => {
    const errorState = { ...this.state.errors }
    errorState[e.target.name] = ''
    this.setState({
      [e.target.name]: e.target.value,
      errors: errorState
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName } = this.state

    const updatedState = { ...this.state }
    //uncontrolled input
    // console.log(this.firstNameRef.current.value)
    //If you want to focus on uncontrolled input
    // this.firstNameRef.current.focus()

    if (firstName === '') {
      updatedState.errors.firstName = 'FirstName is Required'
      this.setState(updatedState)
      return
    }

    if (lastName === '') {
      updatedState.errors.lastName = 'LastName is Required'
      this.setState(updatedState)
      return
    }

    this.setState({
      ...initialState,
      submitted: true
    })

    //sending data to server
    console.log(this.state)
  }

  render() {
    const {
      firstName,
      lastName,
      submitted,
      profession,
      gender,
      errors
    } = this.state

    return (
      <div style={{ width: '600px', margin: '0 auto' }}>
        {submitted && <h2>Form is successfully Submitted</h2>}

        {!submitted && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <p style={{ color: 'red' }}>
                {errors.firstName && errors.firstName}
              </p>
              <label htmlFor='firstName'>FirstName: </label>
              <input
                type='text'
                onChange={this.handleChange}
                value={firstName}
                name='firstName'
                ref={this.firstNameRef}
                id='firstName'
              />
            </div>
            <br />
            <div>
              <p style={{ color: 'red' }}>
                {errors.lastName && errors.lastName}
              </p>
              <label htmlFor='lastName'>LastName: </label>
              <input
                type='text'
                onChange={this.handleChange}
                value={lastName}
                name='lastName'
                id='lastName'
              />
            </div>
            <br />
            <div>
              <label htmlFor='profession'>Profession: </label>
              <select
                id='profession'
                name='profession'
                value={profession}
                onChange={this.handleChange}
              >
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='programmer'>Programmer</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor='profession'>Gender: </label>
              Male{' '}
              <input
                type='radio'
                name='gender'
                checked={gender === 'male'}
                value='male'
                onChange={this.handleChange}
              />
              Female{' '}
              <input
                type='radio'
                name='gender'
                checked={gender === 'female'}
                value='female'
                onChange={this.handleChange}
              />
            </div>
            <br />
            <input type='submit' value='Submit' />
          </form>
        )}
      </div>
    )
  }
}
