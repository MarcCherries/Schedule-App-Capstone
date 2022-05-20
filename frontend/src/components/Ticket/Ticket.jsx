import React, { useState, useEffect } from 'react';

import './Ticket.css'
    
const Ticket = (props) => {
    
    return ( <div className='join-button-container'>
                    <div className='join-button-ticket' >
              <div className='join-info-ticket' >
                  <h4>Event Type: {props.event.event_type} </h4>
                  <h4>Experience Level:{props.event.experience_level} </h4>
                  <h4>Date/Time: {props.event.date}@{props.event.time}</h4>
                  </div>

 
                </div>
           


    </div> );
}
 
export default Ticket;