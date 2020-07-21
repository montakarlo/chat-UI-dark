import {FETCH_MESSAGES,
        ADD_MESSAGE,
        DELETE_MESSAGE,
        LIKE_MESSAGE,
        TAKE_ALL_MESSAGES} from './actionTypes'

export function fetchedToStore(link) {
  return (dispatch) => {
    dispatch(fetchMessages(link))
  }
}

export function fetchMessages(link) {
  return {
    type: FETCH_MESSAGES,
    payload: link
  }
}

export function addMessage(newMessage) {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    payload: id
  }
}

export function likeMessage(id) {
  return {
    type: LIKE_MESSAGE,
    payload: id
  }
}

export function takeAllMessages(){
  return {
    type: TAKE_ALL_MESSAGES
  }
}