import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";



const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [showOptions, setShowOptions] = useState('hide')
  const navigate = useNavigate();

  function handleShowOptions(){
    if (showOptions == 'hide-options'){
      setShowOptions('show-options')
    }
    else {
      setShowOptions('hide-options')
    }
  }
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>JOYN-UP</b>
          </Link>
        </li>
        {/* <img height="75" width="150" src={require("../../images/dunk.png")}></img> */}
      
    <div className="nav-container">
      <button className="navigate-button" onClick={handleShowOptions}>Navigate</button>
      <div className={showOptions}>
       
      
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
       
      </div>
      </ul>
    </div>
  );
};

export default Navbar;


