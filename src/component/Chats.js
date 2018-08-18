import React from 'react';
import './Chats.css';

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    );
}

class Chats extends React.Component {
    render() {
        return (
            <div className="Chats">
                {this.props.messages.map(message => {
                    return (
                        <Chat key={message.number} message={message} />
                    );
                })}
            </div>
        )
    }
}

export default Chats;