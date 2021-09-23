import Button from "components/Button";
import {createUseStyles} from 'react-jss';
import { useDispatch, useMappedState } from "redux-react-hook";
import { start, stop, pause, resume } from "actions/TimeActions";
import { useCallback } from "react";

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
    const {paused} = useMappedState(state => ({
        paused: state.time.paused
    }));
    const classes = useStyles();
    const dispatch = useDispatch();

    const onStart = useCallback(() => {
        dispatch(start());
    }, [dispatch]);

    const onStop = useCallback(() => {
        dispatch(stop());
    }, [dispatch]);

    const onToggleResume = useCallback(() => {
        if(paused != null) {
            dispatch(resume());
            return;
        }

        dispatch(pause());
        
    }, [paused, dispatch]);

    return (
        <div className={classes.root}>
            <div className={classes.button}>
                <Button onClick={onStart}>Start</Button>
            </div>
            <div className={classes.button}>
                <Button onClick={onToggleResume}>
                    {paused != null ? 'Resume' : 'Paused'}
                </Button>
            </div>
            <div className={classes.button}>
                <Button onClick={onStop} variant='danger'>Stop</Button>
            </div>
            <div className={classes.button}>
                <Button>Lap</Button>
            </div>
        </div>
    );
}

export default TimerActions;