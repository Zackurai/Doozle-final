//Runs code for colours puzzle
//imports react
import React from "react";
//IMports Cans to run functions
import { Cans } from "./Cans";
//Imports wrong screem to display when an answer iswrong
import { WrongScreen } from "./WrongScreen";
export class Luke extends React.Component {
  state = { lose: false };
  //tells player1 that the player has lost

  loseGame = () => {
    this.setState({
      //sets state to true
      lose: true,
    });
    {
      //trigers update in player1
      this.props.triggerParentUpdateTwo();
    }
  };
  //tells player1 that the player has gotten the answer corect
  whenWin = () => {
    {
      //trigers update in player1
      this.props.triggerParentUpdate();
    }
  };

  render() {
    //holds the five colours, used to select word aswell as colour of the word
    const randcword = ["green", "blue", "red", "orange", "pink"];
    //randomly generates number
    var cword = Math.round(Math.random() * 4);
    //gets words text
    let ctext = randcword[cword];
    //randomly generates number
    var cnum = Math.round(Math.random() * 4);
    //gets words colour
    let ccolour = randcword[cnum];
    var ans = "";
    //following if statnemts tell the program what the answer is based of the text and colour
    if (ctext === "green") {
      if (ccolour === "green") {
        ans = "blue";
      } else if (ccolour === "blue") {
        ans = "green";
      } else if (ccolour === "red") {
        ans = "pink";
      } else if (ccolour === "orange") {
        ans = "red";
      } else if (ccolour === "pink") {
        ans = "orange";
      }
    } else if (ctext === "blue") {
      if (ccolour === "green") {
        ans = "green";
      } else if (ccolour === "blue") {
        ans = "pink";
      } else if (ccolour === "red") {
        ans = "red";
      } else if (ccolour === "orange") {
        ans = "orange";
      } else if (ccolour === "pink") {
        ans = "blue";
      }
    } else if (ctext === "red") {
      if (ccolour === "green") {
        ans = "orange";
      } else if (ccolour === "blue") {
        ans = "red";
      } else if (ccolour === "red") {
        ans = "blue";
      } else if (ccolour === "orange") {
        ans = "pink";
      } else if (ccolour === "pink") {
        ans = "green";
      }
    } else if (ctext === "orange") {
      if (ccolour === "green") {
        ans = "blue";
      } else if (ccolour === "blue") {
        ans = "red";
      } else if (ccolour === "red") {
        ans = "orange";
      } else if (ccolour === "orange") {
        ans = "green";
      } else if (ccolour === "pink") {
        ans = "pink";
      }
    } else if (ctext === "pink") {
      if (ccolour === "green") {
        ans = "pink";
      } else if (ccolour === "blue") {
        ans = "orange";
      } else if (ccolour === "red") {
        ans = "green";
      } else if (ccolour === "orange") {
        ans = "blue";
      } else if (ccolour === "pink") {
        ans = "red";
      }
    }

    return (
      <div>
        {this.state.lose ? (
          //runs wrong sceen if answer is incorect
          <WrongScreen />
        ) : (
          //sets colour of text
          <div>
            <div style={{ fontSize: 20, color: ccolour }}> {ctext} </div>
            <Cans
              //runs Cans to check if answer is corect
              ans={ans}
              triggerParentUpdate={this.loseGame}
              triggerParentUpdateTwo={this.whenWin}
            />
          </div>
        )}
      </div>
    );
  }
}
