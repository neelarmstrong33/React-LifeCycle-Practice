// import React, { Component } from 'react'
import React, {PureComponent} from 'react'
import RegularComponent from './RegularComponent'
import PureComponent from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Neel'
      }
    }

    componentDidMount() {
        setInterval(() => {
           this.setState({
            name : 'Neel'
           }) 
        }, 2000)
    }
  render() {
    console.log("****************Regular Component*******************");
    return (
      <div>
        Parent Component
        {/* <RegularComponent name={this.state.name}/> */}
        {/* <PureComponent name={this.state.name}/> */}
        <MemoComponent name={this.state.name}/>
        </div>
    )
  }
}

export default ParentComponent