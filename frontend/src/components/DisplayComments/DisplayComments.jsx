import React, { useState, useEffect } from 'react';
import './DisplayComments.css'
import AddComment from '../AddComment/AddComment.jsx'
import DisplayReplies from '../DisplayReplies/DisplayReplies';
import AddReply from '../AddReply/AddReply.jsx'
import Comment from '../Comment/Comment';

const DisplayComments = (props) => {
    
    const [showHide, setShowHide] = useState('hide')
    const [hideShow, setHideShow] = useState('hide')
    const [hideShowReply, setHideShowReply] = useState('hide-reply')
    const [showReplyInput, setShowReplyInput] = useState('hide-reply-input')
    const [commentReplies, setCommentReplies] = useState()
    const [replyCount, setReplyCount] = useState()


 


    function fetchEventComments(){
        let newComments = props.comments && props.comments.filter((comment)=>{
        let strEvent = comment.event.id
        
        let newStr = strEvent.toString()
      
            if (newStr == props.eventId){
                console.log(newStr)
                console.log(props.eventId)
                console.log("yay!")
                return true
            }
          
        })
        props.setEventComments(newComments)
    }
    


    useEffect(()=>{
      fetchEventComments();
    },[])
console.log (props.eventComments)
    function handleClick (){
        if (showHide == 'hide'){
            setShowHide('show')

        }
        else{
            setShowHide('hide')
        }
    }
    function handleShowInput (){
        if (showReplyInput == 'hide-reply-input'){
            setShowReplyInput('show-reply-input')

        }
        else{
            setShowReplyInput('hide-reply-input')
        }
    }
    function handleClickReply (){
        if (hideShowReply == 'hide-reply'){
            setHideShowReply('show-reply')

        }
        else{
            setHideShowReply('hide-reply')
        }
    }
 
   
    return ( 
        <div>
            <div className='comment-head'>
                <div className='top-row-comment'>
            <h3>Event Comments</h3><button className='comment-button' onClick={handleClick}>Add Comment</button>
            </div>
          

            
           </div>
         
            <AddComment setEventComments={props.setEventComments} getComments={props.getComments} setComments={props.setComments} eventId={props.eventId} comments={props.comments} eventComments={props.eventComments} showHide={showHide}/>
  
           
                   
                   
                           
                                
        
            {props.eventComments && props.eventComments.map((item)=>{
                        return(
                            <table>
                            <tr>
                            
                        <Comment showHide={props.showHide}replies={props.replies} setCommentReplies ={setCommentReplies}setEventReplies={props.setEventReplies}item={item} eventComments={props.eventComments}/>
                        
                      
                    
                        </tr>
                        </table>
                        )
            })}
                       
               
                    
                      
                        
                        <div className='display-reply'>
                        <div className={hideShowReply}>
                        
                        </div>
                        </div>
                  
            
        </div>
     );
}
 
export default DisplayComments;

         {/* <button onClick={handleClickReply}>View Replies({replyCount})</button>
                        <button onClick={handleShowInput}>Add Reply</button> */}