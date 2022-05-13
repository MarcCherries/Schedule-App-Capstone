import React, { useState } from 'react';
import Element from '../Element/Element';
import './Dropdown.css'

const Dropdown = (props) => {

    const [showList, setShowList] = useState('children-inactive');

    function handleClick(){
        if (showList == 'children-inactive'){
            setShowList('children-active')
        }
        else {
            setShowList('children-inactive')
        }
    }

    return ( 
        <div>
            <button onClick={handleClick}>Select Location</button>
            <div className={`${showList}`}>
            <Element locations={props.locations} addLocation={props.addLocation} setLocations={props.setLocations} setAddLocation={props.setAddLocation} setShowList={setShowList}/>
            </div>
        </div>
     );
}
 
export default Dropdown;