import React from 'react';
import createReactClass from 'create-react-class';
const AddParticipant = createReactClass({
  handleSubmit(e) {
    e.preventDefault(e);
    let id = '';
    for (var i = 0; i < 6; i++) {
      var rand = Math.floor(Math.random() * 8 + 1).toString();
      id = id + rand;
    }
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let addNewParticipant = [];
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      addNewParticipant.push({id,name,email,phone});
      e.target.name.value = '';
      e.target.email.value = '';
      e.target.phone.value = '';
      this.props.onAdd(addNewParticipant[0]);
    }
  },
  render() {
    return (
      <div className="add-participant">
        <form className="form" onSubmit={this.handleSubmit}>
          <tr>
            <td>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Full name"
              />
            </td>
            <td>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="E-mail address"
              />
            </td>
            <td>
              <input
                className="form-input"
                type="text"
                name="phone"
                placeholder="Phone number"
              />
            </td>
            <td>
              <input className="add" type="submit" value="Add New" />
            </td>
          </tr>
        </form>
      </div>
    );
  }
});
export default AddParticipant;
