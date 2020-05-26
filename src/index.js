import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import appReducer from "./reducers";
import { createStore } from "redux";
import { createPost } from "./actions";
import ConnectedPostList from "./components/ConnectedPostList";


const posts = [
    { user: 'dan', text: 'hello world!' },
    { user: 'des', text: 'hi!' }
];

let store = createStore(appReducer);

store.dispatch(createPost('Neoa', 'Hello World Neoa'));

setTimeout(() => store.dispatch(createPost('AcrixF', 'This is Dangerous')),2000);

ReactDOM.render(
    <ConnectedPostList store={ store } />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
