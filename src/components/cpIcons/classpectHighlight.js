import React from "react";
import ClasspectIcon from "./classpectIcon";
import ClasspectOrbit from "./classpectOrbit";

const ClasspectHighlight = (props) => {
  return ( 
    <div id="classpectday">
      <div id="classpectdayinfo">
        <h3>{props.title}</h3>
        <ClasspectIcon class={props.highlight[0]} aspect={props.highlight[1]} />
        <h2>The {props.highlight[0].toUpperCase()} of {props.highlight[1].toUpperCase()}</h2>
      </div>
      <ClasspectOrbit classpects={props.classpects}/>
  </div>
   );
}
 
export default ClasspectHighlight;