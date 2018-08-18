import _ from 'lodash';
import React from 'react';
import './ChatWindow.css';

import store from '../store';
import Chats from '../component/Chats.js';
import Header from '../component/Header.js';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={ activeUser } />
            <Chats messages={ _.values(activeMessages) }/>
        </div>
    );
}

export default ChatWindow;