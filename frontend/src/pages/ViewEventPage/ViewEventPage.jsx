import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewEventPage = (props) => {
    const {eventId} = useParams ()
    console.log(eventId)
    console.log(props.event)

    return ( 
     
        <div>
            {props.event &&
            <div>Event ID:<span>{" "}</span>
            {props.event.id}    
            </div>}
      <iframe width='400' height='600' src={`https://maps.google.com/maps?q=${props.event && props.event.location.latitude},${props.event && props.event.location.longitude}&hl=eng&z=14&amp;output=embed`}>

      </iframe>
        </div>
     
     
      
     );
}
 
export default ViewEventPage;