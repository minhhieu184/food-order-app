import React from 'react';
import useCart from '../../hooks/useCart'

import styles from './Cart.module.css'
import Modal from './../UI/Modal';
import Button from './../UI/Button';
import CartItem from './CartItem';


const Cart = ({ onShowHide, onCheckout }) => {

    const cartCtxValue = useCart()
    const cartItems = cartCtxValue.cart

    const totalPrice = cartItems.reduce((preTotal, item) =>{
        return preTotal + item.amount*item.price
    }, 0)

    const increaseHandler = (id) => {
        cartCtxValue.increaseAmount(id)
    }

    const decreaseHandler = (id, amount) => {
        if(amount > 1){
            cartCtxValue.decreaseAmount(id)
        } else {
            cartCtxValue.removeItem(id)
        }
    }

    return (
        <Modal onClose={onShowHide}>
            <div className={styles.cart}>
                <ul className={styles['cart-items']}>
                    {cartItems.map((cartItem => (
                        <CartItem 
                            key={cartItem.id}
                            name={cartItem.name}
                            price={cartItem.price}
                            amount={cartItem.amount}
                            onIncrease={() => increaseHandler(cartItem.id)}
                            onDecrease={() => decreaseHandler(cartItem.id, cartItem.amount)}
                        />
                    )))}
                </ul>
                
                <div className={styles.total}>
                    Total Amount
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className={styles.actions}>
                    <Button 
                        className={`${styles['actions-btn']} ${styles['actions-btn--alt']}`}
                        onClick={onShowHide}
                    >
                        Close
                    </Button>
                    <Button 
                        className={styles['actions-btn']}
                        onClick={onCheckout}
                        disabled={totalPrice === 0}
                    >
                        Order
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default Cart;
