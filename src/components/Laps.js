import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        width: 320,
        margin: '0px auto',
        '& > *': {
            marginBottom: 16,
        },
    },
    lap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 0px',
        backgroundColor: '#8e8e8e',
        color: 'white',
        borderRadius: 4,
    },
});

function Laps() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.lap}>Lap 1: 00:00:00</div>
            <div className={classes.lap}>Lap 2: 00:00:00</div>
            <div className={classes.lap}>Lap 3: 00:00:00</div>
        </div>
    );
}

export default Laps;