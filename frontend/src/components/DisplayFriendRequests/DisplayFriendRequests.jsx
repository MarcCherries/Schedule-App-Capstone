import React from 'react';
import { Link } from 'react-router-dom';
import "./DisplayFriendRequests.css"

const DisplayFriendRequests = (props) => {

    return ( <div>
<div>
<p>{`You have ${props.friends.pending.length} new friend request(s)!`}</p>
</div>
            {props.friends.pending && props.friends.pending.map((item)=>{
                return (
                    <div>
                     <div className="friend-request">
                    <Link to={`ViewProfile/${item.id}`}>
                 
                    <div>{item.username}</div>          
                    </Link>
                    <div>{item.first_name}</div>
                    <div>{item.user_reputation}</div>
                    <button onClickCapture={()=>props.handleClickFriendAccept(item.id)}>Accept</button>
                    <button onClickCapture={()=>props.handleClickFriendDeny(item.id)}>Decline</button>
                   
         
                    </div>
                    </div>
                )
            })}
    </div> );
}
 
export default DisplayFriendRequests;