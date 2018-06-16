import React, { Component } from 'react';
import logo from '../../images/logo.svg';
  import './homePage.css';
import MovieRow from '../common/movieRow.js';
import { authGreeting as AuthGreeting } from './loginPage';
import $ from 'jquery'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      user: {}
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
    })
  }

  updateSearch(e) {
    this.search(e.target.value);
  }


  render() {
    return (
      <div >
      <div>  <AuthGreeting /></div>
       
       
      <div className="Search"> 
       <img border="none" width="30" height="30" src="green-app-logo.png" />
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
            
          }} placeholder="Search Movie/Actor/Genre" /></div>

        {this.state.rows}

      </div>
    );

  }



}

export default HomePage;



