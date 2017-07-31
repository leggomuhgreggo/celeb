import React, { Component } from "react";
import Header from "./components/Header/Header";
import SiteWrap from "./components/SiteWrap/SiteWrap";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import { Button } from "react-native";
import DrawDeck from "./deck.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      celeb: "Celebrity",
      disease: "Health Condition"
    };

    this.celebDeck = new DrawDeck(require("./packs/celebs.js"));
    this.diseaseDeck = new DrawDeck(require("./packs/diseases.js"));
  }

  draw() {
    let newState = {
      celeb: this.celebDeck.draw(),
      disease: this.diseaseDeck.draw()
    };

    this.setState(newState);
  }

  render() {
    return (
      <SiteWrap>
        <Header />
        <Container>
          <Row>
            {this.state.celeb} with {this.state.disease}
          </Row>

          <Row>
            <Button
              onPress={this.draw.bind(this)}
              title="Pair"
              accessibilityLabel="Click to pair celebrity with disease"
            />
          </Row>
        </Container>
      </SiteWrap>
    );
  }
}

export default App;
