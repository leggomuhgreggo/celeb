import React, { Component } from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';

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
      <div>
        <Container className="App">
          <Row><Col>
            <Jumbotron>
              <h2>Celebrity Hospital</h2>
            </Jumbotron>
          </Col></Row>
          <Row><Col>
            <div className="pairing">
              {this.state.celeb} with {this.state.disease}
            </div>
          </Col></Row>
          <Row><Col>
            <div className="draw-button">
              <Button onClick={this.draw.bind(this)}>Pair!</Button>
            </div>
          </Col></Row>
        </Container>
      </div>
    );
  }
}

export default App;
