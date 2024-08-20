import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"anil"
    }


  }
  componentDidMount(){
    console.log("componentDidMount")

  }
  render(){
    console.log("Render")


    return(
      <div className='App'>
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Sharma"})}}>Update Name</button>
      </div>
    )
  }
}

export default App;
