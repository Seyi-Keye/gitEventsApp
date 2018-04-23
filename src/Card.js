import React, { Component } from "react";
import Avatar from "./Avatar";
import Information from "./Information";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      username: this.props.username
    };
  }

  componentDidMount() {
    const { username } = this.props;
    this.fetchEventPayload(username);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchEventPayload(nextProps.username);
  }

  handleDisplay = data => {
    const result = data.map((datum, index) => {
      return (
        <div
          key={index.toString()}
          style={{
            display: "flex",
            border: "5px solid white",
            background: "grey",
            width: "70%",
            // boxSizing: "border-box",
            margin: "auto",
            padding: "10px",
            height: "70px"
          }}
        >
          <Avatar picture={datum.actor} />
          <Information data={datum} />
        </div>
      );
    });
    return result;
  };

  fetchEventPayload = username => {
    fetch(`https://api.github.com/users/${username}/events`)
      .then(data => {
        if (data.status !== 200) {
          throw new Error(data.statusText);
        }
        return data.json();
      })
      .then(data => {
        this.setState({ data });
      })
      .catch(error => this.setState({ error }));
  };

  checkError = error => {
    return (
      <p style={{ padding: "10px", color: "red", fontSize: "20px" }}>
        {error.message}
      </p>
    );
  };

  render() {
    const data = this.state.data;
    const error = this.state.error;
    return (
      <div>
        {data && this.handleDisplay(data)}
        {error && this.checkError(error)}
        {!error && data.length === 0 && <p> No results </p>}
      </div>
    );
  }
}
export default Card;
