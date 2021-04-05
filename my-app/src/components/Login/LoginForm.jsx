import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator';
import { FormControl } from '../common/FormsControls/FormsControls';
import style from './../common/FormsControls/FormsControls.module.css';



let LoginForm = (props) => {
 
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} placeholder={'email'} name={'email'} fieldType='input'
                    validate={[required]} />
            </div>
            <div>
                <Field component={FormControl} type='password' placeholder={'Password'} name={'password'} fieldType='input'
                    validate={[required]} />
            </div>
            <div>
                <Field component={FormControl} type={'checkbox'} name={'remember me'} fieldType='input' /> remember me
            </div>
            
            <div>
                {props.isCaptcha && <div>
                    <img src={props.captcha} />
                    <div>
                        <Field component={FormControl} placeholder={'captcha'} name={'captcha'} fieldType='input'
                            validate={[required]} />
                    </div>
                </div>}
            </div>
            <div>
            {props.error && <div className={style.formCommonError}>
                {props.error}
            </div>}
            </div>
            <div>
                <button disabled={props.isFetching}>Login</button>
            </div>
        </form>
    )
}



export default reduxForm({ form: 'login'})(LoginForm);