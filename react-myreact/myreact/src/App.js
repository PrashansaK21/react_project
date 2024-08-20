import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css'
import { questions } from './Data/FaqQuestion';

function App() {
  let[showAns,setShowAns]=useState(questions[0].id)
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="App">
      <div>
        <h1>Frequently Asked Questions(FAQS)</h1>
        <div className='faqouter'>
          {questions.map((faqItems, i)=>{
            return(
              <div className='faqItems' key={faqItems.id}>
              <h2 onClick={()=>{setShowAns(faqItems.id)}}>{faqItems.question}</h2>
              <p className={showAns==faqItems.id?'activeAns':''}>{faqItems.answer}</p>
            </div>

            )
          }

          )}

  
        </div>
      </div>


      <button className='en' onClick={() => setModalStatus(true)}>Enquire Now</button>

      <div onClick={() => setModalStatus(false)} className={`modalOverLay ${modalStatus ? 'modalShow' : ''} `}></div>
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''} `}>
        <h3>Enquiry Now  <span onClick={() => setModalStatus(false)}>&times;;</span></h3>
      </div>
      <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
        {
          menuStatus ?
            <span>&times;</span>
            :
            <span>&#9776;</span>
        }
      </button>
      <div className={`menu ${menuStatus ? 'activemenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password'}></input>
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? 'Hide' : 'Show'}
      </button>
      <br />
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
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
