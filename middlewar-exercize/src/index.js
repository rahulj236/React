import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ACTION_ONE': {
            return [ ...state, action.data ]
        }
        case 'ACTION_TWO': {
            return [ ...state, action.data ]
        }
        case 'ACTION_THREE': {
            return [ ...state, action.data ]
        }
        default: {
            return state
        }
    }
}

const logger = store => next => action => {
    console.log("action fired... ", action.type);
    next(action);
}

const handlefnMultiple = store => next => action => {
    if(Array.isArray(action)){
        action.map((actionData)=>
            store.dispatch({type: actionData.type, data: actionData.data})
        )
    }
    else{
        next(action)
    }
}

const middlewares = applyMiddleware(handlefnMultiple, logger);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
    console.log("store has changed ", store.getState());
});

store.dispatch([
    { type: "ACTION_ONE", data: "this is ACTION_ONE"},
    { type: "ACTION_TWO", data: "this is ACTION_TWO"},
    { type: "ACTION_THREE", data: "this is ACTION_THREE" }
]);



