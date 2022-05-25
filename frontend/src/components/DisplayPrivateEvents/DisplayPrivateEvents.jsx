import React, { useState } from 'react';
import "./DisplayPrivateEvents.css"
import {Link} from 'react-router-dom'
import Ticket from '../../components/Ticket/Ticket'
import Countdown from 'react-countdown'

const DisplayPrivateEvents = (props) => {
    console.log(props.events)
 
    
    return ( 

        <div>
    <div className='display-events-container'>
    <h3>Private Events</h3>
        {props.events && props.events.map((event)=>{
            return(
                      
                <div className='event-ticket-container'>
                   
                <Link className='Link'onClick={()=>props.setEvent(event)}to={`/PrivateEventPage/${event.id}`}>
         <Ticket countdownEvent={props.countdownEvent}event={event} />
       
                </Link>
                </div>
             

            )
        })}
    </div>
    </div>
     );
}
 
export default DisplayPrivateEvents;