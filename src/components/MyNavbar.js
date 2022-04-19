import React from 'react';
import {  Link } from "react-router-dom";

const MyNavbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/first">FirstNavigationPage</Link>
    </li>
    <li>
      <Link to="/second">SecondNavigationPage</Link>
    </li>
    <li>
      <Link to="/increase">Increase</Link>
    </li>
    <li>
      <Link to="/decrease">Decrease</Link>
    </li>
  </div>
  );
}
export default MyNavbar;