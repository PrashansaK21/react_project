import logo from './logo.svg';
import './App.css';
import Student from './Student';
import Faqs from './Faqs';

function App() {
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student name={"Prashansa"} email="prash21@gmail.com" other={{state:'M.P', city:'Bhopal'}}/>
      <Student name={"Prachi"} email="prachi23@gmail.com" other={{state:'M.P', city:'Bhopal'}} />
      <Student name={"Preeti"} email="preeti12@gmail.com" other={{state:'M.P', city:'Indore'}}/>
      
      <Faqs/>
    </div>
  );
}

export default App;
