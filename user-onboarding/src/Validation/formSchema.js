import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First Name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .password()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
})

export default formSchema;