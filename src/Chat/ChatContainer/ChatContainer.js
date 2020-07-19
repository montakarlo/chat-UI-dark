import React from 'react';
import './ChatContainer.sass'
import Header from './Header/Header'
import ChatBody from './ChatBody/ChatBody'
import InputArea from './InputArea/InputArea'


export default (props) => (
  <div className="chatContainer">
    <Header />
    <ChatBody />
    <InputArea />
  </div>
)

