import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './movieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }

    this.search("a")
    this.updateSearch = this.updateSearch.bind(this);
  }

  search(search) {
    const urlStr = `https://api.themoviedb.org/3/search/movie?api_key=5e51b3d3d888bc3f1cfd2ccab3235bb2&query=${search}&page=1`
    var movieRows = []
    $.ajax({
      url: urlStr,
      success: result => {
        console.log("fetched data")
        const movies = result.results
        console.log(movies)
        const movieRows = movies.map(movie => <MovieRow movie={movie} />);

        this.setState({
          rows: movieRows
        })
      },
      error: (xhr, status, err) => {
        console.error("failed")
      }
    }
    )

  }

  updateSearch(e) {

    this.search(e.target.value);
  }

  render() {

    return (
      <div >
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img border="1px" width="150" height="150" src="green-app-logo.png" />
              </td>
              <td width="200">
                <h3> Search Torrents </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          onChange={this.updateSearch}
          style={{
            fontSize: 16,
            display: 'block',
            width: "97%",
            paddingTop: 8,
            paddingLeft: 16,
            color: "#000",
            fontWeight: "bold"
          }} placeholder="Search Movie/Actor/Genre" />

        {this.state.rows}

      </div>
    );


  }

}

export default App;
