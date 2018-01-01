import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
export default class AddParticipant extends React.Component{
  constructor(props){
    super(props)
    this.state={
      addButton:"noData"
    }
  }
  handleSubmit(e) {
    e.preventDefault(e);
    // let id = '';
    // for (var i = 0; i < 6; i++) {
    //   var rand = Math.floor(Math.random() * 8 + 1).toString();
    //   id = id + rand;
    //   console.log("Id",id)
    // }

    let id = uuid.v4();
    console.log(id);
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    let addNewParticipant = [];

    if (name.length > 0 && email.length > 0 && phone.length > 0) {

      this.setState({
        addButton:"withData"
      })
      addNewParticipant.push({ id, name, email, phone });
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
      this.props.onAdd(addNewParticipant[0]);
      this.setState({
        addButton:"noData"
      })
    }

  }
  render() {
    return (
      <div className="add-participant">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form-input"
            type="text"
            ref="name"
            placeholder="Full name"
            pattern="^[a-zA-Z_ ]*$"
            required
          />
          <input
            className="form-input"
            type="email"
            ref="email"
            placeholder="E-mail address"
            required
          />
          <input
            className="form-input"
            type="tel"
            ref="phone"
            placeholder="Phone number"
            pattern="^\d{4}-\d{3}-\d{4}$"
            required
          />
          <input id ={this.state.addButton} className="add" type="submit" value="Add New" />
        </form>
      </div>
    );
  }
}

AddParticipant.propTypes = {
  onAdd:PropTypes.func,
}
