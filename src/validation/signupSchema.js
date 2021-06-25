// Here goes the schema for the signup page.
// This makes sure the user entered a username, password, and status.


import * as yup from 'yup'

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    password: yup
        .string()
        .trim()
        .min(8, 'Password must be 8 characters long')
        .required('Password is required'),
    status: yup
        .string()
        .oneOf(['owner', 'renter'], 'Status is required')
})

export default signupSchema;