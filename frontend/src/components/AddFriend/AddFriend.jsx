import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const AddFriend = (props) => {
    const [user, token] = useAuth()
    console.log(user.id)
    console.log(props.currentUser)



 



    return ( 
        <div>
            <button onClick={()=>props.handleClickFriend(props.userId)}>Add Friend!</button>
        </div>
     );
}
 
export default AddFriend;