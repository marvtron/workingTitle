import React, { Component } from "react";
import "../../App.css";
import FriendCard from "../FriendCard/FriendCard";

class Friends extends Component {         
  render() {
        return (
          <div className='background2'>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          </div>         
        );
      }
    }    

  export default Friends;