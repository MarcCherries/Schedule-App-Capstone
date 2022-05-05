import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import DisplayEvents from "../../components/DisplayEvents/DisplayEvents";
import AddEvent from "../../components/AddEvent/AddEvent";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

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
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
        <img width="150" height="200" src={require("./Images/default.jpg")}></img>
        <DisplayEvents events={props.events} event={props.event} setEvent={props.setEvent} />
        <AddEvent setEvent={props.setEvent}/>
      </div>
    </div>
  );
};

export default HomePage;
