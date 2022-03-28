import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import useCart from '../../hooks/useCart';

import styles from './HeaderCartBtn.module.css'

import { UilShoppingCartAlt } from '@iconscout/react-unicons'


const HeaderCartBtn = ({ onClick }) => {

    const cartCtxValue = useCart()

    const amount = cartCtxValue.cart.reduce((prevAmount, curItem) => {
        return prevAmount + curItem.amount
    }, 0)

    const [isAnimate, setIsAnimate] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsAnimate(false)
        }, 300)
        return () => {
            setIsAnimate(true)
        };
    }, [cartCtxValue.cart]);

    return (
        <Button className={`${styles.headerBtn} ${isAnimate ? styles.bump : ''}`} onClick={onClick}>
            <UilShoppingCartAlt className={styles.headerBtnIcon} />
            Your Cart
            <div className={styles.headerBtnAmount}>{amount}</div>
        </Button>
    );
}

export default HeaderCartBtn;
