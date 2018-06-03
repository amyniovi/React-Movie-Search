import React from "react";


class MovieRow extends React.Component {

  viewMovie() {
    window.location.href = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tr>
          <td>
            <img width="200" src={"https://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path} />
          </td>
          <td text-align="left">
            {this.props.movie.title}
            <p>{this.props.movie.overview}</p>
            <p><button onClick={this.viewMovie.bind(this)}>View</button></p>
          </td>
        </tr>
      </table>
    );
  }
}

export default MovieRow;
