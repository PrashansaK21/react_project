import logo from './logo.svg';
import './App.css';
import Header from './Header';
import imgroad from './images/road.jpg';
import { useState } from 'react';

function App() {
  let template='';
  let[count,setCount]=useState(1)
  let[pshow,setPshow]=useState(true)

  /*if(pshow){
    template=<>
    <button className='bg-[red] p-4' onClick={()=>setPshow(!pshow)}>Hide</button>
    <p>Welcome To Ws</p>
    </>

  }else{
    template=<button className='bg-[red] p-4' onClick={()=>setPshow(!pshow)}>Show</button>
  }*/

  if(pshow){
    template=<Card/>
  }
  else{
    template='';
  }

  let displayData=()=>{
    // alert("Welcome to Ws")
    setCount(count+1)
  }

  let addData=(a,b)=>{
    // console.log(a+b)

  }

  return (
    <div className="App">
      
      {template}
      <div>{count}</div>
      <button className='bg-[aqua] p-[10px]' onClick={addData(20,25)}>Add Data</button>
      <button className='bg-[aqua] p-[10px]' onClick={displayData}>Save</button>
      
      <img width={200} src={imgroad}></img>
      <Header />
      <h1 className='text-[40px] text-red-900 font-bold'>Welcome To React</h1>
    </div>
  );
}

export default App;

let Card=()=>{
  return(
    <h1>Welcome To Ws</h1>

  )
}
