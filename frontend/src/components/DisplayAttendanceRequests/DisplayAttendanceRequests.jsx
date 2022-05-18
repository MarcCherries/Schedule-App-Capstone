import React, { useEffect } from 'react';
import Request from '../Request/Request';

const DisplayAttendanceRequests = (props) => {



    return ( 
    <div>
        {props.event && props.event.map((item)=>{
            return(
                <div>
               
             <Request declineEvent={props.declineEvent}eventId={props.eventId}acceptEvent={props.acceptEvent}item={item} toggleReq={props.toggleReq}event={props.event}/>
                    
                </div>
            )
        })}
    <div>
  
    </div>
    </div> );
}
 
export default DisplayAttendanceRequests;