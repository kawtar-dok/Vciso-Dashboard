// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage,setStateFunc) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
   }
   
   handleJavascriptList () {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }

 
   helloHandler() {
    const message = this.createChatBotMessage("Hello. i'm not self aware. i am just a VcisoBot");
    this.setChatBotMessage(message);
   };
   hayHandler() {
      const message = this.createChatBotMessage("i'am doing good and you ?");
      this.setChatBotMessage(message);
   };
   askingHandler() {
      const message = this.createChatBotMessage("there's many solutions we do have FCE, The SolFetch");
      this.setChatBotMessage(message);
   };
   mgoodHandler() {
      const message = this.createChatBotMessage("Good. Do you have any questions?");
      this.setChatBotMessage(message);
   };
   goodbyeHandler() {
      const message = this.createChatBotMessage("Good Bye");
      this.setChatBotMessage(message);
   };
  
   thankHandler() {
      const message = this.createChatBotMessage("Happy to Help!");
      this.setChatBotMessage(message);
   };
   abouTHandler() {
      const message = this.createChatBotMessage("I'm vciso, an Artificial Intelligent bot");
      this.setChatBotMessage(message);
   };
   nameHandler() {
      const message = this.createChatBotMessage("I'm vciso");
      this.setChatBotMessage(message);
   };
   yesHandler() {
      const message = this.createChatBotMessage("yes, ask!");
      this.setChatBotMessage(message);
   };
   errorHandler() {
      const message = this.createChatBotMessage("i don't understand what you are saying! Try something else");
      this.setChatBotMessage(message);
   }; 

  
   setChatBotMessage (message){
      this.setState(state => ({ ...state, messages: [...state.messages, message]
   }))
  };
 }
 
 export default ActionProvider;
 