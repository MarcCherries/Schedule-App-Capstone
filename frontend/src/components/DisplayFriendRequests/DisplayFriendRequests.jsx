import React from 'react';
import { Link } from 'react-router-dom';
import "./DisplayFriendRequests.css"

const DisplayFriendRequests = (props) => {
    console.log(props.friends)
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
                    <div>{item.first_name}</div>
                    <div>{item.user_reputation}</div>
                    <button>Accept</button>
                    <button>Decline</button>
                   
                   
                    </Link>
                    </div>
                    </div>
                )
            })}
    </div> );
}
 
export default DisplayFriendRequests;