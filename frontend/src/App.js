// General Imports
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ViewEventPage from "./pages/ViewEventPage/ViewEventPage";
import ViewProfilePage from "./pages/ViewProfilePage/ViewProfilePage";
import ViewLocationPage from "./pages/ViewLocationPage/ViewLocationPage";
import ViewPrivateEventPage from "./pages/ViewPrivateEventPage/ViewPrivateEventPage";
import InvitePage from "./pages/InvitePage/InvitePage"


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Countdown from 'react-countdown'

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import { useEffect, useState } from "react";

import CreateLocationPage from "./pages/CreateLocationPage/CreateLocationPage";
import useAuth from "./hooks/useAuth";






function App() {
  const [user, token] = useAuth()
  const [showConfirm, setShowConfirm] = useState()

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
  const [locationPage, setLocationPage] = useState()
  const [currentComment, setCurrentComment] = useState()
  const [recentEvents, setRecentEvents] = useState()
  const [newEvents, setNewEvents] = useState()
  const [jumbotronEvent, setJumbotronEvent] = useState()
  const [eventNew, setEventNew] = useState()
  const [countdownEvent, setCountdownEvent] = useState()
  const [toggleReq, setToggleReq] = useState(true)
  const [friendStatus, setFriendStatus] = useState("not")
  const [privateEvents, setPrivateEvents] = useState()
  const [userSearch, setUserSearch] = useState()
  const [inviteMessage, setInviteMessage] = useState(false)
  const [privateEventRequests, setPrivateEventRequests] = useState()
  const [locationEvents, setLocationEvents] = useState()
  const [disable, setDisable] = useState()
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  const [eventReq, setEventReq]  = useState()
  const [showList, setShowList] = useState('children-inactive');
  const [friendsProfile, setFriendsProfile] = useState()
  const [eventUser, setEventUser] = useState(false)
  const [invitees, setInvitees] = useState([])
  const [isPrivate, setIsPrivate] = useState("False")
  const [eventAlready, setEventAlready] = useState(false)
  const [eventSent, setEventSent] = useState(false)
  const [eventDenied, setEventDenied] = useState(false)
  const [friendSent, setFriendSent] = useState(false)
  const [friendDenied, setFriendDenied] = useState(false)
  const [friendPending, setFriendPending] = useState(false)
  const [locationCreated, setLocationCreated] = useState(false)
 
 function closeModal(){
   setEventAlready(false)
   setEventSent(false)
   setEventDenied(false)
   setFriendDenied(false)
   setFriendPending(false)
   setFriendSent(false)
   setLocationCreated(false)
 }


  function removeInvitee(friend){
    let newInvitees = invitees.pop(friend)
    setInvitees(newInvitees)
    
  }
  
  
    function handleClickInvite(friend){

      if(invitees){
        let newInvite = [friend, ...invitees]
        setInvitees(newInvite)
      }
   
     
      }
    function checkEvent(){
    
        if(event && event.event_leader.username === user.username){
            setEventUser(true)
        }
        else{
          setEventUser(false)
        }
    }

    useEffect(()=>{
        checkEvent()
    },[event])
 
    console.log(eventUser)
    console.log(event)

 



 
  


function getEventReq(eventId){


let newEventReq = newEvents && newEvents.filter((event)=>{

  if (event.id == eventId)
  return true
})

let pendingList = newEventReq && newEventReq[0] && newEventReq[0].pending

setEventReq(pendingList)

}





function checkFriendStatus(userId){

  let friendArray = friends && friends.friends && friends.friends.map((friend)=>{
  
 
    
    return (
      friend.id


    )

  } 

) 

let newFriendArray = friendArray && friendArray.filter((item)=>{
  console.log(userId)
  console.log(+userId)
  console.log(item)
  if (item === +userId || user.id === +userId){
    return true
  }

})

if (newFriendArray && newFriendArray[0]){
  
  setFriendStatus("friend")
}

else{
  setFriendStatus("not")
}
}
    

function setAddLocation(item){
  setAddLocation1(item)
}
  
//all of my "get all" functions
  async function getPrivateEventRequests(){
    let response = await axios.get(`http://127.0.0.1:8000/api/events/request?isPrivate=True&id=${user.id}`)
    setPrivateEventRequests(response.data)
  }

  async function getEvents(){

  let response = await axios.get('http://127.0.0.1:8000/api/events/public?isPrivate=False', {cancelToken: source.token,})
  setEvents(response.data)
  }
  async function getPrivateEvents(){

  let response = await axios.get(`http://127.0.0.1:8000/api/events/public?isPrivate=True&id=${user.id}`, {cancelToken: source.token,})
  setPrivateEvents(response.data)
  }
  async function getLocations(){
    let response = await axios.get('http://127.0.0.1:8000/api/locations/' , {cancelToken: source.token,})
    let sortedData = response.data.sort((a, b)=> a.location_name.localeCompare(b.location_name))
    setLocations(sortedData)
 
  }

 
  async function getLocationEvents(locationId){
    let response = await axios.get(`http://127.0.0.1:8000/api/events/location?id=${locationId}`)
    setLocationEvents(response.data)
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
 
  }
  async function getFriendsProfile(userId){
    let response = await axios.get(`http://127.0.0.1:8000/api/friends/?id=${userId}` , {cancelToken: source.token,})
    setFriendsProfile(response.data)
 
  }

  async function getLocationPage(locationId){
    let response = await axios.get(`http://127.0.0.1:8000/api/locations/${locationId}` , {cancelToken: source.token,})
    setLocationPage(response.data)
    console.log(locationId)
  }


    
  //all of my 'post new' functions

    
  async function createLocation(newLocation){
    let response = await axios.post('http://127.0.0.1:8000/api/locations/', newLocation , {cancelToken: source.token,})
    setLocations(response.data)
    await getLocations()
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
  async function updateEvent(id, newEvent){
    let response = await axios.put(`http://127.0.0.1:8000/api/events/${id}` , newEvent , {cancelToken: source.token,})
    setPrivateEvents(response.data)
    setInvitees([])
    }
  async function updateLocation(id){
    let response = await axios.put(`http://127.0.0.1:8000/api/locations/${id}` , {cancelToken: source.token,})
    setLocations(response.data)
    }

  async function assignUserEvent(user, event){
    
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/accept/${event.id}?id=${user.id}`)
    setEvent(response.data)
    
  }
  console.log(event)

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
  formData.event_leader_id=user.id
  formData.isPrivate=isPrivate
  
  let response = await axios.post('http://127.0.0.1:8000/api/events/', formData , {cancelToken: source.token,})
  
  if (formData.isPrivate === "False"){
    assignUserEvent(user, response.data)
  let newEvent = [response.data, ...events]
  setEvents(newEvent)
  }
  else {
    assignUserEvent(user, response.data)
  let newEvent = [response.data, ...privateEvents]
  setPrivateEvents(newEvent)
  }
}
console.log(privateEvents)


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



function handleClickShowList(){
    if (showList == 'children-inactive'){
        setShowList('children-active')
    }
    else {
        setShowList('children-inactive')
    }
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

  return ()=>{
    source.cancel("Request Aborted!")
  }

},[trigger]

)
useEffect(()=>{
  getPrivateEvents()
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
},[user]

)
console.log(privateEvents)


















  // useEffect(()=>{
  //   setUser()
  // },[token])
  // console.log(map)
  // console.log(events)
  // console.log(location)
  // console.log(comments)
  // console.log(replies)
  // console.log(event)
  // console.log(users)
  // console.log(currentUser)
  // console.log(newLocation)
  // console.log(friends)
  // console.log(user)

   

//     useEffect(()=>{
// let newEventReq = props.events && props.events.filter((event)=>{
//     if (event.id == props.eventId)
//     return true
// })
// setEventReq(newEventReq)
//     },[])

  

  async function acceptEvent(eventId, userId, item){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/accept/${eventId}?id=${userId}`)
    setEvent(response.data)
    setToggleReq(false)
    let privEventReq = privateEventRequests
    privEventReq.pop(item)
    setPrivateEventRequests()
    console.log(response.data)
  
  }

  async function acceptEventPrivate(eventId, userId){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/accept/${eventId}?id=${userId}`)
    let newPrivate = [response.data, ...privateEvents]   
    setPrivateEvents(newPrivate)
    
  
  }
  async function declineEvent(eventId, userId){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/decline/${eventId}?id=${userId}`)
    setEvent(response.data)
    setToggleReq(false)
    console.log(response.data)
  
  }


function submitUserSearch(e, searchTermUser){
     e.preventDefault()
     let userList = users && users.filter((user)=>{
       console.log(user.username)
       console.log(searchTermUser)
       if (user.username === searchTermUser){
         return true
       }
     })
     setUserSearch(userList)
    }
 

console.log(userSearch)

  




  function checkEvents (){
    let eventRequests = events && events.filter((event)=>{
     
        if (event.user[0] && event.user[0].id == user.id){
         
          return true
        }
  
    }
    )
    setNewEvents(eventRequests)
  }
 
  
  
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
    
   
   
if (event.event_leader.username ===  user.username){
  setEventAlready(true)
}
   
else if (userList.includes(user.id)){
      setEventAlready(true)
    }
else if(deniedList.includes(user.id)){
      setEventDenied(true)

    }
else{
      let response = await axios.patch(`http://127.0.0.1:8000/api/events/pending/${eventId}?id=${user.id}`)
      setEvent(response.data)
      setEventSent(true)
    }
  }

  async function submitPrivateRequest(eventId, userId){
    let response = await axios.patch(`http://127.0.0.1:8000/api/events/${eventId}?id=${userId}`, {cancelToken: source.token,})

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
    let response = await axios.get(`http://127.0.0.1:8000/api/events/public?isPrivate=False&id=${userId}`, {cancelToken: source.token,})
    setRecentEvents(response.data)
}
  async function handleClickFriend(userId){
    let deniedFriendsProfile = friendsProfile && friendsProfile.denied.map((item)=>{
   
      return item.id
    })
    let pendingFriendsProfile = friendsProfile && friendsProfile.denied.map((item)=>{
      return item.id
    })
    

    if(deniedFriendsProfile.denied && deniedFriendsProfile.denied.includes(user.id)){

      setFriendDenied(true)
    }

    else if(pendingFriendsProfile.denied && pendingFriendsProfile.pending.includes(user.id)){
      setFriendPending(true)
    }
    else{
    
    try {
        await axios.patch(`http://127.0.0.1:8000/api/friends/pending/?id=${userId}&pk=${user.id}`, {cancelToken: source.token,})
        
        

    } catch (error) {
        console.log(error.message)
    }
    setFriendSent(true)
}}

function handleClickLocation(){
  setLocationCreated(true)
}
async function buildFriendsList(){
 
  let response = await axios.post(`http://127.0.0.1:8000/api/friends/?id=${user.id}`,{cancelToken: source.token,})

}


function friendReset(){
  setJumbotronEvent('')
}

function getCountdownEvent(event){

  let date = event.date
  setCountdownEvent(date)
}

// function checkFriendsList(){

 
//  let friendsList = friends[0] && friends.filter((item)=>{
//    if (item.user == user.id){
//      return true
//    }
 
//  })
 
//  if (friendsList && !friendsList[0]){
//    buildFriendsList()
//  }
// }


console.log(friendPending)

console.log(friendDenied)


console.log(friends)
  async function handleClickFriendDeny(userId){
   
    try {
        let response = await axios.patch(`http://127.0.0.1:8000/api/friends/decline/?id=${userId}&pk=${user.id}`, {cancelToken: source.token,})
      setFriends(response.data)


    } catch (error) {
        console.log(error.message)
    }
}

function getJumbotronEvent(event){
  getCountdownEvent(event)
  setJumbotronEvent(event)
}
  async function handleClickFriendAccept(userId){
    try {
        
      let response =await axios.patch(`http://127.0.0.1:8000/api/friends/?id=${user.id}&pk=${userId}`, {cancelToken: source.token,})
        setFriends(response.data)
        let responseB =await axios.patch(`http://127.0.0.1:8000/api/friends/?id=${userId}&pk=${user.id}`, {cancelToken: source.token,})
    } catch (error) {
        console.log(error.message)
    }
}

function resetInvite(){
  setInvitees([])
  setInviteMessage(true)
  console.log(invitees)
}

function backReset(){
  setInviteMessage(false)
  setNewLocation(null)
  setJumbotronEvent('')
  setUserSearch('')
  setInvitees([])
  
}

function handleClickPrivate(){
  if (isPrivate == "False"){
  setIsPrivate("True")
  }
  else{
  setIsPrivate("False")
  }
}

 function resetSearch(){
   setNewLocation('')
 }

  return (
    <div>
      <div className="nav-app">
      <Navbar backReset={backReset}/>
 
      </div>
      <Routes>
      {friends &&
        <Route
          path="/"
          element={
            <PrivateRoute>
            
              <HomePage handleClickPrivate={handleClickPrivate}isPrivate={isPrivate} removeInvitee={removeInvitee} getPrivateEventRequests={getPrivateEventRequests} privateEvents={privateEvents}privateEventRequests={privateEventRequests} getPrivateEvents={getPrivateEvents}getJumbotronEvent={getJumbotronEvent}getCountdownEvent={getCountdownEvent} countdownEvent={countdownEvent} buildFriendsList={buildFriendsList}setShowList={setShowList} showList={showList} handleClickShowList={handleClickShowList} handleClickFriendAccept={handleClickFriendAccept} handleClickFriendDeny={handleClickFriendDeny}newEvents={newEvents}source={source} addLocation={addLocation} setAddLocation={setAddLocation}createEvent={createEvent}trigger1={trigger1} trigger={trigger} setTrigger1={setTrigger1} imageURL={imageURL} setImageURL={setImageURL} events={events} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} locations={locations} newLocation={newLocation} friends={friends} setFriends={setFriends} setLocations={setLocations} getLocations={getLocations} acceptEvent={acceptEventPrivate}declineEvent={declineEvent} />
            </PrivateRoute>
          }
        />
        }
        {event &&
        <Route
          path="/EventPage/:eventId"
          element={
            <PrivateRoute>
            
              <ViewEventPage closeModal={closeModal}eventSent={eventSent} eventDenied={eventDenied} eventAlready={eventAlready}disable={disable} eventReq={eventReq}  getEventReq={getEventReq} declineEvent={declineEvent}toggleReq={toggleReq}eventNew={eventNew} acceptEvent={acceptEvent} newEvents={newEvents}source={source} getEvent={getEvent} showConfirm={showConfirm}joinEvent={joinEvent} setCurrentComment={setCurrentComment} replies={replies} setReplies={setReplies}  events={events} event={event} setEvent={setEvent} setCurrentUser={setCurrentUser} comments={comments} setComments={setComments}   />
              
            </PrivateRoute>
          }
        
        />
}
{event &&
        <Route
          path="/PrivateEventPage/:eventId"
          element={
            <PrivateRoute>
              
              <ViewPrivateEventPage  eventUser={eventUser}eventReq={eventReq}  getEventReq={getEventReq} declineEvent={declineEvent}toggleReq={toggleReq}eventNew={eventNew} acceptEvent={acceptEvent} newEvents={newEvents}source={source} getEvent={getEvent} showConfirm={showConfirm}joinEvent={joinEvent} setCurrentComment={setCurrentComment} replies={replies} setReplies={setReplies}  events={events} event={event} setEvent={setEvent} setCurrentUser={setCurrentUser} comments={comments} setComments={setComments}   />
                
            </PrivateRoute>
          }
        />
        }
        <Route
          path="/CreateLocation"
          element={
            <PrivateRoute>
              <CreateLocationPage handleClick={closeModal} locationCreated={locationCreated} handleClickLocation={handleClickLocation} createLocation={createLocation}trigger={trigger} setTrigger={setTrigger} getLocations={getLocations} events={events} event={event} setEvent={setEvent} location={location} setLocation={setLocation}setNewLocation={setNewLocation} newLocation={newLocation} createLocation={createLocation}/>
            </PrivateRoute>
          }
        />

        <Route
          path="/ViewProfile/:userId"
          element={
            <PrivateRoute>
            
              <ViewProfilePage closeModal={closeModal} friendDenied={friendDenied} friendPending={friendPending} friendSent={friendSent} friendReset={friendReset}friendStatus={friendStatus} checkFriendStatus={checkFriendStatus}getFriendsProfile={getFriendsProfile} jumbotronEvent={jumbotronEvent} getJumbotronEvent={getJumbotronEvent}friends={friendsProfile} source={source} fetchCurrentUser={fetchCurrentUser}fetchRecentEvents={fetchRecentEvents}handleClickFriend={handleClickFriend} recentEvents={recentEvents} event={event} setEvent={setEvent} currentUser={currentUser} setCurrentUser={setCurrentUser} handleClick={handleClick} />
    
            </PrivateRoute>
          }
        />
      
        
      
        <Route
          path="/ViewLocation/:locationId"
          element={
            <PrivateRoute>
           
              <ViewLocationPage  countdownEvent={countdownEvent} setEvent={setEvent}locationEvents={locationEvents} getLocationEvents={getLocationEvents} event={event} locationPage={locationPage} getLocationPage={getLocationPage}/>
          
            </PrivateRoute>
          }
        />
         {friends && event &&
        <Route
          path="/Invite/:eventId"
          element={
            <PrivateRoute>
          
            <InvitePage removeInvitee={removeInvitee}submitPrivateRequest={submitPrivateRequest}inviteMessage={inviteMessage}resetInvite={resetInvite}invitees={invitees}handleClick={handleClickInvite}updateEvent={updateEvent}event={event} userSearch={userSearch} friends={friends} users={users} submitUserSearch={submitUserSearch}/>
           
            </PrivateRoute>
          }
        />
        }

        
        <Route path="/register" element={<RegisterPage image={image} setImage={setImage} imageURL={imageURL} setImageURL={setImageURL} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
    </div>
  );
}

export default App;

