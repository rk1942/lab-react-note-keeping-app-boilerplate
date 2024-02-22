import { Component } from "react";
import "./App.css"

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      value: ""
    }
}

handleChange = (event) => {
  this.setState({
    value : event.target.value
  })
}
render(){
  return(
    <>
    <header className = "header">
      <h1 id="hed">kalvium Note Keeping App</h1>
    </header>

    <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">
                    <div classname = "text-color">
                      {this.state.value}
                    </div>
                    </div>
                </div>                
            </div>
    </>
    
  )
}
}