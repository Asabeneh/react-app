import React from 'react';
import createReactClass from 'create-react-class';
import faker from 'faker';
import AddParticipant from './AddParticipant';
import Participant from './Participant';
const Participants = createReactClass({
  getInitialState(){
    var participants =[];
    var info = faker;

    for(var i = 0; i < 20; i++){
      var id = faker.random.uuid();
      var name = info.name.firstName() + " " + faker.name.lastName() ;
      var email = info.internet.email();
      var phone = info.phone.phoneNumberFormat();
      participants.push({id,name,email,phone});

    }
  return {
      participants:participants,
    }

  },
  addNewParticipant(newParticipant){
    var arr = this.state.participants;
    arr.push(newParticipant)
    this.setState({
      participants:arr
    })

  },
  removeParticipant(i){
    console.log('Removing comment:' + i);
    var arr = this.state.participants;
    arr.splice(i,1);
    this.setState({
      participants:arr
    })

  },
  updateParticipant(newText,i){
    console.log("Updating comment:");
    var arr = this.state.participants;
    arr[i] = newText;
    this.setState({
      participants:arr
    })

  },
  cancelUpdate(){
    var arr = this.state.participants;
    this.setState({
      participants:arr
    })
  },
  sortTableByName(){
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  },
  eachParticipants(participant,i){
      let name = participant.name;
      let email=participant.email;
      let phone = participant.phone;
      console.log(name,email,phone)
    return(
      <Participant
      key = {i}
      index = {i}
      participant={participant}
      onEdit ={this.updateParticipant}
      onDelete = {this.removeParticipant}
      onSave = {this.updateParticipant}
      onCancel ={this.cancelUpdate}> </Participant>)
},

  render(){
    return(
      <div>
      <AddParticipant onAdd = {this.addNewParticipant}/>
      <table className = "participants add-participant partipant-table" id = "myTable">
          <thead>
              <tr>
                <th onClick ={this.sortTableByName} className = "participant_info"><a href ="#"> Name <i className="fa fa-arrow-down" aria-hidden="true"></i></a></th>
                <th className = "participant_info">E-mail address</th>
                <th className = "participant_info">Phone number</th>
                <th className = "participant_info"></th>
              </tr>
          </thead>
          <tbody>
            {this.state.participants.map(this.eachParticipants)}
          </tbody>
      </table>
      </div>

    );
  }
});
// module.exports = Participants;
export default Participants;
