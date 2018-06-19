import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './loginPage.css';

//create a context
export const LoginContext = React.createContext();

//create a Context Provider.
export class LoginProvider extends Component {

    constructor() {
        super();
        this.authenticate = (cb) => {
            this.setState(state => ({
                authorized: true
            }));
            sessionStorage.setItem('authorized','true');
            setTimeout(cb, 100);
        };

        this.signOut = (cb) => {
            this.setState(state => (
                {
                    authorized: false
                }));
                sessionStorage.setItem('authorized', 'false');

            setTimeout(cb, 100);
        };

        this.state = {
            authorized: JSON.parse(sessionStorage.getItem('authorized'))  || false,
            authenticate: this.authenticate,
            signOut: this.signOut
        }
    }

    render() {
        return (
            <LoginContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export const authGreeting = withRouter(({ history }) => {
    return (
        <div>
            <LoginContext.Consumer>

                {(context) => {

                    return context.state.authorized == true ?
                        <p>Welcome Amy <button onClick={() => {
                            context.state.signOut(history.push('/'));
                        }}>Sign Out</button></p>
                        :
                        <p>You have to login to view this page.</p>
                }}

            </LoginContext.Consumer>
        </div>
    );
});

export class LoginPage extends Component {

    render() {

        function authorize(context) {
            debugger;
            context.state.authorized = true;
        }

        return (
            <div>
                <LoginContext.Consumer>
                    {(context) => {
                        const { from } = this.props.location.state || { from: { pathname: "/" } };

                        if (context.state.authorized == true) {

                            console.log(from);

                            return <Redirect to={from} />
                        } else {

                            return (
                                <div className="login-box">
                                    <div> <h1>Login:</h1></div>

                                    <div className="textbox">
                                        <i className="fa fa-user" aria-hidden="true "></i>
                                        <input type="text" defaultValue="Enter your username" />
                                    </div>
                                    <div className="textbox">
                                        <i className="fa fa-lock" aria-hidden="true "></i>
                                        <input type="password" defaultValue="Enter your password" /></div>
                                    <div ><button className="btn" onClick={() => context.state.authenticate(() => { })}>Log In</button> </div>
                                </div>);
                        }
                    }}
                </LoginContext.Consumer>
            </div>
        );
    }
}


