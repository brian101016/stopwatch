import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 500,
    }
});

function Timer() {
    const classes = useStyles();

    return <p className={classes.root} >00:00:00</p>;
}

export default Timer;