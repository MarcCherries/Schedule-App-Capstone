import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown'
import moment from 'moment'
import './Ticket.css'

    
const Ticket = (props) => {
    const [hideCount, setHideCount] = useState(false)
    const date = moment(props.event.date).format('MMMM Do YYYY')
   
  
    
    return ( <div className='join-button-container'>
                  
              <div onPointerOver={()=>setHideCount(true)} onPointerLeave={()=>setHideCount(false)} className='join-info-ticket' >
                  <h4>Event Type: {props.event.event_type} </h4>
                  <h4>Experience Level:{props.event.experience_level} </h4>
                  <h4>Date/Time: {date} @ {props.event.time}</h4>
                  </div>
                {hideCount && 
              <Countdown date={props.event.date}/>
                  
}
           


    </div> );
}
 
export default Ticket;