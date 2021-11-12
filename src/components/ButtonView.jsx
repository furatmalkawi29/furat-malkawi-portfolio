import React, {useState} from 'react'
import { FiArrowUpRight } from "react-icons/fi";


export default function ButtonView(props) {
  const [animationClass, setAnimationClass] = useState("");
  const [btnColorClass, setBtnColorClass] = useState("");

  function enterHandle() {
    console.log("enter");
    setAnimationClass("icon-in");
    setBtnColorClass("text-in");
  }
  function leaveHandle() {
    console.log("leave");
    setAnimationClass("icon-out");
    setBtnColorClass("text-out");
  }

  let style ={
    margin:props.marginValue,
  }

  return (

    <div
    className={`view-button ${btnColorClass}`}
    onMouseEnter={enterHandle}
    onMouseLeave={leaveHandle} style={style}
  >
    <p>{props.buttonTxt}</p>
    <FiArrowUpRight className={animationClass} viewBox="0 0 20 20" />
  </div>
  )
}
