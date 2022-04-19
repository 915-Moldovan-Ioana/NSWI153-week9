import React from 'react';
import {Button} from 'reactstrap';

const Decrease = (props) =>{
  return (
    <div>
      <h3>Decrease</h3>
      <Button color="primary" outline counter={props.counter} onClick={() => {props.handler()}}>Decrease</Button>
      <h1>{props.counter}</h1>
    </div>
  );
}

export default Decrease;
