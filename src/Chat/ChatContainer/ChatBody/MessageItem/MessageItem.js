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
          <div className="iconsContainer">
            {/* <i className="fas fa-edit"></i> */}
            <i className="fas fa-trash-alt"></i>

            <i className="fas fa-heart"></i>
          </div>
          <div className="messageItem__container_my">
            <p className="text">{props.text}</p>
            <p className="date_my">{props.date}</p>
            <a className="edit" href="#">Edit</a>
          </div>
        </div>
      </div>
    )
  }
}
