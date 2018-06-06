import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';

const Public = () =>
    (<div>
        <ul>
            <li><Link to='/home'>Search Torrents</Link></li>
            <li><Link to='/login'>Sign In </Link></li>
            {/* <li><Link to='/signup'>Sign Up</Link></li> */}
        </ul>
    </div>);

var authorized = true;
//PrivateRoute is a component (specifically a Route) so it takes in a component and 
//an array of properties and returns a Route Component 
//which has a render method that returns JSX .


var PrivateRoute = ({component: Component, ...props }) => (
    <Route
        {...props}

        render={
            (...params) =>

            authorized === true ?
                <Component {...params} />
                : <Redirect to="/login" />
        }
    />
)




ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Public} />
            <Route path='/login' component={LoginPage} />
            <PrivateRoute path='/home' component={HomePage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();