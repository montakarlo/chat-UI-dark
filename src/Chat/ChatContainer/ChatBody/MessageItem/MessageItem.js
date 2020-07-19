import React from 'react';
import './MessageItem.sass'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {HeaderInfoContext} from '../../../../Chat/Chat'


export default (props) => {
  if (props.userId !== props.myId){
    return (
      <HeaderInfoContext.Consumer>
        {messages => (
          <div className="messageItem_left messageItem_topBottom" id = {props.messageId}>
            <div className='messageItem'>
              <img src={props.src} alt="avatar" className="avatar"/>
              <div className="messageItem__container">
                <p className="text">{props.text}</p>
                <p className="date">{props.date}</p>
              </div>
              {!props.isLiked ?
              <i className="fas fa-heart"
                onClick={ () => {
                  messages().likeMessage(props.messageId)
                }}
              ></i>:
              <i className="fas fa-heart isLiked"
              onClick={ () => {
                messages().likeMessage(props.messageId)
              }}
            ></i>}
            </div>
          </div>
        )}
      </HeaderInfoContext.Consumer>
    )
  } else {
    return (
      <HeaderInfoContext.Consumer>
        {messages => (
          <div className="messageItem_right messageItem_topBottom" id = {props.messageId}>
          <div className='messageItem'>
            <div className="iconsContainer">
              {/* <i className="fas fa-edit"></i> */}
              <i className="fas fa-trash-alt"
                onClick={ () => {
                  if (window.confirm("Do you really want to delete this message?")) { 
                    messages().deleteMessage(props.messageId)
                  }
                }}
              ></i>
              <i className="fas fa-heart"></i>
            </div>
            <div className="messageItem__container_my">
              <p className="text">{props.text}</p>
              <p className="date_my">{props.date}</p>
              <a className="edit" href="#">Edit</a>
            </div>
          </div>
        </div>
        )}
      </HeaderInfoContext.Consumer>
    )
  }
}
