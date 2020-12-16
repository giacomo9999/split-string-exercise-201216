import React from "react";

const charComponent = (props) => {
  return (
    <div className="container-inner">
      <h3 onClick={props.clicked}>{props.letter}</h3>
    </div>
  );
};

export default charComponent;
