import React, { Component } from "react";
import {NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../App.css';

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white hide-on-med-and-down" id="nav-mobile">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s6 brand-logo center black-text"
            >Unbridled Healing
              <i class="fas fa-horse"></i>
            
            </Link>  
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to = "/dashboard" style={{fontFamily: "monospace", color: "black"}}>
                <i className="material-icons">home</i></Link></li>
              <li>
                <Link to = "/profile" style={{fontFamily: "monospace", color: "black"}}>
                <i className="material-icons">person</i></Link></li>
              <li>
              <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1"><i className='material-icons'>arrow_drop_down</i></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;