import React, { useState } from "react";
import Dropdown from "../components/lookup/dropdown";
import ClasspectHighlight from "../components/cpIcons/classpectHighlight";
import aspectClasses from "../components/JSONs/aspectsClasses.json"

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const RandSession = (props) => {

  const [ players, setPlayers ] = useState(12)
  const [ requiredAspects, setRequiredAspects ] = useState("None")
  const [ showSession, setShowSession ] = useState(false)

  let randAspectList

  switch (requiredAspects) {
    case "Space":
      randAspectList = shuffle(aspectClasses.aspects.map(e => e.name).filter(e => e !== "space")).slice(0, players)
      randAspectList = shuffle(randAspectList.slice(1).concat(["space"]))
      break
    case "Time and Space":
      randAspectList = shuffle(aspectClasses.aspects.map(e => e.name).filter(e => e !== "space" && e !== "time")).slice(0, players)
      randAspectList = shuffle(randAspectList.slice(2).concat(["space", "time"]))
      break
    default:
      randAspectList = shuffle(aspectClasses.aspects.map(e => e.name)).slice(0, players)
      break;
  }

  const randClassList = shuffle(aspectClasses.classes.map(e => e.name)).slice(0, players)
  let randSessionClasspects = randClassList.map((e, i) => [e, randAspectList[i]])

  return ( 
    <div id="randomSession" className="main">
      <h1>Random Session</h1>
      <div className="contentBox">
        This is a random session generator
      </div>
      <div className="contentBox" id="sessionOptions">

        <Dropdown list={[2,3,4,5,6,7,8,9,10,11,12]} title="Players: " selected={players} select={(number) => { 
          setPlayers(number); 
          setShowSession(false)
          }} />

        <Dropdown list={["None", "Space", "Time and Space"]} title="Required Aspects: " selected={requiredAspects} select={(value) => { 
          setRequiredAspects(value); 
          setShowSession(false)
          }} />
        
        <button onClick={() => { setShowSession(true) }}>Show Session</button>
      </div>


      <div id="randomSessionRender" className={showSession ? "open" : "closed"}>
        { showSession ? <ClasspectHighlight 
          title="Main Character:"
          highlight={randSessionClasspects[0]}
          classpects={randSessionClasspects}
        /> : ""}
      </div>
      
    </div>
   );
}
 
export default RandSession;