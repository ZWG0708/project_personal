import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './components/css/App.scss';
import './mock/mock';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './sotre/sotre';

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
