import React, { useCallback } from "react";
import {useNavigate} from 'react-router-dom';
import aspectClasses from "../JSONs/aspectsClasses.json"

const ClasspectIcon = (props) => {
  const aspectList = aspectClasses.aspects.map(e => e.name)
  const classList = aspectClasses.classes.map(e => e.name)

  const iconAspect = aspectList.includes(props.aspect) ? props.aspect : "null"
  const iconClass = classList.includes(props.class) ? props.class : "null"

  const navigate = useNavigate();
  const url = "/classpectcentral/lookup/?class=" + iconClass + "&aspect=" + iconAspect
  const routeNewPage = useCallback(() => navigate(url, {replace: true}), [navigate]);
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    routeNewPage()
  }

  const itemNo = {
    "--itemNo": props.itemNo
  }

  return ( 
    <div className="classpectWrap"   
    // @ts-ignore
    style={itemNo ? itemNo : {}}>
      <div className={"classpect " + iconClass + " " + iconAspect } onClick={handleOnClick} > </div>
      <div className="classpectInfo">The {iconClass} of {iconAspect} </div>
    </div>
   );
}
 
export default ClasspectIcon;