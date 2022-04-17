import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return ( 
    <div id="header">
      <h1>CLASSPECT CENTRAL</h1>
      <div id="navbar">
        <ul>
          <li><Link to="/classpectcentral/">Home</Link></li>
          <li><Link to="/classpectcentral/lookup">Classpect Lookup</Link></li>
          <li><Link to="/classpectcentral/session">Random Session</Link></li>
          <li><Link to="/classpectcentral/credits">Credits</Link></li>
        </ul>
      </div>
    </div>
   );
}
 
export default Navbar;