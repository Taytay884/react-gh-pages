import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import App from './App';
import configStore from './store/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);
registerServiceWorker();
