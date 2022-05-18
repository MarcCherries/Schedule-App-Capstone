import React, { useState, useEffect } from 'react';

import './Ticket.css'
    
const Ticket = (props) => {
    const [hideShow, setHideShow] = useState('hide')
    return ( <div className='join-button-container'>
                    <div className='join-button-ticket' >
              <div className='join-info-ticket' onPointerOver={()=>setHideShow('show-event-link')} onPointerOut={()=>setHideShow('hide-event-link')}>
                  <h4>Event Type: {props.event.event_type} </h4>
                  <h4>Experience Level:{props.event.experience_level} </h4>
                  <h4>Date/Time: {props.event.date}@{props.event.time}</h4>
                  </div>

 
                </div>
                <div className={`${hideShow}`}>Hello</div>


    </div> );
}
 
export default Ticket;