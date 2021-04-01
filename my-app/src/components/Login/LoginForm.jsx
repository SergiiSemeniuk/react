import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator';
import { FormControl } from '../common/FormsControls/FormsControls';



let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} placeholder={'email'} name={'email'} fieldType='input'
                validate={[required]} />
            </div>
            <div>
                <Field component={FormControl} placeholder={'Password'} name={'password'} fieldType='input'
                validate={[required]}/>
            </div>
            <div>
                <Field component={FormControl} type={'checkbox'} name={'remember me'} fieldType='input' /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}



export default reduxForm({ form: 'login'})(LoginForm);