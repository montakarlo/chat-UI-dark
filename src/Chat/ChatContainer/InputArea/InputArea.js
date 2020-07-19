import React, {Component} from 'react';
import './InputArea.sass'
import { render } from 'react-dom';

import {HeaderInfoContext} from '../../../Chat/Chat'

export class InputArea extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', createdAt: '', id: '', userId: '9e243930-83c9-11e9-8e0c-8f1a686f4ce4'}
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

  clearArea(){
    // this.setState({text: ''});
    document.getElementById('input_message').value = "";
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
                  >
                </textarea>
              </div>
              <button
                type="submit"
                value="Submit"
                className="inputArea__button"
                onClick={ () => {
                  messages().addMessage(this.state);
                  this.clearArea();
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
