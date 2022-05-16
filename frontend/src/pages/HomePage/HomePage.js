import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import DisplayEvents from "../../components/DisplayEvents/DisplayEvents";
import AddEvent from "../../components/AddEvent/AddEvent";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import './HomePage.css'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import DisplayFriendRequests from '../../components/DisplayFriendRequests/DisplayFriendRequests'
import DisplayAttendanceRequests from "../../components/DisplayAttendanceRequests/DisplayAttendanceRequests";


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [newEvents, setNewEvents] = useState()
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
 



 async function buildFriendsList(){
 
   let response = await axios.post(`http://127.0.0.1:8000/api/friends/?id=${user.id}`,{cancelToken: source.token,})
 }

//  function checkFriendsList(){
  
//   let friendsList = props.friends && props.friends.filter((item)=>{
//     if (item.user == user.id){
//       return true
//     }
  
//   })
  
//   if (friendsList && !friendsList[0]){
//     buildFriendsList()
//   }
// }
useEffect(() => {
 
  props.getLocations()
  return ()=>{
  props.source.cancel("Request Aborted!")
  }

},[props.trigger] );


  // useEffect(() => {
 
  //   checkFriendsList();
  
  // }, []);


  
  return (
    
    <div >
      <div className="homepage-container">
      <div className="homepage-headline">
      <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="body-container">
        <div className="left-col">
      <div className="pic-create-event-col">
        <Link to={`/ViewProfile/${user.id}` } >
        {/* <img className="profile-pic" width="250" height="300" src={require(props.currentUser && props.currentUser.user_photo.url)}></img> */}
        </Link>
        <div className="display-friends"></div>
        </div>
    
      
     
        
        <div className="add-event">
        <Dropdown locations={props.locations} addLocation={props.addLocation} setAddLocation={props.setAddLocation}/>
      
        <AddEvent createEvent={props.createEvent} events={props.events}setEvent={props.setEvent} setAddLocation={props.setAddLocation} addLocation={props.addLocation} newLocation={props.newLocation}/>
        <Link to={'/CreateLocation'}><button>Create Location</button></Link>
        </div>
        </div>

        <div className="display-events">
        <DisplayEvents events={props.events} event={props.event} setEvent={props.setEvent} />
        {props.friends.pending &&
    <DisplayFriendRequests friends={props.friends} />
 
        }
           {/* <DisplayAttendanceRequests events={newEvents}/> */}
        </div>
        </div>
        
        </div>
    </div>
  );
};

export default HomePage;
