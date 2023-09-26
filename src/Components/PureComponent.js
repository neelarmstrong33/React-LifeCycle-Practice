import React, { PureComponent } from 'react'

class PureComponent extends PureComponent {
  render(props) {
    console.log("Pure Component");
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComponent