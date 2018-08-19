import React from 'react';
import './Chats.css';

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    );
}

class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div ref={this.chatsRef} className="Chats">
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