import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Special Person</h3>
            <p><small>Gift: {house}</small></p>
            <button onClick={ () => setHouse(house + 1)}>Add Buy House</button>
        </div>
    );
};

export default Special;