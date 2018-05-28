import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './movieRow.js'

class App extends Component {

  constructor(props){
      super(props);

      const movies = [
      {id:0, title:"Avatar", src:"https://www.verdict.co.uk/wp-content/uploads/2017/10/Avatar-1440x810.jpg",overview:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora"},
      {id:1, title:"Rampage",src:"https://thespinoff.scdn5.secure.raxcdn.com/wp-content/uploads/2018/04/Rampage-chinese-poster-with-Dwayne-Johnson.jpg", overview:"Global icon Dwayne Johnson headlines the action adventure “Rampage,” directed by Brad Peyton.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size. "}
      ];
      
      var movieRows = [];
    
      movies.forEach(movie=>{
        const movieRow = <MovieRow movie={movie}/>
        movieRows.push(movieRow)
      });

      this.state = { rows : movieRows
      };

     
  }

  render() {
    return (
      <div >        
       <table className="titleBar">
         <tbody>
           <tr>
             <td>
               <img border="1px" width="150"  height="150" src="green-app-logo.png"/>
               </td>
             <td width="200">
            <h3> Search Torrents </h3>
             </td>
             </tr>
         </tbody>
       </table>
      <input style={{
        fontSize:16,
        display:'block',
        width:"97%",
        paddingTop:8,
        paddingLeft:16,
        color:"#000",
        fontWeight:"bold"
      }} placeholder="Search Movie/Actor/Genre"/>

       {this.state.rows}

      </div>
          );

     
  }
  
}

export default App;
