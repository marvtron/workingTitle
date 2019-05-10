import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Iframe from 'react-iframe';


class Dashboard extends Component {
  constructor(){
  super();
  this.state = {loadFeedClick: false};
  }
loadFeedClick = () => {
  this.setState({
    loadFeedClick: true
  });
}
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged in!{" "}
                <span style={{ fontFamily: "montserrat", fontStyle:"italic" }}>Welcome to Paint Pursuit!</span>
              </p>
              <ul>
                <li>
                  {this.state.loadFeedClick ?                
              <Iframe src='https://www.juicer.io/api/feeds/paint-pursuit/iframe' frameborder='0' width='1000' height='1000' style='display:block margin:0, auto'></Iframe>
                 : null
                  }
                </li>
              </ul>
              
            </h4>
            <button style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
           }}
           onClick={this.loadFeedClick}
           className="btn btn-small waves-effect waves-light hoverable indigo accent-3"
            >
            <i className="material-icons left">palette</i>
              Load Feed
            </button>
            <br></br>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable pink accent-3"
            ><i className="material-icons left">block</i>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);