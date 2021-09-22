import Button from "components/Button";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: '32px 0px',
      },
    button: {
        margin: '0px 32px',
    },
});

function TimerActions() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.button}>
                <Button>Start</Button>
            </div>
            <div className={classes.button}>
                <Button>Pause</Button>
            </div>
            <div className={classes.button}>
                <Button variant='danger'>Stop</Button>
            </div>
            <div className={classes.button}>
                <Button>Lap</Button>
            </div>
        </div>
    );
}

export default TimerActions;