import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayAttendees from '../../components/DisplayAttendees/DisplayAttendees';
import './ViewEventPage.css'
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import axios from 'axios'
import useAuth from '../../hooks/useAuth.js'



const ViewEventPage = (props) => {
    const {eventId} = useParams ()
    const [user, token] = useAuth()
    const [eventComments, setEventComments] = useState()
    console.log(eventId)
    console.log(props.event)

    async function joinEvent (){
    
      let response = await axios.patch(`http://127.0.0.1:8000/api/events/${eventId}?id=${user.id}`)
    }

    return ( 
     
        <div>
            <div className='join-button' >
              <div className='join-info'>
                  <h4>Event Type: {props.event.event_type} </h4>
                  <h4>Experience Level:{props.event.experience_level} </h4>
                  <h4>Date/Time: {props.event.date}@{props.event.time}</h4>
                  </div>

                <button onClick={joinEvent}>Joyn Event</button>
                </div>
          <div className='event-page-container'>
    
            <div className='left-col-container'>
            <div className='left-col-event'>
            <div className='leader-container'>
              <h1>Event Leader: </h1>
              <p>{props.event.user[0] && props.event.user[0].username}</p>

              <img width="150" height="200" src={require("../HomePage/Images/default.jpg")}></img>
  
            </div>

            <div className='display-attendees'>
              <h4>Confirmed Attendees: </h4>
              <DisplayAttendees  event={props.event} setCurrentUser={props.setCurrentUser} />
              </div>
              </div>
              <div className='display-comments'>
                <DisplayComments replies={props.replies} setReplies={props.setReplies} eventComments={eventComments} comments={props.comments} setEventComments={setEventComments} eventId={eventId} setComments={props.setComments}/>
              </div>
              </div>
           

          
            <div className="display-attendees-map">
              <h3>Location: {props.event && props.event.location.location_name}</h3>
      <iframe width='350' height='400' src={`https://maps.google.com/maps?q=${props.event && props.event.location.latitude},${props.event && props.event.location.longitude}&hl=eng&z=14&amp;output=embed`}>

      </iframe>
      <div className='location-table'>
        <h5>Location Notes:</h5>
        <p className='notes'>{props.event && props.event.location.location_info}</p>
        <h5>Event Notes:</h5>
        <p className='notes'>{props.event && props.event.event_specialInstructions}</p>
      </div>
      </div>
    
      </div>
        </div>
     
     
      
     );
}
 
export default ViewEventPage;