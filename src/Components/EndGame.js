//Code is run when the timer runs out
//Imports
import React from "react";

export class EndGame extends React.Component {
  render() {
    //Gets variable from player1 file
    let gamesWon = this.props.gamesWon;
    return (
      //generates text aswell as displaying games won
      <div className="App-game">
        <h2
          style={{
            margin: 0,
          }}
        >
          Times Up!{" "}
        </h2>
        <h2
          style={{
            margin: 0,
          }}
        >
          you were able to complete
        </h2>
        <h1
          style={{
            fontSize: 50,
            margin: 0,
          }}
        >
          {gamesWon}
        </h1>
        <h2
          style={{
            margin: 0,
          }}
        >
          puzzels
        </h2>
      </div>
    );
  }
}
