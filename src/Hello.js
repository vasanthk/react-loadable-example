import React from 'react'

export default class extends React.Component {

  someMethod() {
    window.alert('haha')
  }
  
  render() {
    return <h1>
      Hello {this.props.name}!
  </h1>
  }
}
  
