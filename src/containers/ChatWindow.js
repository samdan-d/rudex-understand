import _ from 'lodash';
import React from 'react';
import './ChatWindow.css';

import store from '../store';
import Chats from '../component/Chats.js';
import Header from '../component/Header.js';
import MessageInput from '../containers/MessageInput.js';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    const { typing } = state;

    console.log(typing);

    return (
        <div className="ChatWindow">
            <Header user={ activeUser } />
            <Chats messages={ _.values(activeMessages) }/>
            <MessageInput value={ typing } />
        </div>
    );
}

export default ChatWindow;