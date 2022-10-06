import React from "react";
import "../styles/HeaderBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function HeaderBox(){
    return(
        <>
        <div className="HeaderBox">
            <div className="BlackHeader">
                <h1 id="heading">New York City, NY, United States As of 04:37 EDT</h1>
            </div>
            <div className="temperature">
            <h1 className="firstheading">21 <p>&#176;</p></h1>
            <h1 className="secondheading">Clear</h1>
            <h1 className="thirdheading">Day 30<sup>o</sup>/ Night 20<sup>o</sup></h1>
            </div>          
            <FontAwesomeIcon className="moon" icon={faMoon}></FontAwesomeIcon>  
        </div>

        </>
    )
}
