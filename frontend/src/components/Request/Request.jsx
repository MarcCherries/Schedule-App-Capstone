import React, { useState } from 'react';

const Request = (props) => {
  

    return ( <div>
       
        <div>
           {props.item.event_type}
                <button onClickCapture={()=>props.acceptEvent(props.eventId, props.item.id)} >Accept</button>
                <button onClickCapture={()=>props.declineEvent(props.eventId, props.item.id)}>Decline</button>
                </div>

    </div> );
}
 
export default Request;