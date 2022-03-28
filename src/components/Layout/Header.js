import React, { useState } from 'react';

import styles from './Header.module.css';
import headerImg from '../../assets/img/meals.jpg'

import HeaderCartBtn from './HeaderCartBtn';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';

const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)

    const showHideCartHandler = () => {
        setIsCartOpen(pre => !pre)
    }

    const showHideCheckoutHandler = () => {
        setIsCartOpen(false)
        setIsCheckout(pre => !pre)
    }

    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBtn onClick={showHideCartHandler} />
                {isCartOpen && <Cart onShowHide={showHideCartHandler} onCheckout={showHideCheckoutHandler} />}
                {isCheckout && <Checkout onShowHide={showHideCheckoutHandler} />}
            </header>
            <div className={styles['main-image']}>
                <img src={headerImg} alt="meals img" />
            </div>
        </>
    )
}

export default Header;