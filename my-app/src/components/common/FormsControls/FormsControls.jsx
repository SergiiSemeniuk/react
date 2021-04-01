import React from 'react';
import style from './FormsControls.module.css';



export const FormControl = ({input, meta, fieldType, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError && style.error}`}>
            <div>
            {React.createElement(fieldType, {...input, ...props})}           
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

