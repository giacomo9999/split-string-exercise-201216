import React, { Component } from "react";
import Validation from "./Validation";

class App extends Component {
  state = { word: "", wordLength: 0 };

  handleChange = (e) => {
    let inputWordLength = e.target.value.length;
    this.setState({ word: e.target.value, wordLength: inputWordLength });
  };

  handleDeleteLetter = (letterIndex) => {
    let deletedLetterWord = this.state.word
      .split("")
      .filter((entry, index) => index !== letterIndex)
      .join("");
    this.setState({
      word: deletedLetterWord,
      wordLength: deletedLetterWord.length,
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I Am The App</h1>
        <div className="container-inner">
          <input
            type="text"
            value={this.state.word}
            onChange={this.handleChange}
          />

          <h3>Word Length: {this.state.wordLength}</h3>
        </div>
        <Validation
          word={this.state.word}
          wordLength={this.state.wordLength}
          handleDeleteLetter={this.handleDeleteLetter}
        />
      </div>
    );
  }
}

export default App;
