import React from "react";
import CharComponent from "./CharComponent";

const validationComponent = (props) => {
  let message = "Text too short";
  let charComponents = "";

  if (props.wordLength >= 5) {
    message = "Text long enough";
  }

  if (message === "Text long enough") {
    charComponents = props.word
      .split("")
      .map((entry, index) => (
        <CharComponent
          letter={entry}
          index={index}
          clicked={() => props.handleDeleteLetter(index)}
        />
      ));
  }

  return (
    <div className="container-inner">
      <h2>{message}</h2>
      {charComponents}
    </div>
  );
};

export default validationComponent;
