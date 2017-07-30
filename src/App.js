import React, { Component } from "react";
import Header from "./components/Header/Header";
import { Button, View } from "react-native";
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
      <div>
        <Header />
        <View>
          {this.state.celeb} with {this.state.disease}
        </View>
        <Button
          onPress={this.draw.bind(this)}
          title="Pair"
          accessibilityLabel="Click to pair celebrity with disease"
        />
        {/*
          <Row>
            <Col>
              <div className="pairing">
                {this.state.celeb} with {this.state.disease}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="draw-button">
              </div>
            </Col>
          </Row>*/}
      </div>
    );
  }
}

export default App;
