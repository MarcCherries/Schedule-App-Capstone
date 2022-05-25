import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayInvitees = (props) => {
    return ( <div>
             {props.invitees && props.invitees[0] && props.invitees.map((item)=>{
              return(
                <div className='attendee-item'>
                <Link to={`/ViewProfile/${item.id}`}  >
          
                  <p>{item.username}</p>
           
             </Link>
             </div>
            
              )
          }

          )}
    </div> );
}
 
export default DisplayInvitees;