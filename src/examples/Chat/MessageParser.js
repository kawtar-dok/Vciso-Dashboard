// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;//the chatbot state
    }
  
    parse(message) {
      const lowercase = message.toLowerCase()
      
       
      if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hay") || lowercase.includes("is anyone there ?") || lowercase.includes("hey") ) {
       this.actionProvider.helloHandler();
      }
      if (lowercase.includes("how are you?")) {
        this.actionProvider.hayHandler();
       }
      if (lowercase.includes("can you gimme some Vciso solutions?")) {
        this.actionProvider.helpHandler();
       }
       if (lowercase.includes("yes") ) {
        this.actionProvider.yesHandler();
       }
       if (lowercase.includes("i'am good") || lowercase.includes("fine")  || lowercase.includes("good") || lowercase.includes("m good") || lowercase.includes("am good") || lowercase.includes("i am good"))  {
        this.actionProvider.mgoodHandler();
       }  
       if (lowercase.includes("good bye")  || lowercase.includes("GoodBye") || lowercase.includes("see you later")) {
        this.actionProvider.goodbyeBHandler();
       }
       if (lowercase.includes("Who are you?")){
        this.actionProvider.abouTHandler();
       }
       if (lowercase.includes("thank you") || lowercase.includes("thanks") || lowercase.includes("thanks for help") || lowercase.includes("that's helpful!")){
        this.actionProvider.thankHandler();
       }
      
       if (lowercase.includes("what is your name?")  || lowercase.includes("what should I call you?")){
        this.actionProvider.nameHandler();
       }
    }
  }
  
  export default MessageParser;
   
  //whats hapn' new MessagerParser(actionProvider, state)