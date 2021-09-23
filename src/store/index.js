import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import TimeReducer from 'reducers/TimeReducer';

const reducers = {
    time: TimeReducer,
};

function combineReducersV2(reducers) {
    return function (state = {}, action) {
        return Object.keys(reducers).reduce( (acc, value) => {
            acc[value] = reducers[value](state[value], action);
            return acc;
        }, {});
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducersV2(reducers);
// const reducer = combineReducers(reducers);

export default createStore(reducer, composeEnhancers(applyMiddleware()));
