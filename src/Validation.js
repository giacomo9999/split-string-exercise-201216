import React from "react";
import CharDisplay from "./CharDisplay";

const validation = (props) => {
  let message;
  let charComponents = "";

  props.wordLength >= 5
    ? (message = "Text long enough")
    : (message = "Text too short");

  if (props.wordLength >= 5) {
    charComponents = props.word
      .split("")
      .map((entry, index) => (
        <CharDisplay
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

export default validation;
