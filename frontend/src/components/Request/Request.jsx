import React from 'react';

const Request = (props) => {
    return ( <div>
           {props.item.username}
                <button onClick={()=>props.acceptEvent(props.eventId, props.item.id)}>Accept</button>
                <button>Decline</button>
    </div> );
}
 
export default Request;