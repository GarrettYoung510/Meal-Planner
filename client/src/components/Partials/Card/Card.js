import React from "react";

const Card = props => {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">{props.body1}</h5>
        <hr />
        <p className="card-text">{props.body2}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
