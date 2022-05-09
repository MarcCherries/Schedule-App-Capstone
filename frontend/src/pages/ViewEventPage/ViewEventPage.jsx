import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayAttendees from '../../components/DisplayAttendees/DisplayAttendees';
import './ViewEventPage.css'
import DisplayComments from '../../components/DisplayComments/DisplayComments';



const ViewEventPage = (props) => {
    const {eventId} = useParams ()
    console.log(eventId)
    console.log(props.event)

    return ( 
     
        <div>
            <div className='join-button' >
                <button >Joyn Event</button>
                </div>
          <div className='event-page-container'>
    
            <div className='left-col-container'>
            <div className='left-col'>
            <div className='leader-container'>
              <h1>Event Leader: </h1>
            
              <img width="150" height="200" src={require("../HomePage/Images/default.jpg")}></img>
              <p>{props.event && props.event.user[0].username}</p>
  
            </div>

            <div className='display-attendees'>
              <DisplayAttendees  event={props.event} setCurrentUser={props.setCurrentUser} />
              </div>
              </div>
              <div className='display-comments'>
                <DisplayComments comments={props.comments} setComments={props.setComments} eventId={eventId}/>
              </div>
              </div>
           

          
            <div className="display-attendees-map">
              <h3>{props.event && props.event.location.location_name}</h3>
      <iframe width='350' height='400' src={`https://maps.google.com/maps?q=${props.event && props.event.location.latitude},${props.event && props.event.location.longitude}&hl=eng&z=14&amp;output=embed`}>

      </iframe>
      <div className='location-table'>
        <h5>Location Notes:</h5>
        <p>{props.event && props.event.location.location_info}</p>
        <h5>Event Notes:</h5>
        <p>{props.event && props.event.location.location_info}</p>
      </div>
      </div>
    
      </div>
        </div>
     
     
      
     );
}
 
export default ViewEventPage;