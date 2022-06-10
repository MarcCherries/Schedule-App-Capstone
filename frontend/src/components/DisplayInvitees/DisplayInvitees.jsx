import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayInvitees.css'

const DisplayInvitees = (props) => {
  console.log(props.invitees)
    return ( <div>
          
             {props.invitees && props.invitees[0] && props.invitees.map((item)=>{
              return(
                <div className='attendee-item'>
                <Link to={`/ViewProfile/${item.id}`}  >
          
                  <p>{item.username}</p>
           
             </Link>
             <button onClick={()=>props.removeInvitee(item)}>Remove</button>
             </div>
            
              )
          }

          )}
    </div> );
}
 
export default DisplayInvitees;