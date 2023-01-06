import React from 'react';

function Form(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='new-user-heading'>
                <h2>Add New User</h2>
            </div>

            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

            <div className='form inputs'>
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
            </div>

            <div className='form checkbox'>
                <label>Agree to Terms of Service 
                    <input
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='form submit'>
                <button disabled={disabled}>Create User</button>
            </div>
        </form>
    )
}

export default Form;