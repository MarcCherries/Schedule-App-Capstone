import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import './RegisterPage.css'

const RegisterPage = (props) => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    user_bio: "",
    user_reputation: 50.0,
    is_verified: false,
    is_admin: false,
    user_photo: "",
    user_theme: "none",
  };

  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );
  


  
    
  
  return (

    <div>
      <h3 className="welcome-message">Welcome, New User!</h3>
    <div className="container-row-register">
       
        <img className="register-image" src={require('./Images/jogging.jpg')} height='400' width='300'></img>
      
    <div className="container">
      <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bio:{" "}
          <input
            type="text"
            name="user_bio"
            value={formData.user_bio}
            onChange={handleInputChange}
          />
        </label>
  
 
        <label>
          Photo:{" "}
          <input
            type="text"
            name="user_photo"
            id="user_photo"
         
            value={formData.user_photo}
            onChange={handleInputChange}
            
          />
        </label>
    
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button>Register!</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;
