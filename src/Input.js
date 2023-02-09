import React from 'react';

const Input = (props) => {
    return (
        <div className='input__container'>
            <label classname='input__comp' htmlFor="fruit-filter">Filter these fruits</label>
            <input className='input__comp' type="text" name="fruit-filter" value={props.value} onChange={props.onChangeFn} />
        </div>
    )
}

export default Input;