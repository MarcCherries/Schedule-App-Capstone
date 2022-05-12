import { useState } from "react";
import AddReply from "../AddReply/AddReply";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import './Comment.css'

const Comment = (props) => {

    const [showHide, setShowHide] =useState('hide')
    const [hideShow, setHideShow] =useState('hide')
    

console.log(props.showHide)

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
                        
                        <AddReply comment={props.item}/>
                        </div>
                        <div className={showHide}>
                        <DisplayReplies comment={props.item} setCommentReplies={props.setCommentReplies} replies={props.replies} item={props.item}/>
                        </div>
                        
                      
                    </div>
        </div>
     );
}
 
export default Comment;