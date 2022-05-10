import React, { useState, useEffect } from 'react';
import './DisplayComments.css'
import AddComment from '../AddComment/AddComment.jsx'

const DisplayComments = (props) => {
    
    const [hideShow, setHideShow] = useState('hide')

    function fetchEventComments(){
        let newComments = props.comments && props.comments.filter((comment)=>{
            if (comment.event.id == props.eventId){
                return true
            }
          
        })
        props.setEventComments(newComments)
    }
    


    useEffect(()=>{
      fetchEventComments();
    },[])

    function handleClick (){
        if (hideShow == 'hide'){
            setHideShow('show')

        }
        else{
            setHideShow('hide')
        }
    }
    console.log(props.comments)
   
    return ( 
        <div>
            <div className='comment-head'>
                <div className='top-row-comment'>
            <h3>Event Comments</h3><button className='comment-button' onClick={handleClick}>Add Comment</button>
            </div>
          

            
           </div>
           <div className={hideShow}>
            <AddComment setEventComments={props.setEventComments} getComments={props.getComments} setComments={props.setComments} eventId={props.eventId} comments={props.comments} eventComments={props.eventComments}/>
            </div>
            {props.eventComments && props.eventComments.map((item)=>{
                return(
                    <div>
                        <h5>{item.user.username}:</h5>
                        <p>{item.comment_text}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayComments;