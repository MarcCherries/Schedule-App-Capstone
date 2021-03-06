import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayAttendees.css'

const DisplayAttendees = (props) => {


    return ( 
        <div>
          
          {props.event && props.event.user.map((item)=>{
              return(
                <div >
                <Link  className='attendee-item' to={`/ViewProfile/${item.id}`}  >
          
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