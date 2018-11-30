import React from 'react';

import './Row.css'
// let Row=(props)=>{
//     return (
//         <div className='Row'>
//             <div className='Email'>
//                 <h3>Email:</h3>
//                 <p>{props.email}</p>
//             </div>
//             <div className='Prediction'>
//                 <h3>Prediction:</h3>
//                 <p>{props.prediction}</p>
//             </div>
//             <div className='Choice'>
//                 <label>One</label><input onChange={props.changed} type='radio' value='One' name='choice'/>
//                 <label>Two</label><input onChange={props.changed}  type='radio' value='Two' name='choice'/>
//             </div>
//         </div>
//     );
// }
// export default Row;
let Row=(props)=>{
    return (
        <div className='Row'>
            <div className='Email'>
                <p>{props.email}</p>
            </div>
            {/* <div className='Prediction'>
                <p>{props.prediction}</p>
            </div> */}
            <div className='Choice'>
                <div className='ChoiceList'>
                    <input onChange={props.changed} type='radio' value='Appreciation'  name={'choice'+props.id}/><label   value='Appreciation'>Appreciation</label><br/>
                    <input onChange={props.changed}  type='radio' value='Complaint' name={'choice'+props.id}/><label  value='Complaint'>Complaint</label><br/>
                    <input onChange={props.changed} type='radio' value='Information' name={'choice'+props.id}/><label   value='Information'>Information</label><br/>
                    <input onChange={props.changed}  type='radio' value='Query' name={'choice'+props.id}/><label  value='Query'>Query</label><br/>
                </div>
            </div>

        </div>
    );
}
export default Row;