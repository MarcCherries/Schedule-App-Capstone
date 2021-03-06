import React from 'react';
import { Link } from 'react-router-dom';

const DisplayFriends = (props) => {
 
    return (     
 
    <div className='buddy-list'>
    <h4>{`Friends (${props.buddies.friends && props.buddies.friends.length})`}</h4><br />
       {props.buddies.friends && props.buddies.friends.map((friend)=>{
           return (
               <div>
                            <Link to={`/ViewProfile/${friend.id}`}  >
               <h5 onClick={props.friendReset}>{friend.username}</h5>
               </Link>
               </div>
               
           )
       })}
       </div> );
}
 
export default DisplayFriends;