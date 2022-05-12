import { useState, useEffect } from "react";
import AddReply from "../AddReply/AddReply";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import './Comment.css'
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {

    const [showHide, setShowHide] =useState('hide')
    const [hideShow, setHideShow] =useState('hide')
    const [commentReplies, setCommentReplies] = useState()
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
 
    return ( 
        <div>
            
          

            
        
                
                    <div >
                            <div className="comment-font">
                        <h5>{props.item.user.username}:</h5>
                        <p>{props.item.comment_text}</p>
                        </div>
                      
                        <button onClick={handleClick}>View Replies</button>
                        <button onClick={handleClickAdd}>Add Reply</button>
                        <div className={hideShow}>
                        
                        <AddReply   setCurrentComment={props.setCurrentComment}getCommentReplies={props.getCommentReplies} addReply={addReply} comment={props.item}/>
                        </div>
                        <div className={showHide}>
                        <DisplayReplies comment={props.item} setCommentReplies={setCommentReplies} commentReplies={commentReplies} replies={props.replies} getCommentReplies={props.getCommentReplies}/>
                        </div>
                        
                      
                    </div>
        </div>
     );
}
 
export default Comment;