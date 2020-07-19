import React from 'react';
import './Header.sass'
import {HeaderInfoContext} from '../../Chat'

function Header () {
  return (
    <HeaderInfoContext.Consumer>
      {header => (
        <div className="header">
          <div className="header__leftSide">  
            <span className="header__leftSide_chatName">{header().getHeaderInfo().chatName}</span>
            <span className="header__leftSide_participants">{header().getHeaderInfo().participants} participants</span>
            <span className="header__leftSide_messagesAmount">{header().getHeaderInfo().messagesAmount} messages</span>
          </div>
            <span className="lastMessageTime">Last message: {header().getHeaderInfo().lastMessageTime}</span>
        </div>
      )}
    </HeaderInfoContext.Consumer>
  )
}

export default Header;
