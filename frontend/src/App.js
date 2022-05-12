// General Imports
import { Routes, Route } from "react-router-dom";
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

function handleClick(){
  let thisUser = currentUser && users.filter((item)=>{
    console.log(item.username)
    console.log(currentUser)
      if (item.username == currentUser.username){
      return true
      }}
  
    )
    setCurrentUser(thisUser)
    console.log(thisUser)
   
}

  useEffect(()=>{
    getEvents();
    getComments();
    getLocations();
    getReplies();
    getUsers();
    fetchLocation();
    getFriends();
    // fetchMap();

  
  },[token]
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
              <HomePage imageURL={imageURL} setImageURL={setImageURL} events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} locations={locations} newLocation={newLocation} friends={friends} setFriends={setFriends}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/EventPage/:eventId"
          element={
            <PrivateRoute>
              <ViewEventPage  replies={replies} setReplies={setReplies} getComments={getComments} events={events} event={event} setEvent={setEvent} setCurrentUser={setCurrentUser} comments={comments} setComments={setComments}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/CreateLocation"
          element={
            <PrivateRoute>
              <CreateLocationPage events={events} event={event} setEvent={setEvent} location={location} setLocation={setLocation}setNewLocation={setNewLocation} newLocation={newLocation} createLocation={createLocation}/>
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
