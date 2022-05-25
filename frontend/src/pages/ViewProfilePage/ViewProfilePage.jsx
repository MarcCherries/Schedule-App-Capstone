import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./ViewProfilePage.css"
import DisplayEvents from '../../components/DisplayEvents/DisplayEvents';
import DisplayFriends from '../../components/DisplayFriends/DisplayFriends';
import AddFriend from '../../components/AddFriend/AddFriend';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ViewProfileAllow from '../../components/ViewProfileAllow/ViewProfileAllow'
import { Link } from 'react-router-dom';


const ViewProfilePage = (props) => {
    const [user, token] = useAuth()
    const {userId} = useParams()
   
   



 useEffect(()=>{
     props.checkFriendStatus(userId)
     console.log(props.friendStatus)
     props.fetchCurrentUser(userId)
     props.getFriendsProfile(userId)
 }, [userId]) 
 




  useEffect(()=>{
    props.fetchRecentEvents(userId)
    return ()=>{
        props.source.cancel("Request Aborted!")
        }


  }, [userId])



   
    return ( 
        <div>
                  {props.friendStatus === "not" ? <p>Sorry, You Must Be Friends To See This Profile</p> 
             : (  
           <ViewProfileAllow   friendReset={props.friendReset}friendStatus={props.friendStatus} checkFriendStatus={props.checkFriendStatus}getFriendsProfile={props.getFriendsProfile} jumbotronEvent={props.jumbotronEvent} getJumbotronEvent={props.getJumbotronEvent}friends={props.friends} source={props.source} fetchCurrentUser={props.fetchCurrentUser}fetchRecentEvents={props.fetchRecentEvents}handleClickFriend={props.handleClickFriend} recentEvents={props.recentEvents} event={props.event} setEvent={props.setEvent} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} handleClick={props.handleClick} />
             )}
      
        </div>
     );
}
 
export default ViewProfilePage;