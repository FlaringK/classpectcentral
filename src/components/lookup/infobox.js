import React from "react";

const InfoBox = (props) => {
  return ( 
    <div className="infoBlock">
      <div className="infoBlockTitle"> {props.title} </div>
      <div className="infoBlockTContent"> {props.content} </div>
    </div>
   );
}
 
export default InfoBox;