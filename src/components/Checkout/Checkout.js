import React, { useState, useEffect } from 'react'

import Modal from '../UI/Modal'
import Button from '../UI/Button'
import classes from './Checkout.module.css'
import useCart from '../../hooks/useCart'
import useHttp from '../../hooks/useHttp'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues, validationSchema, submitOrder } from './FormConfig'


const Checkout = ({ onShowHide }) => {

    const { cart, reset } = useCart()
    const { fetchData, isLoading, error } = useHttp('https://udemy-http-request-85169-default-rtdb.firebaseio.com/orders.json')
    const [submited, setSubmited] = useState(false);
    console.log("Checkout ~ submited", submited)

    const onSubmit = formValues => {
        submitOrder(formValues, cart, fetchData)
        setSubmited(true)
    }

    useEffect(() => {
        if(!isLoading && !error && submited){
            reset()
        }
    }, [isLoading, error])

    let orderStatus
    if(isLoading) {
        orderStatus = <p>Loading...</p>
    } else if(error) {
        orderStatus = <p>{error}</p>
    } else if (submited){
        orderStatus = <p>Successfully</p>
    }

    return (
        <Modal onClose={onShowHide}>       
            <div className={classes.checkout}>
                {!submited &&
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {props => {
                            console.log(props);
                            return (
                                <Form className={classes.form}>
                                    <div className={`${classes.control} ${props.errors.name && props.touched.name && classes.invalid}`}>
                                        <label htmlFor="name">Name</label>
                                        <Field id="name" type="text" name="name" />
                                        <ErrorMessage name="name">
                                            {errorMessage => <p>{errorMessage}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <div className={`${classes.control} ${props.errors.street && props.touched.street && classes.invalid}`}>
                                        <label htmlFor="street">Street</label>
                                        <Field id="street" type="text" name="street" />
                                        <ErrorMessage name="street">
                                            {errorMessage => <p>{errorMessage}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <div className={`${classes.control} ${props.errors.postalCode && props.touched.postalCode && classes.invalid}`}>
                                        <label htmlFor="postalCode">Postal Code</label>
                                        <Field id="postalCode" type="text" name="postalCode" />
                                        <ErrorMessage name="postalCode">
                                            {errorMessage => <p>{errorMessage}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <div className={`${classes.control} ${props.errors.city && props.touched.city && classes.invalid}`}>
                                        <label htmlFor="city">City</label>
                                        <Field id="city" type="text" name="city" />
                                        <ErrorMessage name="city">
                                            {errorMessage => <p>{errorMessage}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <div className={classes.actions}>
                                        <Button type="button" onClick={onShowHide}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" className={classes.submit}>Confirm</Button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                }
                <div>
                    {orderStatus}
                </div>
            </div>
        </Modal>
    );
};

export default Checkout;