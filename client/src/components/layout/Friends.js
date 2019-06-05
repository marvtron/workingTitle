import React, { Component } from "react";
import "../../App.css";
import FriendCard from "../FriendCard/FriendCard";
import Navbar from "../../components/layout/Navbar";

class Professional extends Component {
  render() {
    return (
      <div className="background2">
        <Navbar />
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "#eee",
              marginTop: "30px",
              fontFamily: "monospace"
            }}
          >
            Talk to a Professional
          </h1>
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    );
  }
}

export default Professional;
