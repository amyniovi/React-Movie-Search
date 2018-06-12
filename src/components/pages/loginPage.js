import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        redirectToReferrer: false
    }

    fakeAuthenticate() {
        return true;
    }

    login() {
        console.log(this.fakeAuthenticate());
        var authenticated = this.fakeAuthenticate();
        this.setState({ redirectToReferrer: authenticated });
    }

    render() {
        const {from} = this.props.location.state || {from:{pathname:"/"}}
  
            if(this.state.redirectToReferrer===true)
            {
             debugger; 
            console.log(from);

            return <Redirect to={from}/>;
            }
            
            return(
        
            <div>
                login page ......
          <button onClick={this.login.bind(this)} >Log In</button>
            </div>

        );

    }
}

export default LoginPage;