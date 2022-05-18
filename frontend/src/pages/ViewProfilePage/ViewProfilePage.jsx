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
    const [user, token]= useAuth()
    const {userId} = useParams()
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
   



 useEffect(()=>{
     props.fetchCurrentUser(userId)
 }, [userId]) 
 

//   useEffect(()=>{
//       const fetchfriends = async () => {
//           try {
//               let response = await axios.get(`http://127.0.0.1:8000/api/friends?id=${userId}`,{cancelToken: source.token,})
        
//               setBuddies(response.data)
              
//           } catch (error) {
//               console.log(error.message)
//           }
//       }
   
//       fetchfriends()

//       return ()=>{
//       source.cancel("Request Aborted!")
//       }
//   },[props.currentUser])


  useEffect(()=>{
    props.fetchRecentEvents(userId)
    return ()=>{
        props.source.cancel("Request Aborted!")
        }


  }, [props.currentUser])




   
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
            {/* <DisplayFriends setCurrentUser={props.setCurrentUser} buddies={buddies}/> */}
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