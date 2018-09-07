import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react'
import store from './store/index'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider {...store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
