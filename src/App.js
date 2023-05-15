import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Navbarws from './components/Navbarws';
import TextForm from './components/TextForm';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light'); //whether dark mood is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

    }
    else {
      setMode('light');
    }
  }

  return (
    <>

      {/* <Navbar title="MTD" aboutText="About" /> */}
      {/* <Navbar title="MTD" mode={mode} toggleMode={toggleMode} /> */}
      <Router>
      <Navbarws title="MTD" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <TextForm heading="Enter your text below to analyze" /> */}

        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter your text below to analyze" />
            </Route>
          </Switch>
        </div>
        </Router>




      </>
      );
}

      export default App;
