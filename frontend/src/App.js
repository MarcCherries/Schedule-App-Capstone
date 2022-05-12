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
  const [addLocation, setAddLocation] = useState()
  const [currentComment, setCurrentComment] = useState()
  const {eventId} = useParams ()
  const[commentReplies, setCommentReplies] = useState([
    {
        "id": 24,
        "comment": {
            "id": 28,
            "comment_text": "Testing this new comment component",
            "user": 3,
            "event": 1
        },
        "user": {
            "id": 3,
            "password": "pbkdf2_sha256$320000$Z0T51YEk4HFz4NejhICXIh$gUfM0OaYDiDnPK+lZB6nRcKmrfzOkB0dI0OOkfzEN8U=",
            "last_login": null,
            "is_superuser": false,
            "username": "Jerry123",
            "first_name": "Jerry",
            "last_name": "Seinfeld",
            "email": "Jerry@seinfeld.com",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2022-05-04T15:36:40Z",
            "user_bio": "I dont wanna be a pirate!",
            "user_reputation": "50.0",
            "is_verified": false,
            "is_admin": false,
            "user_photo": "/media/images/Screenshot_1.png",
            "user_theme": "default",
            "groups": [],
            "user_permissions": []
        },
        "reply_text": "yoafjasdf"
    }
])

  
//all of my "get all" functions
  async function getEvents(){
    let response = await axios.get('http://127.0.0.1:8000/api/events/')
    setEvents(response.data)
  }
  async function getLocations(){
    let response = await axios.get('http://127.0.0.1:8000/api/locations/')
    setLocations(response.data)
  }
  async function getComments(){
    let response = await axios.get('http://127.0.0.1:8000/api/comments/')
    setComments(response.data)
  }
  async function getReplies(){
    let response = await axios.get('http://127.0.0.1:8000/api/replies/')
    setReplies(response.data)
  }
  async function getUsers(){
    let response = await axios.get('http://127.0.0.1:8000/api/auth/users')
    setUsers(response.data)
  }
  async function getFriends(){
    let response = await axios.get('http://127.0.0.1:8000/api/friends')
    setFriends(response.data)
  }


    
  //all of my 'post new' functions

    
  async function createLocation(newLocation){
    let response = await axios.post('http://127.0.0.1:8000/api/locations/', newLocation)
    setLocations(response.data)
    }
  async function createComment(newComment){
    let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment)
    setComments(response.data)
    }
  async function createReply(newReply){
    let response = await axios.post('http://127.0.0.1:8000/api/replies/', newReply)
    setReplies(response.data)
    }

  //all of my "update" functions
  async function updateEvent(id){
    let response = await axios.put(`http://127.0.0.1:8000/api/events/${id}`)
    setEvents(response.data)
    }
  async function updateLocation(id){
    let response = await axios.put(`http://127.0.0.1:8000/api/locations/${id}`)
    setLocations(response.data)
    }

 

  //3rd part api calls start here
  async function fetchMap (){
    try {
      let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAtIpDovZbehUwMIVCgY_r9bWHQNDtyU2U`)
      setMap(response.data)
      
    } catch (error) {
      console.log(error.message)      
    }
  }
  async function fetchLocation(){
    try {
        let response = await axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAsgBy4_ICzUg3Qg6hSHmqRq-fRqFrzJXQ')
        setLocation(response.data)
    } catch (error) {
        console.log(error.message)
    }
 
}
async function createEvent(formData){
 
  formData.location_id=addLocation.id
  let response = await axios.post('http://127.0.0.1:8000/api/events/', formData)
  let newEvent = [response.data, ...events]
  setEvents(newEvent)
  }

 



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



},[trigger]

)
useEffect(()=>{

  getEvents();



},[trigger1]

)


  useEffect(()=>{
    getEvents();
    getComments();
    getLocations();
    getReplies();
    getUsers();
    fetchLocation();
    getFriends();
    // fetchMap();

  
  },[]

  )

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



  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage  addLocation={addLocation} setAddLocation={setAddLocation}createEvent={createEvent}trigger1={trigger1} trigger={trigger} setTrigger1={setTrigger1} imageURL={imageURL} setImageURL={setImageURL} events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} locations={locations} newLocation={newLocation} friends={friends} setFriends={setFriends} getLocations={getLocations} />
            </PrivateRoute>
          }
        />
        <Route
          path="/EventPage/:eventId"
          element={
            <PrivateRoute>
              <ViewEventPage  setCurrentComment={setCurrentComment} replies={replies} setReplies={setReplies} getComments={getComments} events={events} event={event} setEvent={setEvent} setCurrentUser={setCurrentUser} comments={comments} setComments={setComments} commentReplies={commentReplies} setCommentReplies={setCommentReplies}/>
            </PrivateRoute>
          }
        />
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
              <ViewProfilePage events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} handleClick={handleClick} userId={userId} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage image={image} setImage={setImage} imageURL={imageURL} setImageURL={setImageURL} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//   {
//       "id": 67,
//       "comment": {
//           "id": 73,
//           "comment_text": "blah blah blah blah",
//           "user": 17,
//           "event": 1
//       },
//       "user": {
//           "id": 17,
//           "password": "pbkdf2_sha256$320000$m14uzJYBmkYETf30us0shk$07CCjLhq/K6wiLtRznaOFXGLyiP2SJBwBHvxRRGOvrc=",
//           "last_login": null,
//           "is_superuser": false,
//           "username": "blah",
//           "first_name": "blah",
//           "last_name": "blah",
//           "email": "blah@blah.com",
//           "is_staff": false,
//           "is_active": true,
//           "date_joined": "2022-05-12T17:32:14.338280Z",
//           "user_bio": "Once we’ve constructed our URL string, we access and parse the information using a mix of basic coding and web scrapes. Below is how I approached it but there are likely more efficient ways to pull it. You’ll need the requests, json, and time packages.",
//           "user_reputation": "50.0",
//           "is_verified": false,
//           "is_admin": false,
//           "user_photo": "none",
//           "user_theme": "default",
//           "groups": [],
//           "user_permissions": []
//       },
//       "reply_text": "blah blah blah"
//   }
// ]