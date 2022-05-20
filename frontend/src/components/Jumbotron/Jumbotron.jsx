import DisplayAttendees from "../DisplayAttendees/DisplayAttendees";

const Jumbotron = (props) => {
    return ( 
        <div>
          <h2>{props.event.event_type} @{props.event.location.location_name}</h2>
           <h4>More Info:</h4> {props.event.event_description}
          
       
           <h4>Participants:</h4>
            <DisplayAttendees  event={props.event}/>
        </div>
     );
}
 
export default Jumbotron;