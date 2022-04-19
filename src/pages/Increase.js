import React from 'react';
import {Button} from 'reactstrap';

const Increase = (props) =>{
  return (
    <div>
      <h3>Increase</h3>
      <Button counter={props.counter} onClick={() => {props.handler()}}>Increase</Button>
      <h1>{props.counter}</h1>
    </div>
  );
}
export default Increase;
