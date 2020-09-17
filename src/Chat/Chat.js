import React, {Component} from 'react';
import './Chat.sass'
import ChatContainer from './ChatContainer/ChatContainer'
import Pageheader from './Pageheader/Pageheader'
import Footer from './Footer/Footer'
import {connect} from 'react-redux'

export class Chat extends Component {

  render(){
    return(
      <div className = "container">
        <Pageheader />
        <ChatContainer />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loaded: state.loaded
  }
}

export default connect(mapStateToProps, null)(Chat)