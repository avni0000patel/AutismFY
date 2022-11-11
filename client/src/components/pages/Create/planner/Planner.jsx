import React from "react";
import "./planner.css";
import brush from "../../../../../src/assets/images/brush.png";
import dressed from "../../../../../src/assets/images/dressed.png";
import bed from "../../../../../src/assets/images/bed.png";
import breakfast from "../../../../../src/assets/images/breakfast.png";
import reading from "../../../../../src/assets/images/reading.png";
import math from "../../../../../src/assets/images/math.png";

export default function Planner() {
  const styles = {
    container: {
      width: "1000px",
      backgroundColor: "white",
      height: "330px",
      display: "flex",
      aligmItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div className="planner" id="planner">
      <h1 className="header">Planner</h1>
      <div className="container" style={styles.container}>
        <div className="box1">
          Brush teethttttt
          <div>
            <img className="brush" src={brush} alt="" />
          </div>
        </div>
        <div className="box2">
          Get dressed
          <div>
            <img className="dressed" src={dressed} alt="" />
          </div>
        </div>
        <div className="box3">
          Make bed
          <div>
            <img className="bed" src={bed} alt="" />
          </div>
        </div>
        <div className="box4">
          Breakfast
          <div>
            <img className="breakfast" src={breakfast} alt="" />
          </div>
        </div>
        <div className="box5">
          Reading
          <div>
            <img className="reading" src={reading} alt="" />
          </div>
        </div>
        <div className="box6">
          Math exercise
          <div>
            <img className="math" src={math} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
