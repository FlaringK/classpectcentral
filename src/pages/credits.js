import React from "react";

const Credits = (props) => {
  return ( 
    <div id="credits" className="main">
      <h3>Credits</h3>
      <div className="contentBox">
        

        <div className="contentSection">
          <h5>People</h5>
          <ul>
            <li><a href="https://twitter.com/EtchJetty">EtchJetty</a> for being a huge inspration for this site, <a href="https://erijancentral.com/api"> and her cool as shit classpect api</a></li>
            <li><a href="">joyest_day</a> for helping a ton with the Class icons</li>
          </ul>
        </div>

        <div className="contentSection">
          <h5>Recouces</h5>
          <ul>
            <li>Created with ReactJS</li>
            <li><a href="https://meggies-effort.myshopify.com/products/aspect-symbols-homestuck">Aspect SVGs by Meggie's Effort</a></li>
            <li><a href="https://fontstruct.com/fontstructions/download/860118">Fontstuck Extended</a></li>
          </ul>
        </div>

      </div>
    </div>
   );
}
 
export default Credits;