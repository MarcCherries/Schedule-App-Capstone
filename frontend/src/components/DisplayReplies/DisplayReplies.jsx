import React, { useEffect, useState } from 'react';
import Reply from '../Reply/Reply';

const DisplayReplies = (props) => {
    const[commentReplies, setCommentReplies] = useState([
        {
            "id": 24,
            "comment": {
                "id": 28,
                "comment_text": "Testing this new comment component",
                "user": 3,
                "event": 1
            },
            "user": {
                "id": 3,
                "password": "pbkdf2_sha256$320000$Z0T51YEk4HFz4NejhICXIh$gUfM0OaYDiDnPK+lZB6nRcKmrfzOkB0dI0OOkfzEN8U=",
                "last_login": null,
                "is_superuser": false,
                "username": "Jerry123",
                "first_name": "Jerry",
                "last_name": "Seinfeld",
                "email": "Jerry@seinfeld.com",
                "is_staff": false,
                "is_active": true,
                "date_joined": "2022-05-04T15:36:40Z",
                "user_bio": "I dont wanna be a pirate!",
                "user_reputation": "50.0",
                "is_verified": false,
                "is_admin": false,
                "user_photo": "/media/images/Screenshot_1.png",
                "user_theme": "default",
                "groups": [],
                "user_permissions": []
            },
            "reply_text": "yoafjasdf"
        }
    ])
    const[replyCount, setReplyCount] = useState()
    const [repliesCount, setRepliesCount] = useState()


function getCommentReplies(){

    let commReps = props.replies && props.replies.filter((reply)=>{
       
        if(reply.comment.id == props.comment.id){
            return true
        }
        
    })
   
   
    setCommentReplies(commReps)
   
}
console.log(commentReplies)

// function setReplyStats(){
//     if (repliesCount)
// }

useEffect (()=>{
    getCommentReplies()
    // setReplyStats()
},[])


    return ( 
        <div>
           
            {commentReplies && commentReplies.map((reply)=>{
                return (
                    <div>
                   <table>
                       <tr>
                           
                   
                   <Reply showHide={props.showHide} reply={reply}/>
                   
            
                   </tr>
                   </table>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default DisplayReplies;