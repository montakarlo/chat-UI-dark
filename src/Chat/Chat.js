import React, {Component} from 'react';
import './Chat.sass'
import ChatContainer from './ChatContainer/ChatContainer'
import Pageheader from './Pageheader/Pageheader'
import Footer from './Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'
// import {fetchedToStore} from '../redux/actions/actions'
import {connect} from 'react-redux'


export class Chat extends Component {

  // componentDidMount = () => {
  //   this.props.onFetch('https://edikdolynskyi.github.io/react_sources/messages.json');
  // }

  render(){
    return(
      <div className = "container">
        <Pageheader />
        {/* {!this.props.loaded ? <ReactBootStrap.Spinner animation="border" variant="light"/> : <ChatContainer />} */}
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

// function mapDispatchToProps(dispatch) {
//   return {
//     onFetch: link => dispatch(fetchedToStore(link)),
//   }
// }

export default connect(mapStateToProps, null)(Chat)