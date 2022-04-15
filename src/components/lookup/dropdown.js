import React from "react";

const Dropdown = (props) => {
  return ( 
    <div>
      { props.list.map(e => <div onClick={() => { props.select(e)} }> { e } </div> ) }
    </div>
   );
}
 
export default Dropdown;