//runs to check answer of cipher aswell as only allow it ot render once
//imports react
import React from "react";

const initialState = {
  name: "",
};
export class Answer extends React.Component {
  state = { initialState };
  //handles the change and only allows cipher to render one time
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  validate = () => {};
  //handles submit
  handleSubmit = (event) => {
    event.preventDefault();
    //checks to see if answer is right
    if (this.state.name.toLowerCase() === this.props.text) {
      {
        this.props.triggerParentUpdateTwo();
      }
    } else {
      {
        this.props.triggerParentUpdate();
      }
    }

    this.setState({ question: !this.state.question });
    this.setState(initialState);
  };

  render() {
    return (
      //renders text imput
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder=""
              //runs functions
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
      </div>
    );
  }
}
