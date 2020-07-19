import React from 'react';
import './MessageItem.sass'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default (props) => {
  if (props.id !== props.myId){
    return (
      <div className="messageItem_left messageItem_topBottom">
        <div className='messageItem'>
          <img src={props.src} alt="avatar" className="avatar"/>
          <div className="messageItem__container">
            <p className="text">{props.text}</p>
            <p className="date">{props.date}</p>
          </div>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    )
  } else {
    return (
      <div className="messageItem_right messageItem_topBottom">
        <div className='messageItem' id = {props.id}>
          {/* <i className="fas fa-heart"></i> */}
          <div className="messageItem__container_my">
            <p className="text">{props.text}</p>
            <p className="date_my">{props.date}</p>
          </div>
        </div>
      </div>
    )
  }
}
