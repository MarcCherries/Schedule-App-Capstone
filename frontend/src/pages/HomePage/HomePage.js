import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Countdown from 'react-countdown'
import axios from "axios";
import DisplayEvents from "../../components/DisplayEvents/DisplayEvents";
import AddEvent from "../../components/AddEvent/AddEvent";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import './HomePage.css'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import DisplayFriendRequests from '../../components/DisplayFriendRequests/DisplayFriendRequests'
import DisplayAttendanceRequests from "../../components/DisplayAttendanceRequests/DisplayAttendanceRequests";
import DisplayFriends from "../../components/DisplayFriends/DisplayFriends";
import DisplayPrivateEvents from "../../components/DisplayPrivateEvents/DisplayPrivateEvents";
import DisplayPrivateRequests from "../../components/DisplayPrivateRequests/DisplayPrivateRequests";


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
 
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
 


useEffect(() => {
  props.getPrivateEvents()
  props.getLocations()
  return ()=>{
  props.source.cancel("Request Aborted!")
  }

},[props.trigger] );


  useEffect(() => {
 
    props.buildFriendsList();
  
  }, [user]);



 
useEffect(()=>{
  props.getPrivateEventRequests()
},[user])



  
  return (
    
    <div >
      <div className="homepage-container">
      <div className="homepage-headline">
      <h1>Home Page for <Link to={`/ViewProfile/${user.id}`}>{user.username}!</Link></h1>
      </div>
      <div className="body-container">
      
      <div className="pic-create-event-col">
        <Link to={`/ViewProfile/${user.id}` } >
         </Link>
        <div className="display-friends">
        {props.friends.pending && props.friends.pending[0] &&
        <DisplayFriendRequests handleClickFriendAccept={props.handleClickFriendAccept} handleClickFriendDeny={props.handleClickFriendDeny}friends={props.friends}/>

}

          {props.friends.friends &&
          <DisplayFriends buddies={props.friends}/>
        
}
        </div>
        </div>
        <div className="private-container">
        {props.privateEventRequests && props.privateEventRequests[0]
 &&<div>
<h6 className="invite-header">You have <span className="green-request">({props.privateEventRequests.length}) new </span>Private Invites!</h6>
  <DisplayPrivateRequests acceptEvent={props.acceptEvent}declineEvent={props.declineEvent}event={props.privateEventRequests}/>
</div>
}
        <DisplayPrivateEvents countdownEvent={props.countdownEvent}getJumbotronEvent={props.getJumbotronEvent}getCountdown={props.getCountdown} events={props.privateEvents} event={props.event} setEvent={props.setEvent} />
    </div>
    
        <div className="add-event">
        <Link to={'/CreateLocation'}><button className="create-loc-button">New Location</button></Link>

        <h4 className='create-header'>Create New Event</h4>
        <div className="select-button">
        <Dropdown handleClickShowList={props.handleClickShowList}setShowList={props.setShowList} showList={props.showList}locations={props.locations} addLocation={props.addLocation} setAddLocation={props.setAddLocation}/>
        </div>
        <AddEvent handleClickPrivate={props.handleClickPrivate}isPrivate={props.isPrivate}handleLocationSubmit={props.handleLocationSubmit} createEvent={props.createEvent} events={props.events}setEvent={props.setEvent} setAddLocation={props.setAddLocation} addLocation={props.addLocation} />
      
        </div>
        
 
        <div className="display-events">
    
        <DisplayEvents countdownEvent={props.countdownEvent}getJumbotronEvent={props.getJumbotronEvent}getCountdown={props.getCountdown}events={props.events} event={props.event} setEvent={props.setEvent} />
       
        

        </div>
        </div>

        </div>
        
    </div>
  );
};

export default HomePage;
