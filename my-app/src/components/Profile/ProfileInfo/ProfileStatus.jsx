import React, { useEffect, useState } from 'react';



let ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);


  let activateMode = () => {
    setEditMode(true);
  }

  let deActivateMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  useEffect(() => {
    
    setStatus(props.status)
  }, [props.status])

  return (

    <div>
      {!editMode ?
        <div>
          {(!props.isAuth || props.pathUserId != props.authorizedUserId)
          ? <span >{props.status || '----'}</span>
          : <span onClick={activateMode} >{props.status || '----'}</span>
          }
         
        </div>
        : <div>
          <input onChange={onStatusChange} value={status} onBlur={deActivateMode} autoFocus={true} />
        </div>
      }
    </div>
  )
}


export default ProfileStatus;