//generates the question for cipher aswell as runs the cipher answer code
//imports react
import React from "react";
//imports answer and wrong screen to be run later in program
import { Answer } from "./Answer";
import { WrongScreen } from "./WrongScreen";
export class Cipher extends React.Component {
  //stes state
  state = {
    lose: false,
  };
  //tells player1 that the player has lost
  loseGame = () => {
    this.setState({
      lose: true,
    });
    {
      //updates parent
      this.props.triggerParentUpdateTwo();
    }
  };
  //tells player1 that the player has completed the puzzle
  whenWin = () => {
    {
      //updates parent
      this.props.triggerParentUpdate();
    }
  };

  render() {
    var finishedCode = "";
    //holds alphabet
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    //holds strings to be randomly selected and turnes into a cipher
    const randString = [
      "luke",
      "coffee",
      "help",
      "small",
      "big",
      "medium",
      "light",
      "sonic",
      "mario",
      "olympic",
      "games",
      "winter",
      "summer",
      "fall",
      "spring",
      "autumn",
      "earth",
      "food",
      "rick",
      "and",
      "morty",
      "paint",
      "zoom",
      "ford",
      "tesla",
      "iphone",
      "samsung",
      "zack",
      "trudeau",
      "hello",
      "danforth",
      "lal",
      "ireland",
      "house",
      "home",
      "rory",
      "sam",
      "dog",
      "cat",
      "school",
      "mya",
      "canada",
      "usa",
      "trump",
      "apple",
      "beans",
      "oliver",
      "word",
      "keyboard",
      "delicious",
      "knight",
      "surprisedpikachu",
      "peach",
      "mouse",
      "pewdiepie",
      "ottoman",
      "rome",
      "coronavirus",
      "dave",
      "nasa",
      "community",
      "chevy",
      "chase",
      "sarahharmer",
    ];
    //holds the cipohers alphabet
    const cipher = [
      "?!",
      "!???",
      "!?!?",
      "!??",
      "?",
      "??!?",
      "!!?",
      "????",
      "??",
      "?!!!",
      "!?!",
      "?!??",
      "!!",
      "!?",
      "!!!",
      "?!!?",
      "!!?!",
      "?!?",
      "???",
      "!",
      "??!",
      "???!",
      "?!!",
      "!??!",
      "!?!!",
      "!!??",
    ];
    //randomly slects a number
    var word = Math.round(Math.random() * 26);
    //sets the text to be turned into a cipher
    let text = randString[word];
    //turns text into cipher
    for (var i = 0; i < text.length; i++) {
      for (var j = 0; j < alpha.length; j++) {
        if (text.charAt(i) === alpha.charAt(j)) {
          //sets cipher letter by letter
          finishedCode = finishedCode + cipher[j] + " ";
        }
      }
    }

    return (
      <div className="App-game">
        {this.state.lose ? (
          //runs wrong screen if answer is corect
          <WrongScreen />
        ) : (
          <div>
            <h1
              //sets style
              style={{
                margin: 0,
              }}
            >
              {finishedCode}
            </h1>
            <label>
              <Answer
                text={text}
                //triggers update to answer
                triggerParentUpdate={this.loseGame}
                triggerParentUpdateTwo={this.whenWin}
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}
