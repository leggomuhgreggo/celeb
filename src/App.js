import React, { Component } from 'react';
import './App.css';

import DrawDeck from './deck.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      celeb: 'Celebrity',
      disease: 'Health Condition',
    };

    this.celebDeck = new DrawDeck(require('../packs/celebs.js'));
    this.diseaseDeck = new DrawDeck(require('../packs/diseases.js'));
  }

  draw() {
    let newState = {
      celeb: this.celebDeck.draw(),
      disease: this.diseaseDeck.draw(),
    };

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Celebrity Hospital</h2>
        </div>
        <div className="App-body">
          <div className="pairing">
            {this.state.celeb} with {this.state.disease}
          </div>
          <div className="draw-button">
            <button onClick={this.draw.bind(this)}>Pair!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
