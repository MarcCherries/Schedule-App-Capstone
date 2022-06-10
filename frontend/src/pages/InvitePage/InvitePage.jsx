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
       props.resetInvite()
    }

console.log(props.invitees)
    return (
        <div className='invite-container'>
            <img className='invite-image' src={require('./Images/armsup.jpg')} height='350' width='200'></img>
            
        <div>
            <div className='friends-invite-container'>
            <div className='friends-invite-header'> 
                 <p>Friends</p>
            </div>
        {props.friends.friends[0] && props.friends.friends.map((friend)=>{
            return (
                <div className='friend-invite-entry'>
                <p >{friend.username}</p>
                <button className='invite-friend-button' onClick={()=>props.handleClick(friend)}>Add</button>
                </div>
                
            )
        })}
        </div>
   
      
        </div> 
        <div>
        <div className='invite-search-result'>
        <p>Enter Username:</p>
        <form onSubmit={(e)=>props.submitUserSearch(e, searchTermUser)}>
            
            
            <input type="text" value={searchTermUser} onChange={(e)=>setSearchTermUser(e.target.value)}>
            </input>
        </form>
        </div>
        <DisplaySearchResultsUser handleClick={props.handleClick} results={props.userSearch}/>
        </div>
        <div className='invite-card'>
            <p className='invite-card-head'>You're Invited:</p>
            {props.invitees &&
        <DisplayInvitees removeInvitee={props.removeInvitee}invitees={props.invitees}/>
            }
  {props.invitees &&
            <button className='send-invite-btn' onClick={handleClick}>Send Invitation</button>
        }
        </div>
        {props.inviteMessage && <p>Your Invitations Have Been Sent!</p>}
      
    </div>);
}
 
export default InvitePage;