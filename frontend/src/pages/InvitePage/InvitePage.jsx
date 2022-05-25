import React, { useState, useEffect } from 'react';
import DisplaySearchResultsUser from '../../components/DisplaySearchResults/DisplaySearchResultsUser';
import './InvitePage.css'
import DisplayInvitees from '../../components/DisplayInvitees/DisplayInvitees';


const InvitePage = (props) => {
    const [searchTermUser, setSearchTermUser] = useState()
 

    function handleClick(){
        console.log(props.invitees)
        props.invitees.map((item)=>{
            props.submitPrivateRequest(props.event.id, item.id)
        })
    }

console.log(props.invitees)
    return (
        <div className='invite-container'>
        <div>
        {props.friends.friends[0] && props.friends.friends.map((friend)=>{
            return (
                <div>
                <p >{friend.username}</p>
                <button onClick={()=>props.handleClick(friend)}>Add</button>
                </div>
            )
        })}
        <form onSubmit={(e)=>props.submitUserSearch(e, searchTermUser)}>
            <input type="text" value={searchTermUser} onChange={(e)=>setSearchTermUser(e.target.value)}>
            </input>
        </form>
        <DisplaySearchResultsUser results={props.userSearch}/>
        </div> 
        <div className='invite-card'>
            {props.invitees &&
        <DisplayInvitees invitees={props.invitees}/>
            }

        </div>
        {props.inviteMessage && <p>Your Invitations Have Been Sent!</p>}
        {props.invitees &&
            <button  onClick={handleClick}>Send Invitation</button>
        }
    </div>);
}
 
export default InvitePage;