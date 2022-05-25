import PrivateRequest from '../../components/PrivateRequest/PrivateRequest'

const DisplayPrivateRequests = (props) => {
 
  
    
    
    
        return ( 
        <div>
            {props.event && props.event.map((item)=>{
                console.log(item)
                return(
                    <div>
                   
                 <PrivateRequest acceptEvent={props.acceptEvent}declineEvent={props.declineEvent}item={item}/>
                        
                    </div>
                )
            })}
        <div>
      
        </div>
        </div> );
    }
     
  
export default DisplayPrivateRequests;