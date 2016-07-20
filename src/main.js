import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './core/store';
import Root from './view/root';

const store = createStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={syncedHistory} />,
    document.getElementById('root')
);
