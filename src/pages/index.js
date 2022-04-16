import React, { useEffect, useState } from "react";
import ClasspectHighlight from "../components/cpIcons/classpectHighlight";
import homeset from "../components/JSONs/homeset.json"
import "./index.css"

const Home = (props) => {
  const classpectSet = homeset[Math.floor(Math.random() * homeset.length)]

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // code copied from postman
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  //   fetch("https://aeich.pythonanywhere.com/api/v1/classpects/classpect/?name=Seer&type=class")
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // });

  return ( 
    <div id="Home" className="main">
      <div id="setName"> {classpectSet.setname} </div>
      <ClasspectHighlight 
        title="The classpect of the day is:"
        content="Not working right now! Sorry"
        highlight={["heir", "breath"]}
        classpects={classpectSet.set}
      />
      
    </div>
   );
}
 
export default Home;