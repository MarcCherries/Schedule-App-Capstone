import React, { useState } from 'react';
import "./DisplayEvents.css"
import {Link} from 'react-router-dom'

const DisplayEvents = (props) => {
    
    return ( 

    <div>
        {props.events && props.events.map((event)=>{
            return(
                <Link onClick={()=>props.setEvent(event)}to={`/EventPage/${event.id}`}>
                <div className='event-entry'>
                    <h3>{event.event_type}</h3>
                    <body>{event.event_description}
                        {event.event_specialInstructions} 
                        {event.location.location_info} 
                        
                            </body>
                </div>
                </Link>

            )
        })}
    </div>
     );
}
 
export default DisplayEvents;