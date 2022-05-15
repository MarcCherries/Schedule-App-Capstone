import React from 'react';
import { Link } from 'react-router-dom';

const DisplayFriendRequests = (props) => {
    console.log(props.friends)
    return ( <div>
<div>
<p>{`You have ${props.friends.pending.length} new friend request(s)!`}</p>
</div>
            {props.friends.pending && props.friends.pending.map((item)=>{
                return (
                    <div>
                  
                    <Link to={`ViewProfile/${item.id}`}>
                    <div>
                    <p>{item.username}</p>
                    <p>{item.first_name}</p>
                    <p>{item.user_reputation}</p>
                    </div>
                    </Link>
                    </div>
                )
            })}
    </div> );
}
 
export default DisplayFriendRequests;