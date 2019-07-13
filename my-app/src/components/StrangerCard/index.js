import React from "react";
import "./style.css";


function StrangerCard(props) {
  return (
    
      <div className="card">
        <div className="imgContainer">
          <img onClick={props.increment} alt={props.name} src={props.image} />
        </div>
      </div>
   
  );
}

export default StrangerCard;
