import React from 'react';
import { Field, reduxForm } from 'redux-form';



let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'email'} name={'email'} />
            </div>
            <div>
                <Field component={'input'} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'remember me'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}



export default reduxForm({ form: 'login' })(LoginForm);