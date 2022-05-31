import React from 'react';
import { Link } from 'react-router-dom';
import "./DisplayFriendRequests.css"

const DisplayFriendRequests = (props) => {

    return ( <div>
<div>
<h6 className='friend-req-text'>{`You have ${props.friends.pending.length} new friend request(s)!`}</h6>
</div>
            {props.friends.pending && props.friends.pending.map((item)=>{
                return (
                    <div>
                     <div className="friend-request">
                    <Link to={`ViewProfile/${item.id}`}>
                 
                    {item.username}     
                    </Link>
                    <div className='bottom-friend'>{item.first_name}
                    {item.user_reputation}
                    <div>
                    <button onClick={()=>props.handleClickFriendAccept(item.id)}>Accept</button>
                    <button onClick={()=>props.handleClickFriendDeny(item.id)}>Decline</button>
                    </div>
                   </div>
         
                    </div>
                    </div>
                )
            })}
    </div> );
}
 
export default DisplayFriendRequests;