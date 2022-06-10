import React, { useState } from 'react';
import Element from '../Element/Element';
import './Dropdown.css'

const Dropdown = (props) => {

   console.log(props.showList)

    return ( 
        <div >
            <button className='locations-button'  onClick={props.handleClickShowList}>Locations</button>
            
            <div className={`${props.showList}`} >
               {props.locations &&
            <Element locations={props.locations} addLocation={props.addLocation} setLocations={props.setLocations} setAddLocation={props.setAddLocation} setShowList={props.setShowList}/>
               }
            </div>

        </div>
     );
}
 
export default Dropdown;