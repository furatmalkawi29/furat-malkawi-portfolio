import React, {useEffect} from 'react'
import arrowDown from '../assets/images/down-arrow.png'
import $ from "jquery";

export default function ArrowUp(props) {

 var topOfOthDiv;

  useEffect(() => {
       topOfOthDiv = $(props.showArrowAt).offset().top;
       $("#arrow-up").hide(); //hide div initially
  }, []);


    $(window).on("scroll",function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#arrow-up").show(); //reached the desired point -- show div
          }
        else{
            $("#arrow-up").hide(); //else above the desired point -- hide div
          }
    });
        <a id="arrow-up" href="#navbar"><img className="arrow-up" src={arrowDown} alt=""/></a>

  return (
    <>    
      <a id="arrow-up" href="#navbar"><img className="arrow-up" src={arrowDown} alt=""/></a>
    </>
  )
}
