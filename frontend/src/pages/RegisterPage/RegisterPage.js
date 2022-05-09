import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = (props) => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    user_bio: "",
    user_reputation: "",
    is_verified: "False",
    is_admin: "False",
    user_photo: "",
    user_theme: "",
  };

  console.log(defaultValues)
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );
  console.log(defaultValues)


  // useEffect(()=>{
  //     if (props.image){
        
  //       let newURL = URL.createObjectURL(props.image)
  //       props.setImageURL(newURL)
  //     }
  // },[props.image])
    
  
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
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
          Reputation Score:{" "}
          <input
            type="number"
            name="user_reputation"
            value={formData.user_reputation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Verified?:{" "}
          <input
            type="checkbox"
            name="is_verified"
            value={formData.is_verified}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Admin?:{" "}
          <input
            type="checkbox"
            name="is_admin"
            value={formData.is_admin}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Photo:{" "}
          <input
            type="file"
            name="user_photo"
            id="user_photo"
         
            value={formData.user_photo}
            onChange={handleInputChange}
            
          />
        </label>
        <label>
          Theme:{" "}
          <input
            type="text"
            name="user_theme"
            value={formData.user_theme}
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
  );
};

export default RegisterPage;
