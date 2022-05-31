import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './PrivateRequest.css'
import { Link } from 'react-router-dom';
const PrivateRequest = (props) => {
    const [user, token] = useAuth()
    console.log(props.item)
  

    return ( <div>
       
        <div className='invite-request'>
          
            <div>


           <Link to={`/PrivateEventPage/${props.item.id}`}>{props.item.event_type}</Link>
           </div>
           <div>
                <button  onClick={()=>props.acceptEvent(props.item.id, user.id, props.item)} >+</button>
                <button onClick={()=>props.declineEvent(props.item.id, user.id)}>-</button>
                </div>
                </div>

    </div> );
}

export default PrivateRequest;
 