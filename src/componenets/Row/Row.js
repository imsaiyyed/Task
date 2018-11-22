import React from 'react';
import './Row.css'
let Row=(props)=>{
    return (
        <div className='Row'>
            <div className='Email'>
                <h3>Email:</h3>
                <p>{props.email}</p>
            </div>
            <div className='Prediction'>
                <h3>Prediction:</h3>
                <p>{props.prediction}</p>
            </div>
            <div className='Choice'>
                <label>One</label><input onChange={props.changed} type='radio' value='One' name='choice'/>
                <label>Two</label><input onChange={props.changed}  type='radio' value='Two' name='choice'/>
            </div>
        </div>
    );
}
export default Row;