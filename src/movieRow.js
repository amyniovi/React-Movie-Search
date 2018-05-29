import React from "react";

class MovieRow extends React.Component {
  render() {
    return (
      <table key={this.props.movie.id}>
        <tr>
          <td>
            <img width="200" src={"https://image.tmdb.org/t/p/w185/" +this.props.movie.poster_path} />
          </td>
          <td text-align="left">
            {this.props.movie.title}
            <p>{this.props.movie.overview}</p>
          </td>
        </tr>
      </table>
    );
  }
}

export default MovieRow;
