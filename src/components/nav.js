import React, {Component} from 'react'; 
import logo from '../images/logo@2x.svg';

//react router for routes
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App.js';
import About from '../containers/about.js';

import '../components/nav.css';


class MyNavbar extends React.Component{

  constructor(props){
    super(props);
        this.state = {
            active: false
        };
    }
 
  render() {
   
      return (
          <div className = 'Navbar'>

              <Link to="/" className = "nav-link" id = "logo-link"> <img className = 'logo' src={logo} alt=""></img> </Link>
              <div className = "nav-text" id = "about"><Link className = "nav-link" to="/about"> About</Link></div>
              <div className = "nav-text" id = "work"> <Link className = "nav-link" to="/case">Work</Link> </div>


          </div>
    


      );
  }
}

export default MyNavbar;