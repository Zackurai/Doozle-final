//Runs when an answer is incorect
//import
import React from "react";

export class WrongScreen extends React.Component {
  render() {
    return (
      //Displays text
      <div className="App-game">
        {" "}
        You got the wrong answer dummy better luck next time.
      </div>
    );
  }
}
