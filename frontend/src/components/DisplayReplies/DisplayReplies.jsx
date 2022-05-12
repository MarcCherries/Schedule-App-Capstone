import React, { useEffect, useState } from 'react';
import Reply from '../Reply/Reply';

const DisplayReplies = (props) => {
  
    const[replyCount, setReplyCount] = useState()
    const [repliesCount, setRepliesCount] = useState()







    return ( 
        <div>
           
            {props.commentReplies && props.commentReplies.map((reply)=>{
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