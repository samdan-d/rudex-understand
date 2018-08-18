import user from './user';
import typing from './typing';
import messages from './messages';
import contacts from './contacts';
import activeUserId from './activeUserId';


import { combineReducers } from 'redux';

export default combineReducers({
    user,
    typing,
    messages,
    contacts,    
    activeUserId,
})