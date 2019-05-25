import React, { Component } from "react";
import {NavDropdown, Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import '../../App.css';

class Navbar extends Component {
  
  constructor(){
    super();
    this.state = {dropdownClick: true};
    }
  
  dropdownClick = () => {
    this.setState({
      dropdownClick: false
    })
  }

  reverseDropdown = () => {
    this.setState({
      dropdownClick: !this.state.dropdownClick
    })
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div
            className="nav-wrapper white hide-on-med-and-down"
            id="nav-mobile"
          >
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s6 brand-logo center black-text"
            >
              Working Title
              <i className="fas fa-horse" />
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/dashboard"
                  style={{ fontFamily: "monospace", color: "black" }}
                >
                  <i className="material-icons">home</i>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  style={{ fontFamily: "monospace", color: "black" }}
                >
                  <i className="material-icons">person</i>
                </Link>
              </li>

              <li>
                <NavDropdown
                  onClick={this.reverseDropdown}
                  title={<i className="material-icons">expand_more</i>}
                  id="nav-dropdown"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {this.state.dropdownClick ? (
                    <>
                      <NavDropdown.Item
                        onClick={this.dropdownClick}
                        className="dropdown-item"
                        eventKey="1"
                      >
                        <Nav.Link as={NavLink} to="/friends">
                          ...a professional
                        </Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={this.dropdownClick}
                        className="dropdown-item"
                        eventKey="2"
                      >
                        <Nav.Link as={NavLink} to="/vets">
                          ...a vet
                        </Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                         <button style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                       }}
                       onClick={this.onLogoutClick}
                       className="btn btn-small waves-effect waves-light hoverable pink accent-3"
                        >
                          Logout
                        </button>                        
                      </NavDropdown.Item>
                    </>
                  ) : null}
                </NavDropdown>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);