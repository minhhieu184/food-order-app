import React from 'react';

import styles from './CartItem.module.css'
import Button from '../UI/Button'

const CartItem = ({ name, price, amount, onIncrease, onDecrease }) => {
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x{amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <Button onClick={onIncrease}>
                    +
                </Button>
                <Button onClick={onDecrease}>
                    -
                </Button>
            </div>
        </li>
    );
}

export default CartItem;
