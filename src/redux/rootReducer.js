import {combineReducers} from 'redux'

import messages from './reducers/messages'
import chat from './reducers/chat'

export default combineReducers({
  messages, chat
})
