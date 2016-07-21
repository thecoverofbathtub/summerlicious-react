import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './core/store';
import Root from './view/root';
import './styles/styles.scss';

const store = createStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Root store={store} history={syncedHistory} />,
    document.getElementById('root')
);
