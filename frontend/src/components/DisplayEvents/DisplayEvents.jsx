import React, { useState } from 'react';
import "./DisplayEvents.css"
import {Link} from 'react-router-dom'
import Ticket from '../../components/Ticket/Ticket'

const DisplayEvents = (props) => {
 
    
    return ( 

        <div>
    <div className='display-events-container'>
    <h3>Event Feed</h3>
        {props.events && props.events.map((event)=>{
            return(
                      
                <div className='event-ticket-container'>
                   
                <Link className='Link' onPointerOver={()=>props.getJumbotronEvent(event)}onClick={()=>props.setEvent(event)}to={`/EventPage/${event.id}`}>
         <Ticket event={event} />
                </Link>
                </div>
             

            )
        })}
    </div>
    </div>
     );
}
 
export default DisplayEvents;