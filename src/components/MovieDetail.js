import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieDetail extends Component {
  render() {
    let movie = this.props.movies.find(
      (movie) => movie.id == this.props.match.params.id
    );

    return (
      <div className="moviedetail">
        <div className="movietitle">{movie.title}({movie.year})</div>
        <img src={movie.img} alt={movie.title}/>
        <p>{movie.descrShort}</p>
      </div>
    );
  }
}
