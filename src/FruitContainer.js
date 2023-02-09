import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const FruitContainer = (props) => {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
    const [filterValue, setFilterValue] = useState('');
    const [fruitsNotToDisplay, setFruitsNotToDisplay] = useState([]);

    const handleFilterChange = (event) => {
        event.preventDefault();

        const newValue = event.target.value;
        setFilterValue(newValue);

        const filteredFruitsList = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(newValue.toLowerCase());
        });

        const excludedFruits = props.fruits.filter((fruit) => {
            return !fruit.toLowerCase().includes(newValue.toLowerCase());
        });

        setFruitsToDisplay(filteredFruitsList);
        setFruitsNotToDisplay(excludedFruits);
    }

    return (
        <div className='fruit__container'>
            <label> Type a Fruit </label>
            <Input value={filterValue} onChangeFn={handleFilterChange} />
            <List displayFruits={fruitsToDisplay} dontDisplayFruits={fruitsNotToDisplay}/>
        </div>
    )
}

export default FruitContainer;