import React, { useEffect, useState } from "react";
import ClasspectIcon from "./classpectIcon";
import ClasspectOrbit from "./classpectOrbit";

const ClasspectOfDay = (props) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(2009, 4, 13);

  const cotdIndex = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));

  const [cotd, setCotd] = useState(["null", "null"]);
  useEffect(() => {
    // code copied from postman
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    // @ts-ignore
    fetch("https://erijancentral.com/api/v1/classpects/cotd/", { "seed": cotdIndex })
    .then(response => response.json())
    .then(result => {
      var classpect = [result["todayscspect"]["class"]["name"].toLowerCase(), result["todayscspect"]["aspect"]["name"].toLowerCase()]
      console.log(classpect)
      setCotd(classpect)
    })
    .catch(error => console.log('error', error));
  }, [])

  return ( 
    <div id="classpectday">
      <div id="classpectdayinfo">
        <h4 style={{ maxWidth: "60%", margin: "auto" }}>The classpect of the day is:</h4>
        <ClasspectIcon class={cotd[0]} aspect={cotd[1]} />
        <h3>The {cotd[0].toUpperCase()} of {cotd[1].toUpperCase()}</h3>
      </div>
      <ClasspectOrbit classpects={props.classpects}/>
  </div>
   );
}
 
export default ClasspectOfDay;