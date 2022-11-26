import React from "react";

const PopupOptions = {
    render: (message, onConfirm, onCancel) => {
        return (
            <article className='confirm__message'>
                <div className='confirm__message-container'>
                    <p> {message} </p>

                    <div className="confirm__message-buttons">
                        <button className='btn-oposite' onClick={onConfirm}> OK </button>
                        <button className='btn' onClick={onCancel}> Poništi </button>
                    </div>
                </div>
            </article>
        );
    }
};

export default PopupOptions;