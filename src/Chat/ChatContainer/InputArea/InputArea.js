import React, {Component} from 'react';
import './InputArea.sass'
import { render } from 'react-dom';

import {HeaderInfoContext} from '../../../Chat/Chat'

export class InputArea extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', createdAt: '', id: '', userId: '4b003c20-1b8f-11e8-9629-c7eca82aa7bd'}
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    // console.log(this.state);
  }
  onChangeMessage(event){
    let id = '_' + Math.random().toString(36).substr(2, 20);
    this.setState({text: event.target.value, createdAt: Date.now(), id: id});
    // console.log(event.target.value)
  }

  render(){
    return (
      <HeaderInfoContext.Consumer>
        {messages => (
          <form onSubmit={this.onSubmit}>
            <div className="inputArea">
              <div className="inputAreaContainer">
                <textarea
                  type="text"
                  id="input_message"
                  name="input_text"
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                  placeholder="Type message!"
                  // function={messages().addMessage}
                  >
                  
                </textarea>
              </div>
              <button
                type="submit"
                value="Submit"
                className="inputArea__button"
                onClick={ () => {
                  messages().addMessage(this.state)
                  
                }}
              >Send
              </button>
            </div>
          </form>
        )}
      </HeaderInfoContext.Consumer>
    )
  }
}
export default InputArea;
