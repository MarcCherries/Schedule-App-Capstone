import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./ViewProfilePage.css"
import DisplayEvents from '../../components/DisplayEvents/DisplayEvents';
import DisplayFriends from '../../components/DisplayFriends/DisplayFriends';
import AddFriend from '../../components/AddFriend/AddFriend';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Link } from 'react-router-dom';


const ViewProfilePage = (props) => {
    const [user, token] = useAuth()
    const {userId} = useParams()
   
   



 useEffect(()=>{
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
          
            <h1 className='profile-head'>Profile Page for {props.currentUser && props.currentUser.username}!</h1>
            <div>
            <div className='top-row-container'>
                <div className='left-side-top'>
                <div className='bio-container'>
                    <div className='left-image-buddy'>
                    <div className='left-image-info'>
                    <img className="profile-pic" width="250" height="300" src={`${props.currentUser && props.currentUser.user_photo}`}></img>
           
            <h5>Name: {props.currentUser && props.currentUser.first_name}</h5>
            <p>About Me: {props.currentUser && props.currentUser.user_bio}</p>
            </div>
            <div className='reputation'>
                <h4>Reputation Score:</h4>
                <h2>{props.currentUser && props.currentUser.user_reputation}</h2>
                <AddFriend handleClickFriend={props.handleClickFriend}currentUser={props.currentUser} userId={userId}/>
                </div>
      
            {props.friends &&
            <DisplayFriends setCurrentUser={props.setCurrentUser} buddies={props.friends}/>
}
                </div>
                </div>
           
                <div className='snapshot'>
                {props.jumbotronEvent &&
                    <Jumbotron event={props.jumbotronEvent}/>
                }
                </div>

                

                <div className='joyn-up'>
                 
                <DisplayEvents  getJumbotronEvent={props.getJumbotronEvent} setEvent={props.setEvent} events={props.recentEvents}/>
                </div>
            </div>
            </div>
         
            </div>
        </div>
     );
}
 
export default ViewProfilePage;