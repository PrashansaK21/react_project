import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react'



function App() {
  const [name,setName]=React.useState("Neha")
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <User />
     {/* <User name={name}/>
     <button onClick={()=>setName("Renu")}>Update Name</button> */}
    </div>
  );
}

export default App;
