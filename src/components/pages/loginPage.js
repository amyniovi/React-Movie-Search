import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

  export const fakeAuth = {
    authorized : false, 
    authenticate(cb){
        this.authorized =true;
        setTimeout(cb,100);
    }

  }

export class LoginPage extends Component {

    state = {
        redirectToReferrer: false
    }


    login() {
        console.log("inside login: " + fakeAuth.authorized);
       // var authenticated = fakeAuthenticate();
       fakeAuth.authenticate(()=>{
        this.setState({ redirectToReferrer: fakeAuth.authorized});
       });
        
    }

    render() {
        const {from} = this.props.location.state || {from:{pathname:"/"}}
  //debugger;
            if(this.state.redirectToReferrer===true)
            {
            // debugger; 
            console.log(from);

            return <Redirect to={from} />;
            }
            
            return(
        
            <div>
                login page ......
          <button onClick={this.login.bind(this)} >Log In</button>
            </div>

        );

    }
}

 
