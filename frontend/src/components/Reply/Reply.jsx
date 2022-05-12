import React, { useState } from 'react';

const Reply = (props) => {
    return ( 
        <div>
             <div className={props.showHide}>
           <p> Reply by:{props.reply.user.username}:</p>
            <p>{props.reply.reply_text}</p>
            </div>
        </div>
     );
}
 
export default Reply;