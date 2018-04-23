import React, { Component } from "react";
import moment from "moment";

class Information extends Component {
  render() {
    const { data } = this.props;
    const type = data.type || "n/a";
    const date = moment(data.created_at).toString() || "n/a";
    const name = (data.actor && data.actor.display_login) || "n/a";
    return (
      <div
        style={{
          color: "white",
          marginTop: "20px",
          padding: "10px"
        }}
      >
        {data ? `${type} created on ${date} by ${name}` : ""}
      </div>
    );
  }
}
export default Information;
