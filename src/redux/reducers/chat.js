import {FETCH_MESSAGES} from '../actions/actionTypes';
import messages from './messages';

const initialState = {
  chatName : 'My chat',
  loaded: false,
}


export default function chat(state = initialState, action) {
  if (action.type === FETCH_MESSAGES) {
    fetch(action.payload)
      .then(response => response.json())
      .then(messages => {
        console.log(messages);
        messages.sort(function(a,b){ 
          return - Date.parse(b.createdAt) + Date.parse(a.createdAt)});
      })
      .then(messages => {
        return {
          messages: messages, loaded: true
        }
      })
  } else {
    return state
  }
}
