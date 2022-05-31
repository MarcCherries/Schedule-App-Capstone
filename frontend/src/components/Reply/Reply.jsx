import React, { useState } from 'react';
import './Reply.css'
import { Link } from 'react-router-dom';

const Reply = (props) => {
    console.log(props.showHide)
    return ( 
        <div>
             <div className={props.showHide}>
                 <div className='reply-box-full'>
           <p className='reply-box-name'> {props.reply.user.username}:</p>
            <p className='reply-box-text'>{props.reply.reply_text}</p>
            <Link to={`/ViewProfile/${props.reply.user.id}`}><img src={`${props.reply.user.user_photo}`} width="50" height="35"></img></Link>

            </div>
            </div>
        </div>
     );
}
 
export default Reply;