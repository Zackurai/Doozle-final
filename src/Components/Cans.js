//rund to check answer of colour aswell as makes sure the question oesnt change
//import
import React from "react";

const initialState = {
  name: "",
};
export class Cans extends React.Component {
  //sets innitial state of needed variables
  state = { initialState, question: true };
  //handles change so the question isnt re rendereed after ever imput
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  //handles submit either by enter key or button press
  handleSubmit = (event) => {
    event.preventDefault();
    //sets answer from Luke.js
    var ans1 = this.props.ans;
    //checks to see if answer is correct
    if (this.state.name.toLowerCase() === ans1) {
      {
        //triggers update in Luke.js
        this.props.triggerParentUpdateTwo();
      }
    } else {
      {
        //Tringgers update in luke . js
        this.props.triggerParentUpdate();
      }
    }

    this.setState({ question: !this.state.question });
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        {this.state.question ? (
          //sets text imput
          <form onSubmit={this.handleSubmit}>
            <input
              //sets place holder for text imput
              placeholder=""
              value={this.state.name}
              //runs onchage function
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        ) : null}
      </div>
    );
  }
}
