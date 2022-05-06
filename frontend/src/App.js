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




function App() {

  const [userId, setUserId] = useState()
  const [comments, setComments] = useState()
  const [replies, setReplies] = useState()
  const [locations, setLocations] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [map, setMap] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [users, setUsers] = useState()


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

  useEffect(()=>{
    getEvents();
    getComments();
    getLocations();
    getReplies();
    getUsers();
    // fetchMap();

  
  },[]
  )
  console.log(map)
  console.log(events)
  console.log(locations)
  console.log(comments)
  console.log(replies)
  console.log(event)
  console.log(users)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </PrivateRoute>
          }
        />
        <Route
          path="/EventPage/:eventId"
          element={
            <PrivateRoute>
              <ViewEventPage events={events} event={event} setEvent={setEvent}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/CreateLocation"
          element={
            <PrivateRoute>
              <CreateLocationPage events={events} event={event} setEvent={setEvent}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/ViewProfile/:userId"
          element={
            <PrivateRoute>
              <ViewProfilePage events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
