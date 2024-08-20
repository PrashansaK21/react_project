import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Profile from './Profile';
import btnModule from './Button.module.css';


function App() {
  let [status, setStatus] = useState(false);
 


  return (
    <div>
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      <Profile />
      <button onClick={() => setStatus(!status)}>
        {(status) ? 'Hide' : 'Show'}
      </button>
      {
        (status) ? <p className='para'>Welcome To Ws</p> : ''
      }

    </div>

  );
}

export default App;
