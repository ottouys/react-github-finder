import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import './App.css';
import Home from './components/pages/Home';

class App extends Component{   
  render() {    

    return (
      <Router>
          <div className='App'>
            <Navbar></Navbar>
            <div className='container'>            
            <Routes>              
                <Route path='/' element={<Home  />} />
                <Route path="/about" element={<About />}>
              </Route>
            </Routes>
              
            </div>        
        </div>
      </Router>
    );
  }  
}

export default App;
