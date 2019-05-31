import React, { Component } from "react";
import VetCard from '../../components/VetCard/VetCard';
import "../../App.css";

class Vet extends Component {         
    render() {
          return (
            <div className='background2'>
              <div>
            <VetCard/>
            </div>
            </div>         
          );
        }
      }    
  
    export default Vet;