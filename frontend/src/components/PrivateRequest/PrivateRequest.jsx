import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const PrivateRequest = (props) => {
    const [user, token] = useAuth()
    console.log(props.item)
  

    return ( <div>
       
        <div>
           {props.item.event_type}
                <button onClickCapture={()=>props.acceptEvent(props.item.id, user.id)} >Accept</button>
                <button onClickCapture={()=>props.declineEvent(props.item.id, user.id)}>Decline</button>
                </div>

    </div> );
}

export default PrivateRequest;
 