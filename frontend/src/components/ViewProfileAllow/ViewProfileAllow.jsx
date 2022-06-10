import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

import DisplayEvents from '../../components/DisplayEvents/DisplayEvents';
import DisplayFriends from '../../components/DisplayFriends/DisplayFriends';
import AddFriend from '../../components/AddFriend/AddFriend';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Link } from 'react-router-dom';


const ViewProfilePage = (props) => {
    return ( 
        <div>
          
            <h1 className='profile-head'>Profile Page for <a className='orange-link'>{props.currentUser && props.currentUser.username}!</a></h1>
            <div>
            <div className='top-row-container'>
                <div className='left-side-top'>
                <div className='bio-container'>
                    <div className='left-image-buddy'>
                    <div className='left-image-info'>
                    <img className="profile-pic" width="250" height="300" src={`${props.currentUser && props.currentUser.user_photo}`}></img>
           
            <h3 className='center-text'>{props.currentUser && props.currentUser.first_name}</h3>
            </div>
            <div className='reputation'>
                <h3>Reputation Score:</h3>
                <h2>{props.currentUser && props.currentUser.user_reputation}</h2>
                <h2 className='orange-header'>About Me:</h2> <p className='profile-bio'> {props.currentUser && props.currentUser.user_bio}</p>
                </div>
      
            {props.friends &&
            <DisplayFriends friendReset={props.friendReset}setCurrentUser={props.setCurrentUser} buddies={props.friends}/>
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