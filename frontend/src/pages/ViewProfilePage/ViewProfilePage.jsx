import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ViewProfilePage = (props) => {
      const [user, token]= useAuth()
    const {userId} = useParams()

    console.log(props.currentUser)

    useEffect(()=>{
        props.handleClick();
  
    },[token])
   
    return ( 
        <div>
            <h1>Profile Page for {props.currentUser && props.currentUser.username}!</h1>
            <p>{props.currentUser && props.currentUser.user_bio}</p>
        </div>
     );
}
 
export default ViewProfilePage;