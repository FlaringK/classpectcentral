import React, { useState } from "react";
import "./dropdown.css"

const Dropdown = (props) => {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(open ? false : true)
  }

  return ( 
    <div className={"dropdown " + (open ? "open" : "closed")}>
      <div className="dropdownDisplay" onClick={toggleOpen}>
        { props.title } { props.selected }
      </div>
      <div className="dropdownList">
        <ul>
          { props.list.map(e => <li onClick={() => { props.select(e); setOpen(false) } }> 
              { e } 
            </li> 
          )}
        </ul>
      </div>
    </div>
   );
}
 
export default Dropdown;