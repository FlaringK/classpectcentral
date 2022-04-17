import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClasspectOfDay from "../components/cpIcons/classpectOfDay";
import ClasspectHighlight from "../components/cpIcons/classpectHighlight";
import homeset from "../components/JSONs/homeset.json"
import "./index.css"

const Home = (props) => {
  const classpectSet = homeset[Math.floor(Math.random() * homeset.length)]

  const location = window.location.href
  const page = window.location.href.split("/?/").pop()

  // const navigate = useNavigate();
  // const routeNewPage = useCallback(() => navigate("/classpectcentral/" + page, {replace: true}), [navigate]);

  // if (location.includes("/?/")) {
  //   routeNewPage()
  // }

  return ( 
    <div id="Home" className="main">
      <div className="contentBox">
        Hey You! As you can probably tell, this site is incomplete! There's a few things I'd like to add, and I'm not quite happy with some of the Class Icons. If you've got any idea or feedback for anything you see here, let me know on discord! ( FlaringK#4275 )
      </div>
      <div style={{ position: "relative" }}>
        <div id="setName"> {classpectSet.setname} </div>
        <ClasspectOfDay 
          classpects={classpectSet.set}
        />
      </div>
      
    </div>
   );
}
 
export default Home;