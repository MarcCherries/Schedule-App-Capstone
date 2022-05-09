import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import DisplayEvents from "../../components/DisplayEvents/DisplayEvents";
import AddEvent from "../../components/AddEvent/AddEvent";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import './HomePage.css'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [addLocation, setAddLocation] = useState()
  // const [currentUser, setCurrentUser] = useState()

 




  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  
  }, [token]);

 
  console.log(user)
  console.log(props.currentUser)
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
        <img className="profile-pic" width="250" height="300" src={require("./Images/default.jpg")}></img>
        </Link>
        <div className="display-friends"></div>
        </div>
    
      
     
        
        <div className="add-event">
        <Dropdown locations={props.locations} addLocation={addLocation} setAddLocation={setAddLocation}/>
      
        <AddEvent setEvent={props.setEvent} setAddLocation={setAddLocation} addLocation={addLocation}/>
        <Link to={'/CreateLocation'}><button></button></Link>
        </div>
        </div>

        <div className="display-events">
        <DisplayEvents events={props.events} event={props.event} setEvent={props.setEvent} />
        </div>
        </div>
        
        </div>
    </div>
  );
};

export default HomePage;
