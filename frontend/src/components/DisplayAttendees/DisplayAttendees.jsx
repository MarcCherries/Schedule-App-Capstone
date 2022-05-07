import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayAttendees = (props) => {
    console.log(props.event)
    return ( 
        <div>
          {props.event && props.event.user.map((item)=>{
              return(
                <Link to={`/ViewProfile/${item.id}` } >
              <p key={item.id}> 
                  <p>{item.username}</p>
             </p>
             </Link>
              )
          }

          )}
        </div>
     );
}
 
export default DisplayAttendees;