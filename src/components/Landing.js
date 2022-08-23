import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className="landingHeader">Who is watching</h1>
        <div className="boxes">
        {this.props.users.map((user) => (
          <Link to="/catalog">
            <div className="box" style={{ backgroundColor: `${user.color}` }}>
              <span>{user.name}</span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    );
  }
}
