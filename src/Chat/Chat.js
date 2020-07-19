import React, {Component} from 'react';
import './Chat.sass'
import ChatContainer from './ChatContainer/ChatContainer'
import Pageheader from './Pageheader/Pageheader'
import Footer from './Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

export const HeaderInfoContext = React.createContext()

export class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
            chatName : 'My chat',
            myId: '4b003c20-1b8f-11e8-9629-c7eca82aa7bd',
            messages : [],
            loaded: false}
    }
  getHeaderInfo = () => {
    let chatName = this.state.chatName;
    let participants = [];
    let messagesAmount = 0;
    let answerObj = {};
    let messagesTime = [];
    this.state.messages.forEach(message => {
      messagesAmount++ ;
      participants.push(message.userId);
      messagesTime.push(Date.parse(message.createdAt));
    });
    participants = Array.from(new Set(participants));
    messagesTime.sort((a, b) => b - a);
    let date = new Date(messagesTime[0]);
    let lastMessageTime = date.toString().slice(0,21);
    answerObj.chatName = chatName;
    answerObj.participants = participants.length;
    answerObj.messagesAmount = messagesAmount;
    answerObj.lastMessageTime = lastMessageTime;
    answerObj.messages = this.state.messages
    return answerObj;
  }

  getMessages = () => {
    let messages = this.state.messages
    return messages
  }

  getMyId = () => {
    let myId = this.state.myId
    return myId
  }

  addMessage = (newMessage) => {
    let allMessages = [...this.state.messages, newMessage]
    this.setState({ messages: allMessages});
    // console.log(newMessage)
  }

  fromContext = () => {
    return {getHeaderInfo: this.getHeaderInfo, getMessages: this.getMessages, getMyId: this.getMyId, addMessage: this.addMessage}
  }
  
  componentDidMount = () => {
    fetch('https://api.npoint.io/b919cb46edac4c74d0a8')
      .then(response => response.json())
      .then(messages => {
        messages.sort(function(a,b){ 
          return - Date.parse(b.createdAt) + Date.parse(a.createdAt)})
        this.setState({ messages: messages, loaded: true});
    });
  }


  render(){
    return(
      <div className = "container">
        <Pageheader />
        <HeaderInfoContext.Provider value = {this.fromContext}>
          {!this.state.loaded ? <ReactBootStrap.Spinner animation="border" variant="light"/> : <ChatContainer />}
        </HeaderInfoContext.Provider>
        <Footer />
      </div>
    )
  }
}

export default Chat;