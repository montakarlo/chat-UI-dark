import React from 'react';
import './Header.sass'
import {HeaderInfoContext} from '../../Chat'

function Header () {
  return (
    <HeaderInfoContext.Consumer>
      {header => (
        <div className="header">
          <div className="header__leftSide">  
            <p className="header__leftSide_chatName">{header().getHeaderInfo().chatName}</p>
            <p className="header__leftSide_participants">{header().getHeaderInfo().participants} participants</p>
            <p className="header__leftSide_messagesAmount">{header().getHeaderInfo().messagesAmount} messages</p>
          </div>
            <p className="lastMessageTime">Last message: {header().getHeaderInfo().lastMessageTime}</p>
        </div>
      )}
    </HeaderInfoContext.Consumer>
  )
}

export default Header;
