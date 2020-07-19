import React from 'react';
import './InputArea.sass'



export default (props) => (
  <form>
    <div className="inputArea">
      <div className="inputAreaContainer">
        <textarea id="input_message" name="input_text" placeholder="Type message!"></textarea>
      </div>
      <button type="submit" className="inputArea__button">Send</button>
    </div>
  </form>
)

