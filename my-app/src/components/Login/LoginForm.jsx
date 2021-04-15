import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator';
import { FormControl } from '../common/FormsControls/FormsControls';
import style from './../common/FormsControls/FormsControls.module.css';



let LoginForm = ({handleSubmit, isCaptcha, captcha, error, isFetching}) => {
    
 
 
    return (
        <form onSubmit={handleSubmit} className={style.form}>
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
                {isCaptcha && <div>
                    <img src={captcha} />
                    <div>
                        <Field component={FormControl} placeholder={'captcha'} name={'captcha'} fieldType='input'
                            validate={[required]} autoFocus={true}  />
                    </div>
                </div>}
            </div>
            <div>
            {error && <div className={style.formCommonError}>
                {error}
            </div>}
            </div>
            <div>
                <button disabled={isFetching}>Login</button>
            </div>
        </form>
    )
}



export default reduxForm({ form: 'login'})(LoginForm);