import logo from './logo.svg';
import './App.css';


function App() {
  let name = "React Learning";
  let l=[10,20,30,40]
  let obj={
    'name': 'Wc',
    'cName': 'MERN',
    'desc': 'React Js'
  }
  // let status = false;
  let status = true;
  return(
    <div className="App">
      <h1> {name} </h1>
      {
        l.map((v)=>{
          return(
            <div>{v}</div>
          )
        })
      }
      <div>
        {obj.cName}
      </div>
      {/* //we want to show status in case of true we use ternary operator  and add styling as well*/}
      { (status) ?<h1 style={{color:'red', backgroundColor:'yellow'}}>Welcome To React</h1> : " "}

    </div>

  );



  
}

export default App;
