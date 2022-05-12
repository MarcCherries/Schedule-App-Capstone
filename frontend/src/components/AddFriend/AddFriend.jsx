import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const AddFriend = (props) => {
    const [user, token] = useAuth()
    console.log(user.id)
    console.log(props.currentUser)



    async function handleClick(){
        try {
            await axios.patch(`http://127.0.0.1:8000/api/friends/?id=${user.id}&pk=${props.currentUser.id}`)
            

        } catch (error) {
            console.log(error.message)
        }
    }



    return ( 
        <div>
            <button onClick={handleClick}>Add Friend!</button>
        </div>
     );
}
 
export default AddFriend;