import React, { Component } from "react";
import Movie from "./Movie";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  getRentedMovies = () => {
    let rentedMovie = this.props.movies.filter((movie) => movie.isRented);
    if (rentedMovie.length > 0) {
      return (
        <div className="rented">
          <h1>Rented</h1>
          <div className="rentedmovies">
            {rentedMovie.map((movie, index) => (
              <Movie
                movie={movie}
                key={index}
                toggleRentedMovies={this.props.toggleRentedMovies}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  getBudget = () => {
    let count = 0;
    this.props.movies.forEach((movie) => {
      if (movie.isRented) {
        count += 3;
      }
    });
    return 15 - count;
  };

  render() {
    let movies = this.props.movies;
    return (
      
      <div className="catalog">
        <div className="searchbar">
          <input
            value={this.state.search}
            placeholder="Search ... "
            onChange={this.handleSearch}
          />
          <p>budget={this.getBudget()}</p>
        </div>
        <div className="catalog">
          <h1>Catalog</h1>
          <div className="movies">
            {movies
              .filter((movie) =>
                movie.title
                  .toLowerCase()
                  .includes(this.state.search.trim().toLowerCase())
              )
              .map((movie, index) => (
                <Movie
                  movie={movie}
                  key={index}
                  toggleRentedMovies={this.props.toggleRentedMovies}
                />
              ))}
          </div>
          {this.getRentedMovies()}
        </div>
      </div>
    );
  }
}
