import React from "react";
import "./classpects.css"

const ClasspectIcon = (props) => {
  const itemNo = {
    "--itemNo": props.itemNo
  }
  return ( 
    <div className={"classpect " + props.aspect + " " + props.class } 
// @ts-ignore
    style={itemNo ? itemNo : {}}>
      
    </div>
   );
}
 
export default ClasspectIcon;