import {createStore} from 'redux';
import TimeReducer from 'reducers/TimeReducer';

const reducers = {
    time: TimeReducer,
};

function combineReducersV2(reducers) {
    return function (state, action) {
        return Object.keys(reducers).reduce( (acc, value) => {
            acc[value] = reducers[value](state, action);
            return acc;
        }, {});
    };
}

const reducer = combineReducersV2(reducers);

export default createStore(reducer);
