import React from 'react';
import User from '../containers/User.js';
import './Sidebar.css';

const SideBar = ({ contacts }) => {
    return (
        <aside className="Sidebar">
            { contacts.map( contact => {
                return (
                    <User 
                        user={contact}
                        key={contact.user_id}
                    />
                )
            }) }
        </aside>
    );
};

export default SideBar;