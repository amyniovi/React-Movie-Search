import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/pages/homePage';

ReactDOM.render(
    <BrowserRouter>
        <HomePage />
    </BrowserRouter>,
     document.getElementById('root')
    );

registerServiceWorker();