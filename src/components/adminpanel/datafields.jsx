import React from 'react';
import './adminpanel.css'

function Datafields({ property, val }) {
    return (
        <div className='individual_student_data_each_div'>
            <p>{property} : </p>
            <p>{val}</p>
        </div>
    );
}

export default Datafields;