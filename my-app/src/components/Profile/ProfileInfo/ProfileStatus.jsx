import React from 'react';



class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateMode = () => {

    this.setState({
      editMode: true
    })
  }

  deActivateMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });

  }

  render() {

    return (

      <div>
        {!this.state.editMode ?
          <div>
            <span onDoubleClick={this.activateMode} >{this.props.status || '-----'}</span>
          </div>
          : <div>
            <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deActivateMode} autoFocus={true} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;