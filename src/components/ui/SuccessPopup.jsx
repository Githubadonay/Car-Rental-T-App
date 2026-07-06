import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const SuccessPopup = ({ successOpen}) => {
    return (
        <div className={`success ${successOpen && 'success-open'}`}>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <span>Ride Successfully booked!</span>
        </div>
    );
}

export default SuccessPopup;
