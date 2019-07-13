import React from "react";
import "./style.css";

function StrangerCard(props) {
  return (
    
      <div className="card">
        <div className="imgContainer">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
   
  );
}

export default StrangerCard;
