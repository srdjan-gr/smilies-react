import React from 'react'
import './Message.css';

const Message = () => {
    return (
        <div className="message messageActive" id="message">
            <div className="message__color messageInfo" id="message-container"></div>

            <div className="message__txt" id="message-container">
                <h3>Ups!!!</h3>
                <p>Vasa korpa je prazna</p>
            </div>
        </div>
    )
}

export default Message