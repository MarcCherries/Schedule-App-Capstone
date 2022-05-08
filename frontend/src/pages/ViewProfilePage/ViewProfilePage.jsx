import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const ViewProfilePage = (props) => {
      const [user, token]= useAuth()
    const {username} = useParams()
    const [friends, setFriends] = useState()

  useEffect(()=>{
      const fetchfriends = async () => {
          try {
              let response = await axios.get(`http://127.0.0.1:8000/api/friends?username=${username}`)
              setFriends(response.data)
          } catch (error) {
              console.log(error.message)
          }
      }
      fetchfriends()
  },[])
  console.log(friends)


   
    return ( 
        <div>
            <h1>Profile Page for {props.currentUser && props.currentUser.username}!</h1>
            <p>{props.currentUser && props.currentUser.user_bio}</p>
        </div>
     );
}
 
export default ViewProfilePage;