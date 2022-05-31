import React, { useState } from 'react';

const Request = (props) => {
    const [toggleReq, setToggleReq] = useState(true)
    return ( <div>
        {toggleReq &&
        <div>
           {props.item.username}
                <button onClickCapture={()=>props.acceptEvent(props.eventId, props.item.id)} onClick={()=>setToggleReq(false)}>Accept</button>
                <button onClick={()=>setToggleReq(false)} onClickCapture={()=>props.declineEvent(props.eventId, props.item.id)}>Decline</button>
                </div>
}
    </div> );
}
 
export default Request;