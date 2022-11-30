import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import './App.css';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

// App Level Context/State
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {  
  return (
      <GithubState>
        <AlertState> 
          <Router>
              <div className='App'>
                <Navbar></Navbar>          
                  <div className='container'>        
                  <Alert />
                    <Routes>              
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/user/:login" element={<User /> } />                
                        <Route path="*" element={<NotFound /> } />                
                    </Routes>              
                  </div>        
              </div>
          </Router>
        </AlertState>
      </GithubState>
    );   
}

export default App;
