import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navlinks from './components/Navlinks';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router path='/' >
            <Header />
            <Contact />
          </Router>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
