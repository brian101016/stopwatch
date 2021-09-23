import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useMappedState } from 'redux-react-hook';

const useStyles = createUseStyles({
    root: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 500,
    }
});

// function addZeros(number = "", numberOfPlaces = 2) {
//     number = `${number}`;

//     let string = "";
//     for (let i = 0; i < (numberOfPlaces - number.length); i++) {
//         string += "0";
//     }

//     return ( string + number );
// }

function addZeros(number, numberOfPlaces) {
    let numDigits = 1;
    let div = Math.floor(number / 10);
    while (div > 0) {
      div = Math.floor(div / 10);
      ++numDigits;
    }
    if (numberOfPlaces - numDigits < 0) {
      return `${number}`;
    }
    const zeroes = new Array(numberOfPlaces - numDigits).fill('0');
    return `${zeroes.join('')}${number}`;
}

function createTimeString(start, pausedIntervals, paused) {
    let timeString;

    if(start == null) {
        timeString = '00:00:00.000';
    } else {
        const now = paused != null ? paused : Date.now();

        const current = now - pausedIntervals - start;
        const minutes = Math.floor((current / 1000 / 60) % 60);
        const seconds = Math.floor((current / 1000) % 60);
        const hours = Math.floor((current / 1000 / 3600) % 24);
        const mil = current % 1000;

        timeString = `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(seconds, 2)}.${addZeros(mil, 3)}`;
    }
    return timeString;
}

function Timer() {
    const {start, pausedIntervals, paused} = useMappedState(state => ({
        start: state.time.start,
        pausedIntervals: state.time.pausedIntervals,
        paused: state.time.paused,
    }));

    const [time, setTime] = useState('00:00:00.000');
    const classes = useStyles();

    useEffect( () => {
        const intervalId = setInterval(() => {
            setTime(createTimeString(start, pausedIntervals));
        }, 100);

        return function () {
            clearInterval(intervalId);
        };
    }, [start, pausedIntervals, paused]);

    return <p className={classes.root}>{time}</p>;
}

export default Timer;