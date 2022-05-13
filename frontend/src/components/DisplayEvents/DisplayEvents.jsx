import React, { useState } from 'react';
import "./DisplayEvents.css"
import {Link} from 'react-router-dom'

const DisplayEvents = (props) => {
    console.log(props.events)
    
    return ( 

    <div>
        {props.events && props.events.map((event)=>{
            return(
               
                <Link className='Link' onClick={()=>props.setEvent(event)}to={`/EventPage/${event.id}`}>
                <div className='event-entry'>
                    <h3 className='event-headline'>{event.event_type}</h3>
                    <p>{event.event_description}</p><br></br>
                       <p> {event.event_specialInstructions} </p>
                        
                        
                            
                            </div>
                </Link>
               

            )
        })}
    </div>
     );
}
 
export default DisplayEvents;