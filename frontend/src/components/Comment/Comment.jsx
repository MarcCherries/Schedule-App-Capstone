import { useState } from "react";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import './Comment.css'

const Comment = (props) => {

    const [showHide, setShowHide] =useState('hide')
    

console.log(props.showHide)

function handleClick (){
    if (showHide == 'hide'){
        setShowHide('show')

    }
    else{
        setShowHide('hide')
    }
}
 
    return ( 
        <div>
            
          

            
        
                
                    <div>
                   
                        <h5>{props.item.user.username}:</h5>
                        <p>{props.item.comment_text}</p>
                        <div className={props.showHide}>
                        <button onClick={handleClick}>View Replies</button>
                        <button>Add Reply</button>
                        <div className={showHide}>
                        <DisplayReplies comment={props.item} setCommentReplies={props.setCommentReplies} replies={props.replies} item={props.item}/>
                        </div>
                        </div>
                      
                    </div>
        </div>
     );
}
 
export default Comment;