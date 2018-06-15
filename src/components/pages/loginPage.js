import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

  export const fakeAuth = {
    authorized : false, 
    authenticate(cb){
        this.authorized =true;
        setTimeout(cb,100);
    },
    signOut(cb){
        this.authorized = false;
        setTimeout(cb,100);
    }

  }
export const authGreeting = withRouter(({history})=>(

fakeAuth.authorized === true?
 <p>Welcome Amy <button onClick={()=>{
   fakeAuth.signOut(history.push('/'));
    }}>Sign Out</button></p>
:
 <p>You have to login to view this page.</p>

));


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
           <div><input type="text" defaultValue="Enter your username"/></div>
            <div><input type="text" defaultValue="Enter your password"/></div>
         <div><button onClick={this.login.bind(this)} >Log In</button> </div>
        
       </div>
       
        );

    }
}

 
