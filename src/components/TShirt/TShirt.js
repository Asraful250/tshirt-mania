import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const {handleAddToCart, tShirt} =props;
    const {name, price, picture} = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}/-</p>
            <button onClick={ () => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;