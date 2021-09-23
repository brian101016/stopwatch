const initialState = {
    start: null,
    paused: null,
    pausedIntervals: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'time/START':
            return {
                paused: null,
                pausedIntervals: 0,
                start: Date.now(),
            };
        case 'time/PAUSED':
            return {
                ...state,
                paused: Date.now(),
            };
        case 'time/RESUME':
            return {
                ...state,
                pausedIntervals: state.pausedIntervals + (Date.now() - state.paused),
                paused: null,
            };
        case 'time/STOP':
            return {
                start: null,
                paused: null,
                pausedIntervals: 0,
            };
        default:
            return state;
    }
}

export default reducer;