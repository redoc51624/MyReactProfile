import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <div className = "header">
            {/* <img className= "logo-img" src='images/logo.svg' alt="vikas kumar"></img> */}
            <h2 className="header-name">VIKAS KUMAR <span className="header-title">WEB DEVELOPER</span></h2>
            
          </div>
          <nav className="navbar">
          <ul className="navbar-nav">
            <li><Link to={'/'} className="nav-link">            
            <span></span>
            <span></span>
            <span></span>
            <span></span> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">
            <span></span>
            <span></span>
            <span></span>
            <span></span>About</Link></li>
            <li><Link to={'/contact'} className="nav-link">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
