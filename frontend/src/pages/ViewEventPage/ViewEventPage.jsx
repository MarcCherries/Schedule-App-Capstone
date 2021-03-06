import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import DisplayAttendees from '../../components/DisplayAttendees/DisplayAttendees';
import './ViewEventPage.css'
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import axios from 'axios'
import useAuth from '../../hooks/useAuth.js'
import DisplayAttendanceRequests from '../../components/DisplayAttendanceRequests/DisplayAttendanceRequests';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown'
import Modal from '../../components/Modal/Modal'
import moment from 'moment'


const ViewEventPage = (props) => {
    const {eventId} = useParams ()
    const [user, token]= useAuth()
    const [eventComments, setEventComments] = useState()
    const month = moment(props.event.date).format('MMMM Do YYYY')
    

    function fetchEventComments(){
      let newComments = props.comments && props.comments.filter((comment)=>{
      let strEvent = comment.event.id
      
      let newStr = strEvent.toString()
    
          if (newStr == eventId){
            
              return true
          }
        
      })
      setEventComments(newComments)
  }
  
  

 console.log(props.event.event_leader.username)
      
    useEffect(()=>{
      fetchEventComments()
      props.getEventReq(eventId)
      props.getEvent(eventId)
   
     
      return ()=>{
      props.source.cancel("Request Aborted!")
      
      }
      
      },[eventId])
  

    return ( 
     
        <div>
          <Modal handleClick={props.closeModal} title="Event Request" message={`Your Request Has Been Sent to the Event Leader (${props.event.event_leader.username})`}  eventTrigger={props.eventSent}/>
          <Modal handleClick={props.closeModal} title="Event Request" message="You Are Already Signed Up For This Event!" eventTrigger={props.eventAlready}/>
          <Modal handleClick={props.closeModal} title="Event Request" message="Sorry, This Event is Closed!" eventTrigger={props.eventDenied} />
          <div className='join-count-cont'>
            <h3 className='event-header'>{props.event && props.event.event_type} @ {props.event && props.event.location.location_name}</h3>
            <div className='join-button' >
              <div className='join-info'>
                  <h4>Info: {props.event && props.event.event_specialInstructions} </h4>
                  <h4>Experience Level: {props.event && props.event.experience_level} </h4>
                  <h4>Date/Time: {props.event && month} @ {props.event.time}</h4>
                  </div>
              <div>
                <button onClick={()=>props.joinEvent(eventId)}>Joyn Event</button>
                </div>
                </div>
                         <div className='countdown'>
                           <span> Event Begins In:</span> <Countdown date={props.event && props.event.date}/></div>
                         </div>
          <div className='event-page-container'>
            <div className='left-col-container'>
            <div className='left-col-event'>
            <div className='leader-container'>
              <h1>Event Leader: </h1>
              <p>{props.event  && props.event.event_leader.username}</p>

              <img className="profile-pic" width="250" height="300" src={`${props.event && props.event.event_leader.user_photo}`}></img>  
            </div>
      
            {props.eventReq &&
            <DisplayAttendanceRequests declineEvent={props.declineEvent}toggleReq={props.toggleReq}eventId={eventId} acceptEvent={props.acceptEvent}event={props.eventReq}/>
          }
            <div className='display-attendees'>
              <h4>Confirmed Attendees: </h4>
              <DisplayAttendees  event={props.event} setCurrentUser={props.setCurrentUser} />
              </div>
              </div>
          
              <div className='display-comments'>
              {eventComments &&
                <DisplayComments   showHide={props.showHide}addReply={props.addReply}addComment={props.addComment} hideShowReply={props.hideShowReply} handleClickReply={props.handleClickReply} handleClickShow={props.handleClickShow} handleShowInput={props.handleShowInput} fetchEventComments={props.fetchEventComments} disable={props.disable}getComments={props.getComments}setCurrentComment={props.setCurrentComment} getCommentReplies={props.getCommentReplies}  commentReplies={props.commentReplies} setCommentReplies={props.setCommentReplies}replies={props.replies} setReplies={props.setReplies} eventComments={eventComments} comments={props.comments} setEventComments={setEventComments} eventId={eventId} setComments={props.setComments}  handleClickAdd={props.handleClickAdd}handleClickShowComment={props.handleClickShowComment}/>
              }
              </div>

              </div>
           

          
            <div className="display-attendees-map">
              {/* <h3>Location: {props.event && props.event.location.location_name}</h3> */}
      {/* <iframe width='350' height='400' src={`https://maps.google.com/maps?q=${props.event && props.event.location.latitude},${props.event && props.event.location.longitude}&hl=eng&z=14&amp;output=embed`}> */}
{/* 
      </iframe> */}
      <div className='location-table'>
        <h5 className='notes-other'>Location:</h5>
        <p className='notes'>{props.event && props.event.location.location_name}</p>
        <p className='notes'>{props.event && props.event.location.location_info}</p>
        <h5 className='notes-other'>Event Notes:</h5>
        <p className='notes'>{props.event && props.event.event_specialInstructions}</p>
        <Link to={`/ViewLocation/${props.event && props.event.location.id}`}><p>Location Page</p></Link>
      </div>
      </div>
    
      </div>
        </div>
     
     
      
     );
}
 
export default ViewEventPage;