//imports
import React, { Component } from "react";
import "./App.css";
import { Player1 } from "./Components/Player1";
import { Player2 } from "./Components/Player2";
import Header from "./Components/Header";

class App extends Component {
  //states used for dispaling buttons, correct is
  constructor() {
    super();
    this.state = {
      game: false,
      answer: false,
      p2: true,
      p1: true,
      head: true,
    };
  }

  render() {
    //names of the buttons change
    const buttonText = this.state.game ? "Quit Game" : "Player 1";
    const bT2 = this.state.answer ? "Home" : "Player 2";

    //returns the start screen, allows to select player 1 or player 2
    return (
      <div className="App">
        <h2
          //displays the name of game
          className="App-name"
          style={{
            margin: 0,
          }}
        >
          {" "}
          Doozle
        </h2>

        {
          //sees if header should be displayed
          this.state.head ? (
            <Header ask={"Choose player 1 for game and player 2 for helper"} />
          ) : null
        }

        {
          //displays player 1
          this.state.game ? <Player1 /> : null
        }

        {
          //displays button for player 1, toggles visibility of other buttons
          this.state.p2 ? (
            <button
              class={this.state.game ? "buttonsmall button1" : "button button2"}
              onClick={() => {
                this.setState({ game: !this.state.game });
                this.setState({ p1: !this.state.p1 });
                this.setState({ head: !this.state.head });
              }}
            >
              {buttonText}
            </button>
          ) : null
        }

        {
          //displays player 2
          this.state.answer ? <Player2 /> : null
        }
        {
          //displays button for player 1, toggles visibility of other buttons
          this.state.p1 ? (
            <button
              class="button button2"
              onClick={() => {
                this.setState({ answer: !this.state.answer });
                this.setState({ p2: !this.state.p2 });
                this.setState({ head: !this.state.head });
              }}
            >
              {bT2}
            </button>
          ) : null
        }
      </div>
    );
  }
}

export default App;
