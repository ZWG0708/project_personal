import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './components/css/App.scss';
import './mock/mock';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
