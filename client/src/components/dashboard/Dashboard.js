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

render(){
    const { user } = this.props.auth;
    console.log(this.props);
return (
  <div className='background'>
      <div style={{ height: "100vh"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h1>
                <span style={{ fontFamily: "monospace", fontStyle:"italic", color: '#fffef9'}}>
                  <p style={{fontSize:'35px', textOverflow:''}}>Hello {user.name},
                  <br></br> 
                  Welcome to: Unbridled Healing</p>
                </span>
              <ul>
                <li>
                  {this.state.loadFeedClick ?                
              <Iframe src='https://www.juicer.io/api/feeds/paint-pursuit/iframe' frameborder='0' width='1000' height='1000'></Iframe>
                 : null
                  }
                </li>
              </ul>
              
            </h1>
            <button style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
           }}
           onClick={this.loadFeedClick}
           className="btn btn-small waves-effect waves-light hoverable indigo accent-3"
            >
            <i className="material-icons left">dashboard</i>
              Load Feed
            </button>
 <br></br>
            <button style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
           }}
           onClick={this.onLogoutClick}
           className="btn btn-small waves-effect waves-light hoverable pink accent-3"
            >
            <i className="material-icons left">not_interested</i>
              Logout
            </button>
            <br></br>
          </div>
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