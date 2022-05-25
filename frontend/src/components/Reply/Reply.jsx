import React, { useState } from 'react';
import './Reply.css'

const Reply = (props) => {
    console.log(props.showHide)
    return ( 
        <div>
             <div className={props.showHide}>
                 <div className='reply-box-full'>
           <p className='reply-box-name'> Reply by:{props.reply.user.username}:</p>
            <p className='reply-box-text'>{props.reply.reply_text}</p>
            </div>
            </div>
        </div>
     );
}
 
export default Reply;