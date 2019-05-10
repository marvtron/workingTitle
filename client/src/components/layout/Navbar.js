import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white hide-on-med-and-down" id="nav-mobile">
          <ul id="slide-out" className="sidenav z-depth-1" style={{ backgroundColor: 'black'}}>
    <li>
      <div className="user-view">
      <div className="background">
      </div>
      <a href="/profile"><img className="circle" src=""></img>Meaningful Text</a>
      <a href="#name"><span className="white-text name">John Doe</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div>
    </li>
    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
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
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;