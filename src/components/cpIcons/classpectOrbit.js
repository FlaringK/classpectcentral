import React from "react";
import ClasspectIcon from "./classpectIcon";
import "./classpects.css"

const ClasspectOrbit = (props) => {
  const items = {
    "--items": props.classpects.length
  }
  const icons = props.classpects.map((e, i) => 
    <ClasspectIcon aspect={e[0]} class={e[1]} itemNo={i} />
  )
  return ( 
    <div className="orbit" 
// @ts-ignore
    style={items}>
      { icons }
    </div>
   );
}
 
export default ClasspectOrbit;