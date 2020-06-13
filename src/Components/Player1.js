//This is run when player one is selected
//imports react
import React from "react";
//imports needed programs into polayer1
import { Cipher } from "./Cipher";
import { Memory } from "./Memory";
import { Timer } from "./Timer";
import { Luke } from "./Luke";
import { EndGame } from "./EndGame";

export class Player1 extends React.Component {
  //sets state of neded variables
  state = {
    time: true,
    select: 0,
    gamesWon: -1,
    lose: false,
  };
  //checks to see if the dimer is over
  timerDone = () => {
    this.setState({
      time: false,
    });
  };
  //randomly selects puzzle to run
  gameRun = () => {
    this.setState({
      //randomly generates number
      select: Math.round(Math.random() * 2 + 1),
      //adds one to games won (starts at -1 so when it is run the first time it will be at 0)
      gamesWon: this.state.gamesWon + 1,
    });
  };
  //runs when an answer is incorect
  loseGame = () => {
    this.setState({
      lose: true,
    });
  };

  render() {
    //runs while there is still time in the timer
    while (this.state.time === true) {
      return (
        <div className="App-game">
          <div>
            {this.state.select !== 0 && this.state.lose === false ? (
              //sets length of the timer to 3 minutes
              <Timer
                minutes={2}
                seconds={5}
                //updates parent when timer is done
                triggerParentUpdate={this.timerDone}
              />
            ) : null}
          </div>
          <div>
            {this.state.select === 0 ? (
              //shows instrustions
              <div>
                <h3>
                  {" "}
                  Work together to complete as many puzzles as possible within
                  the time limit
                </h3>

                <button
                  class="button button1"
                  style={{
                    borderWidth: 5,
                    borderColor: "rgba(0,0,0,4.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 200,
                    height: 200,

                    borderRadius: 100,
                    fontSize: 30,
                  }}
                  onClick={this.gameRun}
                >
                  Start Game
                </button>
              </div>
            ) : null}

            {this.state.select === 1 ? (
              //Runs cipher if number selected is 1
              <Cipher
                //trigers updates to parent funtions
                triggerParentUpdate={this.gameRun}
                triggerParentUpdateTwo={this.loseGame}
              />
            ) : null}
            {this.state.select === 2 ? (
              //rund memory if number generated is two
              <Memory
                //trigers updates to parent funtions
                triggerParentUpdate={this.gameRun}
                triggerParentUpdateTwo={this.loseGame}
              />
            ) : null}
            {this.state.select === 3 ? (
              //runs cololur if 3 is randomly generated
              <Luke
                //trigers updates to parent funtions
                triggerParentUpdate={this.gameRun}
                triggerParentUpdateTwo={this.loseGame}
              />
            ) : null}
          </div>
        </div>
      );
    }
    //runs endgame once the timer reasches zero
    return <EndGame gamesWon={this.state.gamesWon} />;
  }
}
