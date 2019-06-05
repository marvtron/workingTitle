import React, { Component } from "react";
import VetCard from '../../components/VetCard/VetCard';
import Navbar from "../../components/layout/Navbar";
import "../../App.css";

class Vet extends Component {         
    render() {
          return (
            <div className='background2'>
              <Navbar />
              <div>
            <VetCard/>
            <VetCard/>
            </div>
            </div>         
          );
        }
      }    
  
    export default Vet;