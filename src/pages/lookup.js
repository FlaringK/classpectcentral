import ClasspectIcon from "../components/cpIcons/classpectIcon";
import React from "react";
import { useState } from "react";
import "./lookup.css"

import aspectClasses from "../components/JSONs/aspectsClasses.json"
import Dropdown from "../components/lookup/dropdown";
import InfoBox from "../components/lookup/infobox";


const Lookup = (props) => {
  let queryParams = new URLSearchParams(window.location.search);

  const aspectList = aspectClasses.aspects
  const classList = aspectClasses.classes

  const [ aspect, setAspect ] = useState(queryParams.get('aspect'))
  const [ Cclass, setCclass ] = useState(queryParams.get('class'))

  const selectedAspect = aspectList.filter(obj => obj.name === aspect)[0]
  const selectedClass = classList.filter(obj => obj.name === aspect)[0]

  return ( 
    <div id="classpectLookup" className="main">
      <h1>Classpect Lookup</h1>
      <div id="classpectSelected">
        <ClasspectIcon aspect={ aspect } class={ Cclass } />
        <div>
          The <strong>{ Cclass ? Cclass : "null" }</strong> <br />
          of <strong>{ aspect ? selectedAspect.name : "null" }</strong>
        </div>
      </div>

      <h2>INTERPRETATIONS</h2>
      <div id="classpectInfo">
        <div id="aspect">
          <h4>Aspect</h4>
          <Dropdown select={(aspect) => setAspect(aspect)} list={aspectList.map(e => e.name)} selected={aspect ? aspect : "null"} />
          { selectedAspect ? selectedAspect.info.map(e => <InfoBox title={e.author} content={e.text} />) : "" }
        </div>
        <div id="class">
          <h4>Class</h4>
          <Dropdown select={(Cclass) => setCclass(Cclass)} list={classList.map(e => e.name)} selected={Cclass ? Cclass : "null"} />
        </div>
      </div>
    </div>
   );
}
 
export default Lookup;