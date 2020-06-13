//imports
import React from "react";
import { MemoryAns } from "./MemoryAns";
import { WrongScreen } from "./WrongScreen";
export class Memory extends React.Component {
  //states are used to hold data, keep track of the round, and tracks if you have lost
  state = {
    one: Math.round(Math.random() * 3 + 1),
    two: Math.round(Math.random() * 3 + 1),
    three: Math.round(Math.random() * 3 + 1),
    four: Math.round(Math.random() * 3 + 1),
    num: 1,
    lose: false,
  };

  //goes to next round
  addNum = () => {
    if (this.state.num < 4) {
      this.setState({
        num: this.state.num + 1,
      });
    }
  };

  //tells component player1 that it can move on to the next game
  whenWin = () => {
    {
      this.props.triggerParentUpdate();
    }
  };

  //tells component player1 that you have lost so it stops displaying the timer and sends to losescreen
  loseGame = () => {
    this.setState({
      lose: true,
    });
    {
      this.props.triggerParentUpdateTwo();
    }
  };

  render() {
    let curNum = this.state.one;
    if (this.state.num === 2) {
      curNum = this.state.two;
    } else if (this.state.num === 3) {
      curNum = this.state.three;
    } else if (this.state.num === 4) {
      curNum = this.state.four;
    }

    //code to create correct answers based off of the random numbers
    let ans1 = 0;
    let ans2 = 0;
    let ans3 = 0;
    let ans4 = 0;
    if (this.state.one === 1) {
      ans1 = 2;
    } else if (this.state.one === 2) {
      ans1 = 2;
    } else if (this.state.one === 3) {
      ans1 = 1;
    } else if (this.state.one === 4) {
      ans1 = 3;
    }

    if (this.state.two === 1) {
      ans2 = 4;
    } else if (this.state.two === 2) {
      ans2 = ans1;
    } else if (this.state.two === 3) {
      ans2 = 2;
    } else if (this.state.two === 4) {
      ans2 = ans1 + 1;
    }

    if (this.state.three === 1) {
      ans3 = ans1;
    } else if (this.state.three === 2) {
      ans3 = ans2;
    } else if (this.state.three === 3) {
      ans3 = 3;
    } else if (this.state.three === 4) {
      ans3 = 4;
    }

    if (this.state.four === 1) {
      ans4 = this.state.one;
    } else if (this.state.four === 2) {
      ans4 = this.state.two;
    } else if (this.state.four === 3) {
      ans4 = this.state.three;
    } else if (this.state.four === 4) {
      ans4 = 2;
    }

    // createing the strings that your input will be comapred against
    const s1 = ans1 + "";
    const s2 = ans2 + " " + ans1;
    const s3 = ans3 + " " + ans2 + " " + ans1;
    const s4 = ans4 + " " + ans3 + " " + ans2 + " " + ans1;

    return (
      <div className="App-game">
        {this.state.lose ? (
          <WrongScreen />
        ) : (
          <div>
            <h1
              style={{
                margin: 0,
              }}
            >
              {" "}
              stage {this.state.num}
            </h1>
            <h2>
              {
                //displays the curent round
                curNum
              }
            </h2>
            <div>
              <MemoryAns
                //sends variables from parent class to child class
                onSubmit={this.addNum}
                num={this.state.num}
                s1={s1}
                s2={s2}
                s3={s3}
                s4={s4}
                correct={this.state.correct}
                triggerParentUpdate={this.loseGame}
                triggerParentUpdateTwo={this.whenWin}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
