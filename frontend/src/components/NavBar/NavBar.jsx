import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";




const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  
  const navigate = useNavigate();


  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>JOYN-UP</b>
          </Link>
        </li>
        <img className="group-logo"height="75" width="100" src={require("./images/group.png")}></img>
      
    <div className="nav-container">
 
      <div className="nav-btn-container">
       
      
          <li><button onClick={()=> navigate('/')}>Home</button></li>
          <li><button onClick={()=> navigate(-1)}>Back</button></li>
          <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
        </div>
        {user &&
        <div className="log-in-status">
       
   <span>logged in:</span> <p className="user-name">{` ${user.username}`}</p>
     
        </div>
            }
      </div>
      </ul>
    </div>
  );
};

export default Navbar;


