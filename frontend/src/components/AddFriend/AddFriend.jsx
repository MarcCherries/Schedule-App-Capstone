import './AddFriend.css'
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const AddFriend = (props) => {

  



 



    return ( 
        <div>
            <button className="add-friend-button"onClick={()=>props.handleClickFriend(props.userId)}>Add Friend!</button>
        </div>
     );
}
 
export default AddFriend;