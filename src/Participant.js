import React from 'react';
import PropTypes from 'prop-types';
export default class Participant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    };
  }
  handleDelete() {
    this.props.onDelete(this.props.index);
  }
  handleEdit() {
    this.props.onEdit(this.props.index);
    this.setState({
      editing: true
    });
  }
  handleChange(e) {
    console.log('Saved');
    e.preventDefault(e);
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    let saveUpdate = [];
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      saveUpdate.push({ name, email, phone });
      this.props.onSave(saveUpdate[0], this.props.index);
    }
    this.setState({
      editing: true
    });
  }
  handleSave() {
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    let saveUpdate = [];
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      saveUpdate.push({ name, email, phone });
      this.props.onSave(saveUpdate[0], this.props.index);
    }
    this.setState({
      editing: false
    });
  }
  handleCancel() {
    this.props.onCancel();
    this.setState({
      editing: false
    });
  }
  renderNormal() {
    return (
      <tr>
        <td>{this.props.participant.name}</td>
        <td>{this.props.participant.email} </td>
        <td>{this.props.participant.phone} </td>
        <td className="edit-delet-buttons">
          <span>
            <i
              onClick={this.handleEdit.bind(this)}
              className="icon ion-edit"

            />
            <i
              onClick={this.handleDelete.bind(this)}
              className="icon ion-trash-b"
            />
          </span>
        </td>
      </tr>
    );
  }
  renderForm() {
    return (
      <tr>
        <td>
          <input
            onChange={this.handleChange.bind(this)}
            type="text"
            ref="name"
            placeholder="Full name"
            defaultValue={this.props.participant.name}
          />
        </td>
        <td>
          <input
            onChange={this.handleChange.bind(this)}
            type="email"
            ref="email"
            placeholder="E-mail address"
            defaultValue={this.props.participant.email}
          />
        </td>
        <td>
          <input
            onChange={this.handleChange.bind(this)}
            type="tel"
            ref="phone"
            placeholder="Phone number"
            defaultValue={this.props.participant.phone}
          />
        </td>
        <td className="buttons">
          <div>
            <button onClick={this.handleCancel.bind(this)} className="cancel">
              Cancel
            </button>
            <button onClick={this.handleSave.bind(this)} className="save">
              Save
            </button>
          </div>
        </td>
      </tr>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}
Participant.propTypes = {
  onDelete:PropTypes.func,
  onSave:PropTypes.func,
  onEdit:PropTypes.func,
  participant:PropTypes.object,
}
