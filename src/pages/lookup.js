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

  const [ aspect, setAspect ] = useState(queryParams.get('aspect') ? queryParams.get('aspect') : "breath")
  const [ Cclass, setCclass ] = useState(queryParams.get('class') ? queryParams.get('class') : "heir")

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

      <div className="contentBox">
        If you'd like to add your own interpretation, or you know of an interpretation that would fit well here, feel free to DM my on discord! ( FlaringK#4275 on Discord )
      </div>
    </div>
   );
}
 
export default Lookup;