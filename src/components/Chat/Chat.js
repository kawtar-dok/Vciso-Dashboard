import React from 'react'
import './Chat.css'
import reportWebVitals from "./reportWebVitals";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import Card from "@mui/material/Card";
import { Divider } from '@mui/material';
import { useState } from 'react';
import Conversation from './Conversation';
import Boite from './Boite';

const Chat = () =>{

  return (

<SoftBox py={3}>
 
    <div className='Chat'>
   
   <SoftBox mb={3}>
           <SoftBox pr={0}>
              <SoftInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "right" }}
              />
           </SoftBox>
           <SoftBox mb={3}>  
            </SoftBox>
         <Card className="Chat__Card">
           {/* Left Side*/}
          <div className="Left__Side__chat">
          <SoftBox mb={1}  >  
            </SoftBox>
            <SoftBox className='Chat__Container'>
                <h2>Chats</h2>
                <Divider/>
                <div className='Chat__list'>
                     <Conversation />
                </div>
            </SoftBox>
          </div>
        </Card>
    </SoftBox>
      {/* Right Side*/}
     <Boite />
 </div>
   
</SoftBox>
  )
}

export default Chat
reportWebVitals();