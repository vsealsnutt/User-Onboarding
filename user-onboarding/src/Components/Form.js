import React from 'react';

const Form = (props) => {
    return (
        <form>
            <label>First Name 
                <input
                    type='text'
                    name='first_name'
                    placeholder='Enter First Name'
                    value={values.first_name}
                    onChange={onChange}
                />
            </label>
            <label>Last Name 
                <input
                    type='text'
                    name='last_name'
                    placeholder='Enter Last Name'
                    value={values.last_name}
                    onChange={onChange}
                />
            </label>
            <label>Email 
                <input
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Password 
                <input
                    type='password'
                    name='password'
                    placeholder='Type a Password'
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            <label>Terms of Service 
                <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                />
            </label>
        </form>
    )
}

export default Form;