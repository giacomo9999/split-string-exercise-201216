import React from "react";
import CharComponent from "./CharComponent";

const validationComponent = (props) => {
  let message;
  let charComponents = "";

  props.wordLength >= 5
    ? (message = "Text long enough")
    : (message = "Text too short");

  if (props.wordLength >= 5) {
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
