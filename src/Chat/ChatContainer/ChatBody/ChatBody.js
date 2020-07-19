import React from 'react';
import './ChatBody.sass'
import MessageItem from './MessageItem/MessageItem'
import {HeaderInfoContext} from '../../../Chat/Chat'


export default () => {
  return (
      <HeaderInfoContext.Consumer>
      {messages => (
        <div className="chatBody">
          <div className="chatBody__container" id="chatBody__container">
            {messages().getMessages().map((message, index) => {
              return(
                <MessageItem 
                id = {message.userId}
                text = {messages().getHeaderInfo().messages[index].text}
                src = {messages().getHeaderInfo().messages[index].avatar}
                date = {new Date(messages().getHeaderInfo().messages[index].createdAt).toString().slice(16,21)}
                key = {index}
                myId = {messages().getMyId()}
                /> 
              )
            })
            }
          </div>
        </div>
      )}
    </HeaderInfoContext.Consumer>
  )
}


