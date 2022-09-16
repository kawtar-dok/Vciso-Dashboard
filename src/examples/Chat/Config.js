import React from 'react';
// Config starter code
import BotAvatar from "components/BotAvatar/BotAvatar";
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from 'components/Todos/Todos';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import LearningOptions from 'components/LearningOptions/LearningOptions';
import LinkList from 'components/LinkList/LinkList';

const config = {
  initialMessages: [createChatBotMessage(`Welcom to the chat`, {
  }),
],
  botName : 'VcisoBot',
  customComponents: {
    botAvatar : (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#51BDBD',
    },
    chatButton: {
      backgroundColor: 'rgb(49, 53, 52)',
    },
  },
  state : {
   // vcisoSolutionTitles: ["the VC5", "CEF"]
   todos: []
  },

  widgets: [
   
],
};

export default config