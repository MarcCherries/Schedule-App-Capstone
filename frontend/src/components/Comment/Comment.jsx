import { useState, useEffect } from "react";
import AddReply from "../AddReply/AddReply";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import './Comment.css'
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Comment = (props) => {

    const [showHide, setShowHide] =useState('hide')
    const [hideShow, setHideShow] =useState('hide')
    const [commentReplies, setCommentReplies] = useState()
    const [replyCount, setReplyCount] = useState(0)
    const [user, token] = useAuth()

    async function addReply (formData){
        formData.user_id = user.id

        formData.comment_id = props.item.id 
        let response = await axios.post('http://127.0.0.1:8000/api/replies/', formData)
        let newReplies = [response.data, ...commentReplies]
        setCommentReplies(newReplies)
    
     }    

function getCommentReplies(comment){

    let commReps = props.replies && props.replies.filter((reply)=>{
        if(reply.comment.id == comment.id){
            return true
        }
        
    } 
    )
       
       
      
    setCommentReplies(commReps)
      }
      
      useEffect(()=>{
        getCommentReplies(props.item)
      }, [])

function handleClick (){
    if (showHide == 'hide'){
        setShowHide('show')

    }
    else{
        setShowHide('hide')
    }
}
 

function handleClickAdd (){
    if (hideShow == 'hide'){
        setHideShow('show')

    }
    else{
        setHideShow('hide')
    }
}
console.log(commentReplies)

function getReplyCount(){
    let replies = commentReplies
    let lengthRep = replies.length
    
    setReplyCount(lengthRep)
}


    return ( 
        <div>
            
          

            
        
                
                    <div >
                        <div className="comment-box">
                            <div className="comment-font">
                        <h5>{props.item.user.username}:</h5>
                        <p>{props.item.comment_text}</p>
                        <Link to={`/ViewProfile/${props.item.user.id}`}><div><img src={`${props.item.user.user_photo}`} width="50" height="35"></img></div></Link>
                        </div>
                        <div className="comment-pic-col">
                        <div>
                        <button className='comments-btn' onClick={handleClick}>View({replyCount})</button>
                        <button className='comments-btn' onClick={handleClickAdd}>Add</button>
                        </div>
                     
                        </div>
                        </div>
                        <div className={hideShow}>
                        
                        <AddReply   setCurrentComment={props.setCurrentComment}getCommentReplies={props.getCommentReplies} addReply={addReply} comment={props.item}/>
                        </div>
                        {commentReplies &&
                        <div className={showHide}>
                        <DisplayReplies getReplyCount={getReplyCount} comment={props.item} setCommentReplies={setCommentReplies} commentReplies={commentReplies} replies={props.replies} getCommentReplies={props.getCommentReplies}/>
                        </div>
}
                        
                      
                    </div>
        </div>
     );
}
 
export default Comment;