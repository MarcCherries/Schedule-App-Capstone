import React, { useState } from 'react';
import './Modal.css'

const Modal = (props) => {

    if(!props.eventTrigger){
        return null
    }

console.log(props.eventTrigger)

    return ( 
        <div className='modal-backdrop'>
            <div className='modal-overlay'>
                <header>{props.title}</header>
                <body>{props.message}</body>
                <button onClick={props.handleClick} onClickCapture={props.resetSearch}>Okay</button>

            </div>
        </div>
     );
}

 
export default Modal;