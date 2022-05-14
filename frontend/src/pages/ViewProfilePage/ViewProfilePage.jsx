import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./ViewProfilePage.css"
import DisplayEvents from '../../components/DisplayEvents/DisplayEvents';
import DisplayFriends from '../../components/DisplayFriends/DisplayFriends';
import AddFriend from '../../components/AddFriend/AddFriend';
import { Link } from 'react-router-dom';


const ViewProfilePage = (props) => {
    const [userEvent, setUserEvent] = useState()
    const [user, token]= useAuth()
    const {userId} = useParams()
   
    const [buddies, setBuddies] = useState({
        "id": 1,
        "friends": [
            {
                "id": 1,
                "password": "pbkdf2_sha256$320000$7K8moqbzsXulrglhLMGpAw$h7cshhYoZ9JkvOw8reraFcfDJsC0+73Ypt9Z4khHUnA=",
                "last_login": "2022-05-04T00:33:11.711992Z",
                "is_superuser": true,
                "username": "chris",
                "first_name": "",
                "last_name": "",
                "email": "chrisc1983@gmail.com",
                "is_staff": true,
                "is_active": true,
                "date_joined": "2022-05-04T00:15:48.748944Z",
                "user_bio": "None",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "None",
                
            },
          
        ],
        "user": {
            "id": 3,
       
        }
    })
    
  
 

  useEffect(()=>{
      const fetchfriends = async () => {
          try {
              let response = await axios.get(`http://127.0.0.1:8000/api/friends?id=${userId}`)
        
              setBuddies(response.data)
              
          } catch (error) {
              console.log(error.message)
          }
      }
      props.fetchRecentEvents(userId)
      fetchfriends()
  },[props.currentUser])




   
    return ( 
        <div>
          
            <h1 className='profile-head'>Profile Page for {props.currentUser && props.currentUser.username}!</h1>
            <div>
            <div className='top-row-container'>
                <div className='left-side-top'>
                <div className='bio-container'>
                    <div className='left-image-buddy'>
                    <div className='left-image-info'>
            <img className='profile-image' height="300" width="225" src={require("../HomePage/Images/default.jpg")}></img>
           
            <h5>Name: {props.currentUser && props.currentUser.first_name}</h5>
            <p>About Me: {props.currentUser && props.currentUser.user_bio}</p>
            </div>
            <div className='reputation'>
                <h3>Reputation Score:</h3>
                <h1>{props.currentUser && props.currentUser.user_reputation}</h1>
                <AddFriend handleClickFriend={props.handleClickFriend}currentUser={props.currentUser} userId={userId}/>

            </div>
            <DisplayFriends setCurrentUser={props.setCurrentUser} buddies={buddies}/>
                </div>
                </div>
                </div>
                <div className='joyn-up'>
                <h4 className='joyn'>Recent JoynUps</h4>
                <DisplayEvents setEvent={props.setEvent} events={props.recentEvents}/>
                </div>
            </div>
         
            </div>
        </div>
     );
}
 
export default ViewProfilePage;