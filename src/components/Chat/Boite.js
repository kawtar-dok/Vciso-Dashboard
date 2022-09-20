import React from 'react'
import "./Boite.css"

import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import Conversation from './Conversation';

const Boite = () => {
  return (
    <div >
        <SoftBox mb={8}>  
        </SoftBox>
        {/* Left Side*/}  
        <Card className="Boite__Card">
           <div className="Right__Side__chat">
            {/* Left Side<Conversation />*/}  
            
           </div>
        </Card>   
       
    </div>
  )
}

export default Boite
