import React, {Component} from "react";
import './App.css'
import LifecycleA from "./Components/LifecycleA";
import FragmentDemo from "./Components/FragmentDemo";
import Table from "./Components/Table";
import PureComponent from "./Components/PureComponent"

class App extends Component {
  render() {
    return(
      <div className="App">
        {/* <LifecycleA /> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        <PureComponent/>
      </div>
    )
  } 
}

export default App;