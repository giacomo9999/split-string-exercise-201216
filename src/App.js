import React, { Component } from "react";

class App extends Component {
  state = { word: "", wordLength: 0 };

  getWordLength = () => {
    let wordLength = this.state.word.length;
    this.setState({ wordLength: wordLength });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I Am The App</h1>
        <div className="container-inner">
          <input type="text" onChange={this.getWordLength}>
            {this.state.word}
          </input>
        </div>
      </div>
    );
  }
}

export default App;
