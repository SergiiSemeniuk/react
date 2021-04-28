import React from 'react';
import style from './ProfileInfo.module.css';
import Contacts from './Contacts';
import { FormControl } from '../../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import styleForm from '../../common/FormsControls/FormsControls.module.css';



const ProfileFormData = ({ profile, handleSubmit, error }) => {


  return (
    <form onSubmit={handleSubmit}>
      <div className={style.userInfo}>
        <div><b>full name: </b>
          <Field component={FormControl} placeholder={'full name'}
            name={'fullName'} fieldType='input' />
        </div>
        <div><b>about me: </b>
          <Field component={FormControl} placeholder={'about me'}
            name={'aboutMe'} fieldType='textarea' />
        </div>
        <div><b>looking for a job: </b>
          <Field component={FormControl} type={'checkbox'} name={'lookingForAJob'} fieldType='input' />
        </div>
        <div><b>My professional skills:</b>
          <Field component={FormControl} placeholder={'professional skills'}
            name={'lookingForAJobDescription'} fieldType='textarea' />
        </div>
        <div>
          <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.contact}> 
              <b>{key}:</b> <Field component={FormControl} placeholder={key}
            name={'contacts.' + key} fieldType='input' />
            </div>
          }) }
        </div>
        
            {error && <div className={styleForm.formCommonError}>
                {error}
            </div>}

      </div>

      <div>
        <button >save</button>
      </div>
    </form>


  )
}

export default reduxForm({ form: 'profileFormData' })(ProfileFormData);