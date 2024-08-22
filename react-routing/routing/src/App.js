import './App.css';
import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
// import { createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {path: "/", element:<Home/>},
//   {path: "/", element:<About/>}
// ]);
function App() {
  return (
    // <RouterProvider router={router}></RouterProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
