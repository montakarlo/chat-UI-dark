import React from 'react';
import './Header.sass'
import {connect} from 'react-redux'

function Header (props) {
  return (

    <div className="header">
      <div className="header__leftSide">  
        <span className="header__leftSide_chatName">{props.chatName}</span>
        <span className="header__leftSide_participants">{props.participants} participants</span>
        <span className="header__leftSide_messagesAmount">{props.messagesAmount} messages</span>
      </div>
        <span className="lastMessageTime">Last message: {props.lastMessageTime}</span>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state);
  let participants = [];
  let messagesAmount = 0;
  let messagesTime = [];
  let allMessages = state.messages.messages
  allMessages.forEach(message => {
    messagesAmount++ ;
    participants.push(message.userId);
    messagesTime.push(Date.parse(message.createdAt));
  });
  participants = Array.from(new Set(participants));
  messagesTime.sort((a, b) => b - a);
  let date = new Date(messagesTime[0]);
  let lastMessageTime = date.toString().slice(0,21);
  return {
    chatName: state.chat.chatName,
    messages: state.messages.messages,
    participants: participants.length,
    messagesAmount,
    lastMessageTime
  }
}

export default connect(mapStateToProps)(Header)