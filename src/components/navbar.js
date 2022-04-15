import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return ( 
    <div id="header">
      <h1>CLASSPECT SHIT</h1>
      <div id="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lookup">Classpect Lookup</Link></li>
          <li><Link to="/session">Random Session</Link></li>
        </ul>
      </div>
    </div>
   );
}
 
export default Navbar;