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
import Modal from '../../components/Modal/Modal'

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
                <Modal handleClick={props.closeModal} eventTrigger={props.friendSent} title="Friend Request" message="Your Friend Request Has Been Sent!"/>
                <Modal handleClick={props.closeModal} eventTrigger={props.friendDenied} title="Friend Request" message="Sorry, Your Request Has Been Declined"/>
                <Modal handleClick={props.closeModal} eventTrigger={props.friendPending} title="Friend Request" message="Your Request is Still Pending!"/>
         
                  {props.friendStatus === "not" && props.currentUser && props.currentUser.username != user.username ?
                  <div className='profile-restrict-container'>
                   <p>{`Sorry, You Must Be Friends With ${props.currentUser && props.currentUser.username} To See His/Her/Their/Xim/Xed/ Profile`}</p> 
                   <img className='profile-image' width='300' height='200' src={`${props.currentUser && props.currentUser.user_photo}`}></img>
                   <AddFriend handleClickFriend={props.handleClickFriend}currentUser={props.currentUser} userId={userId}/>
                   </div>
                  
             : (  
           <ViewProfileAllow   userId={userId}friendReset={props.friendReset}friendStatus={props.friendStatus} checkFriendStatus={props.checkFriendStatus}getFriendsProfile={props.getFriendsProfile} jumbotronEvent={props.jumbotronEvent} getJumbotronEvent={props.getJumbotronEvent}friends={props.friends} source={props.source} fetchCurrentUser={props.fetchCurrentUser}fetchRecentEvents={props.fetchRecentEvents}handleClickFriend={props.handleClickFriend} recentEvents={props.recentEvents} event={props.event} setEvent={props.setEvent} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} handleClick={props.handleClick} />
             )}
      
        </div>
     );
}
 
export default ViewProfilePage;