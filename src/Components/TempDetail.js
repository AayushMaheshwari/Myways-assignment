import React from "react";
import "../styles/TempDetail.css";
// import sun from "../styles/sun.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function TempDetail(){
    return(
        <>
        <div className="whitebox">
            <div className="heading"><h1>Today's Forecast for New York City, NY, United States</h1></div>
            <div className="daily">
                <div className="morning">
                    <h4>Morning</h4>
                    <h3>25&#176;</h3>
                    {/* <img src={sun} alt={sun}/> */}
                    <FontAwesomeIcon className="sun" icon={faSun}></FontAwesomeIcon>
                    <h2>0%</h2>
                </div>
                <div className="morning">
                    <h4>Morning</h4>
                    <h3>25&#176;</h3>
                    {/* <img src={sun} alt={sun}/> */}
                    <FontAwesomeIcon className="sun" icon={faSun}></FontAwesomeIcon>
                    <h2>0%</h2>
                </div>
                <div className="morning">
                    <h4>Morning</h4>
                    <h3>25&#176;</h3>
                    {/* <img src={sun} alt={sun}/> */}
                    <FontAwesomeIcon className="sun" icon={faSun}></FontAwesomeIcon>
                    <h2>0%</h2>
                </div>
                <div className="morning">
                    <h4>Morning</h4>
                    <h3>25&#176;</h3>
                    {/* <img src={sun} alt={sun}/> */}
                    <FontAwesomeIcon className="sun" icon={faSun}></FontAwesomeIcon>
                    <h2>0%</h2>
                </div>
            </div>
        </div>
        </>
    )
}