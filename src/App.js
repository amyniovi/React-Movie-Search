import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">      
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
      </div>
    );
  }
}

export default App;
