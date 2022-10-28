import React from 'react'
import './Message.css';

const Message = ({ success, info, error }) => {

    if (success) {
        return (
            <div className="message__txt" >
                <h3>Bravo!!!</h3>
                <p>{success}</p>
            </div>
        )
    } else if (error) {
        return (
            <div className="message__txt" >
                <h3>Ups!!!</h3>
                <p>{error}</p>
            </div>
        )
    } else if (info) {
        return (
            <div className="message__txt" >
                <h3>Pazi!!!</h3>
                <p>{info}</p>
            </div>
        )
    }


    // switch (poruka) {
    //     case success:
    //         return (
    //             <div className="message__txt" id="message-container" >
    //                 <h3>Bravo!!!</h3>
    //                 <p>{success}</p>
    //             </div>
    //         )
    //         break;
    //     case error:
    //         return (
    //             <div className="message__txt" id="message-container" >
    //                 <h3>Ups!!!</h3>
    //                 <p>{error}</p>
    //             </div>
    //         )
    //         break;
    //     case info:
    //         return (
    //             <div className="message__txt" id="message-container" >
    //                 <h3>Polako!!!</h3>
    //                 <p>{info}</p>
    //             </div>
    //         )
    //         break;
    //     default:
    // }

}

export default Message