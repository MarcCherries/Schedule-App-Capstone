import DisplayAttendees from "../DisplayAttendees/DisplayAttendees";
import './Jumbotron.css'
const Jumbotron = (props) => {
    return ( 
        <div>
          <h2 className="jumbotron-event">{props.event.event_type} @{props.event.location.location_name}</h2>
           <h4 className="jumbotron-info">{props.event.event_description}</h4> 
          
       
           <h4>Participants: </h4>
            <DisplayAttendees  event={props.event}/>
        </div>
     );
}
 
export default Jumbotron;