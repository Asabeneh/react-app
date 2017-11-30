import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

import faker from 'faker';
import TitleBar from './TitleBar';
import Participants from './Participants';
import './index.css';

const ParticipantsBoard = createReactClass({
  render(){
    return(
      <div className ="wrapper">
      <TitleBar title ="Nord Software"/>
      <div className ="title"> <h3> List of Participants</h3></div>
        <Participants/>
      </div>
    );
  }
});

ReactDOM.render(<ParticipantsBoard/>,document.getElementById('root'))
