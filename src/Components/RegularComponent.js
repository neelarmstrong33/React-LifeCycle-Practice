import React, { Component } from 'react'

class RegularComponent extends Component {
   
  render(props) {
    console.log("Regular Component");
    return (
      <div>RegularComponent {this.props.name}</div>
    )
  }
}

export default RegularComponent