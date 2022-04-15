import React from "react"
import { useState, useEffect } from "react"

const Clock = () => {
  const [time, setTime] = useState()

  useEffect(() => {
    setInterval(() => {
      let timeNow = new Date().toLocaleTimeString('en-US', {hour12: false});
      // @ts-ignore
      setTime(timeNow)
    }, 1000)
  }, [])
  
  return ( 
    <span>{ time }</span>
  );
}
 
export default Clock;