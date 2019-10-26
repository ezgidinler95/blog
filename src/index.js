import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import reduxPromise from "redux-promise-middleware";
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise, thunk ,logger)
    )
);

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <SnackbarProvider
            maxSnack={10}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <App />
        </SnackbarProvider>
    </Provider>
</BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
