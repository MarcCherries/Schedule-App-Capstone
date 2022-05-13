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
                           
                   <div className='reply-box'>
                   <Reply showHide={props.showHide} reply={reply}/>
                   </div>
            
                   </tr>
                   </table>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default DisplayReplies;