import React, { Component } from "react";
import Header from "./components/Header/Header";
import SiteWrap from "./components/SiteWrap/SiteWrap";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import { Button, View } from "react-native";
import styled from "styled-components";
import DrawDeck from "./deck.js";

const Pair = styled(View)`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

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
            <Pair>
              {this.state.celeb} with {this.state.disease}
            </Pair>
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
