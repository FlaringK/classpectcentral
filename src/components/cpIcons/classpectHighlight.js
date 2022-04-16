import React from "react";
import ClasspectIcon from "./classpectIcon";
import ClasspectOrbit from "./classpectOrbit";

const ClasspectHighlight = (props) => {
  return ( 
    <div id="classpectday">
      <div id="classpectdayinfo">
        <h4 style={{ maxWidth: "60%", margin: "auto" }}>{props.title}</h4>
        <ClasspectIcon class={props.highlight[0]} aspect={props.highlight[1]} />
        <h3>{props.content}</h3>
      </div>
      <ClasspectOrbit classpects={props.classpects}/>
  </div>
   );
}
 
export default ClasspectHighlight;