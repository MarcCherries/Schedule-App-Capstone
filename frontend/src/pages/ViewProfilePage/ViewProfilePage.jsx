import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./ViewProfilePage.css"

const ViewProfilePage = (props) => {
      const [user, token]= useAuth()
    const {username} = useParams()
    const [buddies, setBuddies] = useState({
        "id": 1,
        "friends": [
            {
                "id": 1,
                "password": "pbkdf2_sha256$320000$7K8moqbzsXulrglhLMGpAw$h7cshhYoZ9JkvOw8reraFcfDJsC0+73Ypt9Z4khHUnA=",
                "last_login": "2022-05-04T00:33:11.711992Z",
                "is_superuser": true,
                "username": "chris",
                "first_name": "",
                "last_name": "",
                "email": "chrisc1983@gmail.com",
                "is_staff": true,
                "is_active": true,
                "date_joined": "2022-05-04T00:15:48.748944Z",
                "user_bio": "None",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "None",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 2,
                "password": "muffin123",
                "last_login": "2022-05-03T00:45:38Z",
                "is_superuser": false,
                "username": "BlueberryMuffin",
                "first_name": "Muffin",
                "last_name": "Cat",
                "email": "Muffin@cat.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2022-05-04T00:45:27Z",
                "user_bio": "\"I am a cat\"",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "vincent-van-zalinge-GvSLkDH7XdI-unsplash.jpg",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 5,
                "password": "password",
                "last_login": "2022-05-06T01:59:32Z",
                "is_superuser": false,
                "username": "StarWarsFan93",
                "first_name": "Mike",
                "last_name": "Smith",
                "email": "HanSolo@gmail.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2022-05-06T01:59:26Z",
                "user_bio": "Bacon ipsum dolor amet shankle picanha capicola ribeye sausage bacon. Hamburger ribeye fatback ground round boudin short ribs. Kielbasa pig capicola turducken, jowl meatball ham rump swine ribeye. Chuck kielbasa burgdoggen, pastrami beef ribs leberkas bac",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "none",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 7,
                "password": "password",
                "last_login": "2022-05-06T02:01:41Z",
                "is_superuser": false,
                "username": "RudyRudy99",
                "first_name": "Rudy",
                "last_name": "Ruddiger",
                "email": "Dame4Life@aol.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2022-05-06T02:01:35Z",
                "user_bio": "Ground round strip steak capicola, flank alcatra brisket frankfurter turkey salami pancetta jowl. Ground round picanha tri-tip jerky cow filet mignon leberkas ball tip hamburger. Pork loin turducken ham hock, corned beef shank buffalo tri-tip. Flank cow c",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "none",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            },
            {
                "id": 8,
                "password": "password",
                "last_login": "2022-05-06T02:02:54Z",
                "is_superuser": false,
                "username": "RebeccaBrownEyes",
                "first_name": "Rebecca",
                "last_name": "Friemond",
                "email": "RFMad@aol.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2022-05-06T02:02:46Z",
                "user_bio": "Rump meatloaf porchetta bresaola tenderloin pig capicola sausage. Swine tenderloin meatball, tail fatback bacon boudin alcatra andouille chislic tongue chicken shoulder capicola. Frankfurter tail buffalo pig picanha tongue shank prosciutto burgdoggen bres",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "none",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            }
        ],
        "user": {
            "id": 3,
            "password": "pbkdf2_sha256$320000$Z0T51YEk4HFz4NejhICXIh$gUfM0OaYDiDnPK+lZB6nRcKmrfzOkB0dI0OOkfzEN8U=",
            "last_login": null,
            "is_superuser": false,
            "username": "Jerry123",
            "first_name": "Jerry",
            "last_name": "Seinfeld",
            "email": "Jerry@seinfeld.com",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2022-05-04T15:36:40Z",
            "user_bio": "I dont wanna be a pirate!",
            "user_reputation": "50.0",
            "is_verified": false,
            "is_admin": false,
            "user_photo": "\"./Images/default.jpg\"",
            "user_theme": "default",
            "groups": [],
            "user_permissions": []
        }
    })

  useEffect(()=>{
      const fetchfriends = async () => {
          try {
              let response = await axios.get(`http://127.0.0.1:8000/api/friends?username=${username}`)
        
              setBuddies(response.data)
              
          } catch (error) {
              console.log(error.message)
          }
      }
      
      fetchfriends()
  },[])
  console.log(buddies)


   
    return ( 
        <div>
          
            <h1 className='profile-head'>Profile Page for {props.currentUser && props.currentUser.username}!</h1>
            <div>
            <div className='top-row-container'>
            <img className='profile-image' height="200" width="150" src={require("../HomePage/Images/default.jpg")}></img>
            <div className='friend-list-profile'>
                {/* {buddies && buddies.friends.map((friend)=>{
                    return (
                        <h5>{friend.username}</h5>
                    )
                })} */}
            </div>
            </div>
            <div className='bio-container'>
            <h5>Name: {props.currentUser && props.currentUser.first_name}</h5>
            <p>About Me: {props.currentUser && props.currentUser.user_bio}</p>
            </div>
            </div>
        </div>
     );
}
 
export default ViewProfilePage;