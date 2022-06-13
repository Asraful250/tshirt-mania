import React from 'react';
import'./Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional Rendering Option
    // 1. Element Variable
    // 2. Ternary Operator ? true : false
    // 3. ShortHand Operator (&&)
    // 4. || 
    let command;
    if(cart.length === 0){
        command = <div>
            <h5>Please Add At Least One Item!!</h5>
            <p>Please Buy!?</p>
        </div>
    }
    else if (cart.length === 1){
        command = <p>Please Add More....</p>
    }
    else{
        command = <p><small>Thanks For Adding Item</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={ () => handleRemoveFromCart (tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YaY !! You Are buying</p>}
            {cart.length === 1 && <div className='orange'>
                    <h3>For One Person</h3>
                    <p>Kew Reh Kih Gift diba!!</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep Adding</p> : <button> Remove All</button>}
            {cart.length === 4 && <button className='btn-review-order'>Review Order</button>}
        </div>
    );
};

export default Cart;