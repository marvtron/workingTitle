import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { userInfo } from "os";

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
            >
              <i className="material-icons">palette</i>
            Paint Pursuit
            </Link>  
            <ul className="right hide-on-med-and-down">
              <li><a href="/user/profile" style={{fontFamily: "monospace", color: "black"}}><i className="material-icons">person</i></a></li>
              <li><a href="/friends" style={{fontFamily: "monospace", color: "black"}}><i className="material-icons">contacts</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;