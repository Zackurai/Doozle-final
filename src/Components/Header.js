//Sets the header for the home page
//import react
import React from "react";
//imports of logo
import logo from "../logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      //Generates logo
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-prompt">{this.props.ask}</h2>
      </header>
    );
  }
}
