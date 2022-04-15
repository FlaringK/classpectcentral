import ClasspectIcon from "../components/cpIcons/classpectIcon";
import React from "react";
import { useState } from "react";
import "./lookup.css"

import aspectClasses from "../components/JSONs/aspectsClasses.json"
import Dropdown from "../components/lookup/dropdown";


const Lookup = (props) => {
  let queryParams = new URLSearchParams(window.location.search);

  const aspectList = aspectClasses.aspects
  const classList = aspectClasses.classes

  const [ aspect, setAspect ] = useState(queryParams.get('aspect'))
  const [ Cclass, setCclass ] = useState(queryParams.get('class'))

  const testclick = () => {
    setAspect("light")
  }

  return ( 
    <div id="classpectLookup" className="main">
      <div id="classpectSelected">
        <ClasspectIcon aspect={ aspect } class={ Cclass } />
        <div>
          The <strong>{ Cclass ? Cclass : "Null" }</strong> <br />
          of <strong onClick={testclick}>{ aspect ? aspect : "Null" }</strong>
        </div>
      </div>

      <div id="classpectInfo">
        <div id="aspect">
          <Dropdown select={(aspect) => setAspect(aspect)} list={aspectList.map(e => e.name)} />
        </div>
        <div id="class">
          <Dropdown select={(Cclass) => setCclass(Cclass)} list={classList.map(e => e.name)} />
        </div>
      </div>
    </div>
   );
}
 
export default Lookup;