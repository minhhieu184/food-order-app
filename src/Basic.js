import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import ErrorText from './ErrorText';

const initialValues = {
    name: '',
    password: '',
    confirmPassword: '',
    address: '',
    social: {
        facebook: '',
        instagram: '',
    },
}

const savedValues = {
    name: 'm123h',
    password: '12123123@s',
    confirmPassword: '12123123@s',
    address: 'qetq',
    social: {
        facebook: 'fb',
        instagram: 'ins',
    },
}

const onSubmit = (values, onSubmitProps) => {
    console.log("onSubmit ~ onSubmitProps", onSubmitProps)
    console.log(values);
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm({values: initialValues})
}

const validationSchema = Yup.object({
    name: Yup.string().required('This field is required')
        .min(4, 'This field must be at least 4 characters long'),
    password: Yup.string().required('This field is required')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,14}$/, "7-14 characters, at least one letter, one number and one special character"),
    confirmPassword: Yup.string().required('This field is required')
        .oneOf([Yup.ref('password'), null], "Must matches with password"),
    address: Yup.string().required('This field is required')
        .min(4, 'This field must be at least 4 characters long'),
    social: Yup.object({
        facebook: Yup.string().required('This field is required'),
        instagram: Yup.string().required('This field is required')
    })
})

const Basic = () => {

    const [formSaved, setFormSaved] = useState(null);

    useEffect(() => {
        setFormSaved(savedValues);
    }, [])

    return (
        <div>
            <h1>form</h1>
            <Formik
                initialValues={formSaved || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {formik => {
                    return (
                        <Form>                
                            <div>
                                <label htmlFor="name">name</label>
                                <Field id="name" type="text" name="name" />
                                <ErrorMessage name="name" component={ErrorText} className="123" />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <Field id="password" type="text" name="password" />
                                <ErrorMessage name="password">
                                    {
                                        props => {
                                            return <p className="error">{props}</p>
                                        }
                                    }
                                </ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">confirmPassword</label>
                                <Field id="confirmPassword" type="text" name="confirmPassword" />
                                <ErrorMessage name="confirmPassword" />
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <Field name="address">
                                    {
                                        props => {
                                            // console.log(props);
                                            return(
                                                <>
                                                    <input 
                                                        id="address" 
                                                        type="text" 
                                                        placeholder="Confirm Password" 
                                                        {...props.field} 
                                                    />
                                                    {props.meta.error && props.meta.touched && <p>{props.meta.error}</p>}
                                                </>
                                            )
                                        }
                                    }
                                </Field>
                            </div>
                            <div>
                                <label htmlFor="facebook">Facebook</label>
                                <Field name="social.facebook" id="facebook" />
                                <ErrorMessage name="social.facebook" component="p" className="error" />
                            </div>
                            <div>
                                <label htmlFor="instagram">Instagram</label>
                                <Field name="social.instagram" id="instagram" />
                                <ErrorMessage name="social.instagram" component="p" className="error" />
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default Basic;
