import React, { useReducer } from 'react';

import cartContext from './cart-context'
import cartReducer from './cartReducer'
import actions from './actions';

// const defaultCart = [
//     {id, name, price, amount}
// ]

const CartProvider = ({ children }) => {

    const [cart, dispatchCart] = useReducer(cartReducer, [])

    const addItem = (item) => {
        dispatchCart({type: actions.ADD_ITEM, value: item})
    }

    const increaseAmount = (id) => {
        dispatchCart({type: actions.INCREASE_AMOUNT, value: id})
    }   
    
    const decreaseAmount = (id) => {
        dispatchCart({type: actions.DECREASE_AMOUNT, value: id})      
    }
    
    const removeItem = (id) => {
        dispatchCart({type: actions.REMOVE_ITEM, value: id})
    }

    const reset = () => {
        dispatchCart({type: actions.RESET})
    }

    const cartContextValue = {
        cart,
        addItem,
        increaseAmount,
        decreaseAmount,
        removeItem,
        reset
    }

    return (
        <cartContext.Provider value={cartContextValue}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
