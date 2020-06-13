// This code is run when player two is selected, shows the instructions
//import
import React from "react";

export class Player2 extends React.Component {
  state = {
    idx: 0,
  };
  //Handlles hitting the back button
  handleBack = () => {
    if (this.state.idx > 0) {
      this.setState({
        //sets state of location one less than it was
        idx: this.state.idx - 1,
      });
    }
  };
  //Handles hitting the next button
  handleNext = () => {
    if (this.state.idx < 2) {
      this.setState({
        //sets state of location one mor than it was
        idx: this.state.idx + 1,
      });
    }
  };
  render() {
    //This has the title of the puzlzles
    const topText = ["Decryption Cipher", "Memory Key", "Colours"];
    //Holds the descrition of the puzzles
    const textExplain = [
      "Decode the message",
      "for each stage, type in the answer for the current stage followed by the answer to all the previous stages. numbers should be seperated with a space",
      "Find the corresponding colour to the text and the colour of the text.  The word written is the first word, the colour of the word is the second word and the answer is the third word in the line",
    ];

    let cipher = [];
    //Shows instuctions for the cipher puzzle
    if (this.state.idx === 0) {
      cipher = [
        "A: ?!",
        "B: !???",
        "C: !?!?",
        "D: !??",
        "E: ?",
        "F: ??!?",
        "G: !!?",
        "H: ????",
        "I: ??",
        "J: ?!!!",
        "K: !?!",
        "L: ?!??",
        "M: !!",
        "N: !?",
        "O: !!!",
        "P: ?!!?",
        "Q: !!?!",
        "R: ?!?",
        "S: ???",
        "T: !",
        "U: ??!",
        "V: ???!",
        "W: ?!!",
        "X: !??!",
        "Y: !?!!",
        "Z: !!??",
      ];
    } else if (this.state.idx === 1) {
      //shows the instructions for the memory puzzle
      cipher = [
        "____",
        "Stage 1:",
        "If the number displayed is 1, input 2",
        "If the number displayed is 2, input 2",
        "If the number displayed is 3, input 1",
        "If the number displayed is 4, input 3",
        "____",
        "Stage 2:",
        "If the number displayed is 1, input 4",
        "If the number displayed is 2, input the same number as stage 1",
        "If the number displayed is 3, input 2",
        "If the number displayed is 4, input the same number as stage 1 plus 1",
        "____",
        "Stage 3",
        "If the number displayed is 1, input the same number as stage 1",
        "If the number displayed is 2, input the same number as stage 2",
        "If the number displayed is 3, input 3",
        "If the number displayed is 4, input 4",
        "____",
        "Stage 4",
        "If the number displayed is 1, input the number showed in stage 1",
        "If the number displayed is 2, input the nunber showed in stage 2",
        "If the number displayed is 3, input the number showed in stage 3",
        "If the number displayed is 4, input 2",
      ];
    } else if (this.state.idx === 2) {
      //shows th instructions for the colors puzzle
      cipher = [
        "Green Green Blue",
        "Green Blue Green",
        "Green Red Pink",
        "Green Orange Red",
        "Green Pink Orange",
        "Blue Green Green",
        "Blue Blue Pink",
        "Blue Red Red",
        "Blue Orange Orange",
        "Blue Pink Blue",
        "Red Green Orange",
        "Red Blue Red",
        "Red Red Blue",
        "Red Orange Pink",
        "Red Pink Green",
        "Orange Green Blue",
        "Orange Blue Red",
        "Orange Red Orange",
        "Orange Orange Green",
        "Orange Pink Pink",
        "Pink Green Pink",
        "Pink Blue Orange",
        "Pink Red Green",
        "Pink Orange Blue",
        "Pink Pink Red",
      ];
      //Randomly shuffles color instruction array
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      shuffle(cipher);
    }
    //retursn the instuctions
    return (
      <div
        className="App"
        style={{
          minHeight: 175,
        }}
      >
        <h1
          //sets style of text
          style={{
            margin: 0,
          }}
        >
          {topText[this.state.idx]}
        </h1>
        <h3>{textExplain[this.state.idx]}</h3>

        <button
          class="buttonsmall button1"
          //sets button style

          onClick={this.handleBack}
        >
          <span>Back </span>
        </button>
        <button className="buttonsmall button1" onClick={this.handleNext}>
          {" "}
          Next
        </button>
        <ol
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cipher.map((cipher) => (
            // Displays the instructions of selected puzle
            <div>{cipher}</div>
          ))}
        </ol>
      </div>
    );
  }
}
