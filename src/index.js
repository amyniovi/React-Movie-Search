import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';

const Public = () =>
(<div>
    <ul>
        <li><Link to='/home'>Search Torrents</Link></li>
        <li><Link to='/login'>Sign In</Link></li>
        {/* <li><Link to='/signup'>Sign Up</Link></li> */}
    </ul>
</div>);


const PrivateRoute = ({ component, ...rest }) => {
    return component;
};

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