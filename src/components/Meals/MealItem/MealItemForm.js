import React from 'react';
import { useRef } from 'react';
import useCart from '../../../hooks/useCart'

import styles from './MealItemForm.module.css'

import Button from '../../UI/Button'
import InputBlock from '../../UI/InputBlock'


const MealItemForm = ({ id, name, price }) => {

    const cartCtxValue = useCart()

    const amountRef = useRef()

    const addToCart = e => {
        e.preventDefault()
        const item = {
            id,
            name,
            price,
            amount: amountRef.current.value*1,
        }
        console.log('add')
        cartCtxValue.addItem(item)
    }

    return (
        <form className={styles.form}>
            <InputBlock
                ref={amountRef}
                label="Amount"
                className={styles.input}
                inputAtr={{
                    id: {id},
                    type: "number",
                    min: "0",
                    step: "1",
                    // defaultValue: "0"
                }}
            />
            <Button className={styles['form-button']} onClick={addToCart}>
                +Add
            </Button>
        </form>
    );
}

export default MealItemForm;
