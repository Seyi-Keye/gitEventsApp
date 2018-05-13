import React, { Component } from "react";
import GridView from "./GridView";
import SearchTool from "./Searchtool";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleSearch = username => {
    this.setState({ username });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          width: "100%",
          height: "auto",
          margin: "auto",
          background: "skyBlue",
          border: "10px solid grey",
          padding: "20px"
        }}
      >
        <SearchTool handleSearch={this.handleSearch} />
        {this.state.username.length ? (
          <GridView username={this.state.username} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
