import React from "react";
import ClasspectHighlight from "../components/cpIcons/classpectHighlight";
import homeset from "../components/JSONs/homeset.json"

const Home = (props) => {
  const classpectSet = homeset[Math.floor(Math.random() * homeset.length)]

  return ( 
    <div id="Home" className="main">
      <div> {classpectSet.setname} </div>
      <ClasspectHighlight 
        title=""
        highlight={["heir", "breath"]}
        classpects={classpectSet.set}
      />
      
    </div>
   );
}
 
export default Home;