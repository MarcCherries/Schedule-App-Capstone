import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown'

import './Ticket.css'

    
const Ticket = (props) => {
    const [hideCount, setHideCount] = useState(false)
    
    return ( <div className='join-button-container'>
                    <div className='join-button-ticket' >
              <div onPointerOver={()=>setHideCount(true)} onPointerLeave={()=>setHideCount(false)} className='join-info-ticket' >
                  <h4>Event Type: {props.event.event_type} </h4>
                  <h4>Experience Level:{props.event.experience_level} </h4>
                  <h4>Date/Time: {props.event.date}@{props.event.time}</h4>
                  </div>
                  {/* {hideCount &&
              <Countdown date={props.event.date}/>
                  } */}
                </div>
           


    </div> );
}
 
export default Ticket;