import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
//import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/pages/homePage';
import { LoginPage } from './components/pages/loginPage';
import { fakeAuth } from './components/pages/loginPage';

const Public = () =>
    (<div>
        <ul>
            <li><Link to='/home'>Search Torrents</Link></li>
            <li><Link to='/login'>Sign In </Link></li>
            {/* <li><Link to='/signup'>Sign Up</Link></li> */}
        </ul>
    </div>);


//PrivateRoute is a component (specifically a Route) so it takes in a component and 
//an array of properties and returns a Route Component 
//which has a render method that returns JSX .

// var authorizeMe = (...params) => {
//  console.log("AUTHORIZEME ....:");
//   console.log("component"+{...params}.component);
//   console.log("path  "+ {...params}.path);

//   //  console.log(" Component in authorizeMe"+Component);

//  return (  
//     //   fakeAuth === true ?
//     // <Component {...params} />
//     // :
//      <Redirect to="/login" />
//  )

// }

var PrivateRoute = (
    {
        component: Component,
        ...props
    }
) => {
    // console.log("path: " + { ...props }.path);// /home
    // console.log("component : " + { ...props }.component);// undefined
    // console.log("Component : " + Component);//homepage

    return (<Route
        {...props}
        render={(params) => {
            // console.log("AUTHORIZEME ....:");
            // console.log( params);
            // console.log({...params}.location.pathname);
            // console.log("component " + params.component);
            // console.log(" Component in authorizeMe" + Component);

            console.log(fakeAuth.authorized);
            return (
                fakeAuth.authorized === true ?
                    <Component {...params} />
                    : <Redirect to={{

                        pathname: "/login",
                        state: { from: { ...params }.location.pathname }
                    }}
                    />
            )
        }
        }
    />
    )
}

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