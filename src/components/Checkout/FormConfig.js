import * as Yup from 'yup'

const initialValues = {
    name: '',
    street: '',
    postalCode: '',
    city: '',
}

const validationSchema = Yup.object({
    name: Yup.string().required('This field is required')
        .min(4, 'This field must be at least 4 characters long'),
    street: Yup.string().required('This field is required'),
    postalCode: Yup.string().required('This field is required')
        .matches(/^[0-9\-\+]{9,15}$/, 'This field must be code'),
    city: Yup.string().required('This field is required')
        .min(6, 'This field must be at least 6 characters long')
})

const submitOrder = async (form, cart, fetchData) => {
    const order = {
        ...form,
        items: cart
    }
    console.log("submitOrder ~ order", order)
    const id = await fetchData({
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(id);
}


export { initialValues, validationSchema, submitOrder }