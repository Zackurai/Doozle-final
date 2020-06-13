import React from "react";

//creates input field and checks answer

export class MemoryAns extends React.Component {
  //text is where your input is stored
  state = {
    text: "",
  };

  //when you submit your answer, checks if answer was right, depending on current stage
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      text: this.state.text,
    });

    if (this.props.num === 1) {
      if (this.state.text === this.props.s1) {
        this.setState({
          num: this.props.num + 1,
        });
      } else {
        //triggerparent updates send data to memory to say if won or lost
        {
          this.props.triggerParentUpdate();
        }
      }
    } else if (this.props.num === 2) {
      if (this.state.text === this.props.s2) {
        this.setState({
          num: this.props.num + 1,
        });
      } else {
        {
          this.props.triggerParentUpdate();
        }
      }
    } else if (this.props.num === 3) {
      if (this.state.text === this.props.s3) {
        this.setState({
          num: this.props.num + 1,
        });
      } else {
        {
          this.props.triggerParentUpdate();
        }
      }
    } else if (this.props.num === 4) {
      if (this.state.text === this.props.s4) {
        {
          this.props.triggerParentUpdateTwo();
        }
      } else {
        {
          this.props.triggerParentUpdate();
        }
      }
    }

    this.props.onSubmit({
      num: this.props.num,
    });
    this.setState({
      text: "",
    });
  };

  // updates the value of the input field
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    //outputs the form where you type your answer
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="App-game">
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="answer "
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
