import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import App from './app';

export default function Root({history, store}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route component={App} path="/" />
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};