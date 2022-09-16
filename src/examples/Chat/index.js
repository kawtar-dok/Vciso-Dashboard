import { useState, useEffect } from "react";
import { Chatbot } from "react-chatbot-kit"
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Custom styles for the Configurator
import ConfiguratorRootChat from "examples/Chat/ConfiguratorRootChat";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setOpenChat,
} from "context";

//Chatbot element
import MessageParser from "./MessageParser"; 
import config from "./Config";
import ActionProvider from "./ActionProvider";

function Chat() {
  const [controller, dispatch] = useSoftUIController();
  const { openChat, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseChat = () => setOpenChat(dispatch, false);

  // sidenav type buttons styles


  return (
    <ConfiguratorRootChat variant="permanent" ownerState={{ openChat }}>
       <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={0}
        pb={0.8}
        px={4}
      >
        
        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            color: "#fff",
            cursor: "pointer",
            zIndex:"1000",
            mt: 2,
            ml: 36,
           
           

          })}
          onClick={handleCloseChat}
        >
          close
        </Icon>
        
      </SoftBox>
      <Chatbot   config={config} messageParser={MessageParser} actionProvider={ActionProvider}  />
    {/* <Divider />*/}

      
    </ConfiguratorRootChat>
  );
}

export default Chat;
