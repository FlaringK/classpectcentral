import React, { useState } from "react";
import Dropdown from "../components/lookup/dropdown";
import ClasspectHighlight from "../components/cpIcons/classpectHighlight";
import aspectClasses from "../components/JSONs/aspectsClasses.json"
import "./randomSession.css"

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
  const [ showMoons, setShowMoons ] = useState(false)
  const [ showSession, setShowSession ] = useState(false)

  let randAspectList = shuffle(aspectClasses.aspects.map(e => e.name))

  switch (requiredAspects) {
    case "Space":
      while (!randAspectList.slice(0, players).includes("space")) {
        randAspectList = shuffle(randAspectList)
      }
      break
    case "Time and Space":
      while (!randAspectList.slice(0, players).includes("space") || !randAspectList.slice(0, players).includes("time")) {
        randAspectList = shuffle(randAspectList)
      }
      break
  }


  const randClassList = shuffle(aspectClasses.classes.map(e => e.name)).slice(0, players)
  let randSessionClasspects = randClassList.map((e, i) => [e, randAspectList[i]])

  return ( 
    <div id="randomSession" className="main">
      <h1>Random Session</h1>
      <div className="contentBox">
        This is a random session generator. There are of course, plenty of other applications that do a far better job of creating and even simulating a random sburb session. This tool is just a bit of fun to help visualise a story.
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

        <Dropdown list={["Yes", "No"]} title="Show Moons: " selected={showMoons ? "Yes" : "No"} select={(value) => { 
          setShowMoons(value == "Yes"); 
          setShowSession(false)
          }} />
        
        <button onClick={() => showSession ? setShowSession(false) : setShowSession(true) }>
          { showSession ? "Destory " : "Generate " } Session
        </button>
      </div>


      <div id="randomSessionRender" className={showMoons ? (Math.floor(Math.random() * 2) == 0 ? "prospitPriority" : "dersePriority") : "" } style={{
        height: "40em"
      }}>
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