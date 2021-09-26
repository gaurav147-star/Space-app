import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './isspos.css';
import App from './App';
import Map from './Isspos';
import SpacePeople from './SpacePeople';
import Particles from 'react-particles-js';

ReactDOM.render(
  <Router>
    <div className="index">
       
        <Link className="link2" to="/"> <span>Explore The Planets </span></Link>
        <Link className="link2" to="/isspos"><span>International Space Station position</span> </Link>
        <Link className="link2" to="/spacepeople"> <span>Space People</span></Link>
        <Particles className="particle"
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  <h1 className="index_main"> Welcome to the Space-App </h1>
        


        <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/isspos' component={Map}></Route>
        <Route exact path='/spacepeople' component={SpacePeople}></Route>
        </Switch>
        </div>
  </Router> 
  ,
  document.getElementById('root')
);


