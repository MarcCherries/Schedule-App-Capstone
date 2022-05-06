import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewProfilePage = (props) => {
    const {userId} = useParams()

    console.log(props.user)
  
    return ( 
        <div>
{props.currentUser &&props.currentUser.first_name}
        </div>
     );
}
 
export default ViewProfilePage;