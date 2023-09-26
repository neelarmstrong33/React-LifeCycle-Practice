import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Vishwas"
      }

      /* Component LifeCycle Update Methods / LifeCycle Mounting Methods */
      console.log("LifeCycleB Constructor");
    }

    /* Component LifeCycle Update Methods / LifeCycle Mounting Methods */
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStaeFromProps');
        return null
    }

    /* Component LifeCycle Mounting Methods */
    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    /* Component LifeCycle Update Methods */

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdated');

        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }

    /* Component LifeCycle Update Methods / LifeCycle Mounting Methods */
  render() {
    console.log('LifecycleB render');
    return <div>Lifecycle B</div>
  }
}

export default LifecycleB