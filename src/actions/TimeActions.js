export function start() {
    return {
        type: 'time/START',
    };
}

export function pause() {
    return {
        type: 'time/PAUSE',
    };
}

export function resume() {
    return {
        type: 'time/RESUME',
    };
}

export function stop() {
    return {
        type: 'time/STOP',
    };
}

