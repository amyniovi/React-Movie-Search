import React from 'react'

class MovieRow extends React.Component{

render(){

return  <table key={this.props.movie.id}>
<tr>
  <td><img width="200" src={this.props.movie.src}/></td>
  <td text-align="left">{this.props.movie.title} 

  <p>{this.props.movie.overview}</p>
  </td>
</tr>    
</table>

}

}

export default MovieRow