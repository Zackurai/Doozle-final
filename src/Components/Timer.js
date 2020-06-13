import React from "react";

export class Timer extends React.Component {
  //gets value for the start time
  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds,
  };

  //starts the timer when the component is called
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        //lowers the timer by a second every second
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          //deals with changes in minutes
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  //clears the timer when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {
          //returns the timer
          minutes === 0 && seconds === 0 ? (
            <h1
              style={{
                margin: 0,
              }}
            >
              {
                //if the time is up, calls player 1
                this.props.triggerParentUpdate()
              }
            </h1>
          ) : (
            <h1
              style={{
                margin: 0,
              }}
            >
              Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )
        }
      </div>
    );
  }
}
