import React, { useEffect } from 'react';
import Request from '../Request/Request';

const DisplayAttendanceRequests = (props) => {

console.log(props.event.pending)

    return ( 
    <div>
        {props.event && props.event.map((item)=>{
            return(
                <div>
                    {props.toggleReq &&
             <Request eventId={props.eventId}acceptEvent={props.acceptEvent}item={item} event={props.event}/>
                    }
                </div>
            )
        })}
    <div>
  
    </div>
    </div> );
}
 
export default DisplayAttendanceRequests;