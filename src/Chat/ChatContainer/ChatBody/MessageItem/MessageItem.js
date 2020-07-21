import React from 'react';
import './MessageItem.sass'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { MessageItem } from 'semantic-ui-react';
import {deleteMessage, likeMessage} from '../../../../redux/actions/actions'
import {connect} from 'react-redux'

function MessageItem (props) {
// export default (props) => {
  console.log(props.myId+' and '+props.userId);
  if (props.userId !== props.myId){
    return (
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
              props.onLike(props.messageId)
            }}
          ></i>:
          <i className="fas fa-heart isLiked"
          onClick={ () => {
            props.onLike(props.messageId)
          }}
        ></i>}
        </div>
      </div>
    )
  } else {
    return (
      <div className="messageItem_right messageItem_topBottom" id = {props.messageId}>
      <div className='messageItem'>
        <div className="iconsContainer">
          {/* <i className="fas fa-edit"></i> */}
          <i className="fas fa-trash-alt"
            onClick={ () => {
              if (window.confirm("Do you really want to delete this message?")) { 
                props.onDelete(props.messageId)
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
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteMessage(id)),
    onLike: (id) => dispatch(likeMessage(id)),
  }
}

export default connect(null, mapDispatchToProps)(MessageItem)
