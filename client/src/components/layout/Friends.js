import React, { Component } from "react";
import Iframe from 'react-iframe';
import "../../App.css";

class Friends extends Component {
    render(){
        return(
        <div>
        <div style ={{ height: "100vh", fontFamily: "monospace"}} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h1>You Don't Have Any Friends</h1>
                </div>                
            </div>
        </div>
        </div>
        )
        }
        }

  export default Friends;