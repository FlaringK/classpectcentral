import React, { useCallback } from "react";
import {useNavigate} from 'react-router-dom';
import "./classpects.css"
import aspectClasses from "../JSONs/aspectsClasses.json"

const ClasspectIcon = (props) => {
  const aspectList = aspectClasses.aspects.map(e => e.name)
  const classList = aspectClasses.classes.map(e => e.name)

  const iconAspect = aspectList.includes(props.aspect) ? props.aspect : "null"
  const iconClass = classList.includes(props.class) ? props.class : "null"

  const navigate = useNavigate();
  const url = "/lookup/?class=" + iconClass + "&aspect=" + iconAspect
  const handleOnClick = useCallback(() => navigate(url, {replace: true}), [navigate]);

  const itemNo = {
    "--itemNo": props.itemNo
  }

  return ( 
    <div className={"classpect " + iconAspect + " " + iconClass } onClick={handleOnClick} 
// @ts-ignore
    style={itemNo ? itemNo : {}}>
      
    </div>
   );
}
 
export default ClasspectIcon;