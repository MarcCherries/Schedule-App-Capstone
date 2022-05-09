import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayAttendees.css'

const DisplayAttendees = (props) => {
    console.log(props.event)

    return ( 
        <div>
          {props.event && props.event.user.map((item)=>{
              return(
                <div className='attendee-item'>
                <Link to={`/ViewProfile/${item.username}`} onClick={()=>props.setCurrentUser(item)} >
          
                  <p>{item.username}</p>
           
             </Link>
             </div>
              )
          }

          )}
        </div>
     );
}
 
export default DisplayAttendees;