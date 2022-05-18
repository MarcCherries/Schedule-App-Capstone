// General Imports
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ViewEventPage from "./pages/ViewEventPage/ViewEventPage";
import ViewProfilePage from "./pages/ViewProfilePage/ViewProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import { useEffect, useState } from "react";

import CreateLocationPage from "./pages/CreateLocationPage/CreateLocationPage";
import useAuth from "./hooks/useAuth";






function App() {
  const [user, token] = useAuth()
  const [showConfirm, setShowConfirm] = useState()
  const [userId, setUserId] = useState()
  const [comments, setComments] = useState()
  const [replies, setReplies] = useState()
  const [locations, setLocations] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [map, setMap] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [users, setUsers] = useState()
  const [location, setLocation] = useState()
  const [newLocation, setNewLocation] = useState()
  const [image, setImage] = useState()
  const [imageURL, setImageURL] = useState()
  const [friends, setFriends] = useState()
  const [trigger, setTrigger] = useState(true)
  const [trigger1, setTrigger1] = useState(true)
  const [addLocation, setAddLocation1] = useState()
  const [currentComment, setCurrentComment] = useState()
  const [recentEvents, setRecentEvents] = useState()
  const [newEvents, setNewEvents] = useState()
  const [eventNew, setEventNew] = useState()
  const [bump, setBump] = useState()
  const [toggleReq, setToggleReq] = useState(true)


  const[commentReplies, setCommentReplies] = useState()
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

function setAddLocation(item){
  setAddLocation1(item)
}
  
//all of my "get all" functions
  async function getEvents(){

  let response = await axios.get('http://127.0.0.1:8000/api/events/', {cancelToken: source.token,})
  setEvents(response.data)
  }
  async function getLocations(){
    let response = await axios.get('http://127.0.0.1:8000/api/locations/' , {cancelToken: source.token,})
    setLocations(response.data)
  }
  async function getComments(){
    let response = await axios.get('http://127.0.0.1:8000/api/comments/' , {cancelToken: source.token,})
    setComments(response.data)
  }
  async function getReplies(){
    let response = await axios.get('http://127.0.0.1:8000/api/replies/' , {cancelToken: source.token,})
    setReplies(response.data)
  }
  async function getUsers(){
    let response = await axios.get('http://127.0.0.1:8000/api/auth/users' , {cancelToken: source.token,})
    setUsers(response.data)
  }
  async function getFriends(){
    let response = await axios.get(`http://127.0.0.1:8000/api/friends/?id=${user.id}` , {cancelToken: source.token,})
    setFriends(response.data)
    console.log(friends)
    console.log(user.id)
  }


    
  //all of my 'post new' functions

    
  async function createLocation(newLocation){
    let response = await axios.post('http://127.0.0.1:8000/api/locations/', newLocation , {cancelToken: source.token,})
    setLocations(response.data)
    }
  async function createComment(newComment){
    let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment , {cancelToken: source.token,})
    setComments(response.data)
    }
  async function createReply(newReply){
    let response = await axios.post('http://127.0.0.1:8000/api/replies/', newReply , {cancelToken: source.token,})
    setReplies(response.data)
    }

  //all of my "update" functions
  async function updateEvent(id){
    let response = await axios.put(`http://127.0.0.1:8000/api/events/${id}` , {cancelToken: source.token,})
    setEvents(response.data)
    }
  async function updateLocation(id){
    let response = await axios.put(`http://127.0.0.1:8000/api/locations/${id}` , {cancelToken: source.token,})
    setLocations(response.data)
    }

 

  //3rd party api calls start here

  async function fetchLocation(){
    try {
        let response = await axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAsgBy4_ICzUg3Qg6hSHmqRq-fRqFrzJXQ' , {cancelToken: source.token,})
        setLocation(response.data)
    } catch (error) {
        console.log(error.message)
    }
 
}
async function createEvent(formData){
 
  formData.location_id=addLocation.id
  let response = await axios.post('http://127.0.0.1:8000/api/events/', formData , {cancelToken: source.token,})
  let newEvent = [response.data, ...events]
  setEvents(newEvent)
  }

async function getEvent(eventId){
  let response = await axios.get(`http://127.0.0.1:8000/api/events/${eventId}`, {cancelToken: source.token,})
  setEvent(response.data)
}
 
function setUser(){
  let thisUser = user && users.filter((item)=>{
    console.log(item.username)
  
    if (item.username == user.username){
    return true
    }
    
  }
    
  )
  setCurrentUser(thisUser)
}
console.log(currentUser)




function handleClick(){
  let thisUser = currentUser && users.filter((item)=>{
  
      if (item.username == currentUser.username){
      return true
      }}
  
    )
    setCurrentUser(thisUser)
  
   
}
useEffect(()=>{

  getLocations();

  return ()=>{
    source.cancel("Request Aborted!")
  }

},[trigger]

)
useEffect(()=>{

  getEvents();
  getComments();
  getLocations();
  getReplies();
  getUsers();
  fetchLocation();
  getFriends();


  return ()=>{
    source.cancel("Request Aborted!")
  }
},[user, userId]

)




  // useEffect(()=>{
  //   setUser()
  // },[token])
  console.log(map)
  console.log(events)
  console.log(location)
  console.log(comments)
  console.log(replies)
  console.log(event)
  console.log(users)
  console.log(currentUser)
  console.log(newLocation)
  console.log(friends)
  console.log(user)

     const [eventReq, setEventReq]  = useState()

//     useEffect(()=>{
// let newEventReq = props.events && props.events.filter((event)=>{
//     if (event.id == props.eventId)
//     return true
// })
// setEventReq(newEventReq)
//     },[])



  async function acceptEvent(eventId, userId){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/accept/${eventId}?id=${userId}`)
    setEvent(response.data)
    setToggleReq(false)
    console.log(response.data)
  
  }
  async function declineEvent(eventId, userId){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/decline/${eventId}?id=${userId}`)
    setEvent(response.data)
    setToggleReq(false)
    console.log(response.data)
  
  }



  function checkEvents (){
    let eventRequests = events && events.filter((event)=>{
     
        if (event.user[0] && event.user[0].id == user.id){
         
          return true
        }
  
    }
    )
    setNewEvents(eventRequests)
  }
  console.log(newEvents)
  
  
  useEffect(()=>{
    checkEvents()
  },[event])
  

  async function joinEvent (eventId){
    
    let check = await axios.get(`http://127.0.0.1:8000/api/events/${eventId}`)
    let userList = check.data.user && check.data.user.map((item)=>{
        return item.id
    } 
      )
    
    let deniedList = check.data.denied && check.data.denied.map((item)=>{
        return item.id
    } 
      )
    
   
   
 
   
    if(!check.data.user[0]){
    
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/${eventId}?id=${user.id}`, {cancelToken: source.token,})
    setShowConfirm(true)
    setEvent(response.data)
 
    }
    else if (userList.includes(user.id)){
      alert("You are already signed up for this event!")
    }
    else if(deniedList.includes(user.id)){
      alert("Sorry, this event is closed!")

    }
    else{
      let response = await axios.patch(`http://127.0.0.1:8000/api/events/pending/${eventId}?id=${user.id}`)
      setEvent(response.data)
    }
  }


  async function fetchCurrentUser(userId) {
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/auth/users/${userId}`,{cancelToken: source.token,})
  
        setCurrentUser(response.data)
        
    } catch (error) {
        console.log(error.message)
    }




return ()=>{
source.cancel("Request Aborted!")
}
  }

async function fetchRecentEvents(userId){
    let response = await axios.get(`http://127.0.0.1:8000/api/events/user?id=${userId}`, {cancelToken: source.token,})
    setRecentEvents(response.data)
}
  async function handleClickFriend(userId){
    try {
        await axios.patch(`http://127.0.0.1:8000/api/friends/pending/?id=${user.id}&pk=${userId}`, {cancelToken: source.token,})
        

    } catch (error) {
        console.log(error.message)
    }
}
  async function handleClickFriendDeny(userId){
   
    try {
        let response = await axios.patch(`http://127.0.0.1:8000/api/friends/decline/?id=${user.id}&pk=${userId}`, {cancelToken: source.token,})
        setFriends(response.data)


    } catch (error) {
        console.log(error.message)
    }
}
  async function handleClickFriendAccept(userId){
    try {
        
        let response =await axios.patch(`http://127.0.0.1:8000/api/friends/?id=${user.id}&pk=${userId}`, {cancelToken: source.token,})
        setFriends(response.data)

    } catch (error) {
        console.log(error.message)
    }
}
  return (
    <div>
      <Navbar />
      <Routes>
      {friends && 
        <Route
          path="/"
          element={
            <PrivateRoute>
            
              <HomePage handleClickFriendAccept={handleClickFriendAccept} handleClickFriendDeny={handleClickFriendDeny}newEvents={newEvents}source={source} addLocation={addLocation} setAddLocation={setAddLocation}createEvent={createEvent}trigger1={trigger1} trigger={trigger} setTrigger1={setTrigger1} imageURL={imageURL} setImageURL={setImageURL} events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} locations={locations} newLocation={newLocation} friends={friends} setFriends={setFriends} setLocations={setLocations} getLocations={getLocations} />
            </PrivateRoute>
          }
        />
        }
        {events && 
        <Route
          path="/EventPage/:eventId"
          element={
            <PrivateRoute>
              <ViewEventPage  declineEvent={declineEvent}toggleReq={toggleReq}eventNew={eventNew} acceptEvent={acceptEvent} newEvents={newEvents}getComments={getComments}source={source} getEvent={getEvent} showConfirm={showConfirm}joinEvent={joinEvent} setCurrentComment={setCurrentComment} replies={replies} setReplies={setReplies}  events={events} event={event} setEvent={setEvent} setCurrentUser={setCurrentUser} comments={comments} setComments={setComments} commentReplies={commentReplies} setCommentReplies={setCommentReplies}/>
            </PrivateRoute>
          }
        />
}
        <Route
          path="/CreateLocation"
          element={
            <PrivateRoute>
              <CreateLocationPage trigger={trigger} setTrigger={setTrigger} getLocations={getLocations} events={events} event={event} setEvent={setEvent} location={location} setLocation={setLocation}setNewLocation={setNewLocation} newLocation={newLocation} createLocation={createLocation}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/ViewProfile/:userId"
          element={
            <PrivateRoute>
              <ViewProfilePage source={source} fetchCurrentUser={fetchCurrentUser}fetchRecentEvents={fetchRecentEvents}handleClickFriend={handleClickFriend} recentEvents={recentEvents} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} handleClick={handleClick} userId={userId} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage image={image} setImage={setImage} imageURL={imageURL} setImageURL={setImageURL} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
    </div>
  );
}

export default App;

