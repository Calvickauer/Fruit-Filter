import React from 'react'

const List = (props) => {
    const fruitItems = props.displayFruits.map((fruit, idx) => {
        return <li key={idx} > {fruit} </li>
    });
    const noFruits = props.dontDisplayFruits.map((fruit, idx) => {
        return <li key={idx} > {fruit} </li>
    });
  return (
    <div className='list__comp'>
        <h3>Fruits matching</h3>
        <ul>
            {fruitItems}
        </ul>
        <h3>Fruits not matching</h3>
         <ul>
            {noFruits}
        </ul>
    </div>
  )
}

export default List
