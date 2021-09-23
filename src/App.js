import { createUseStyles } from 'react-jss';
import Timer from 'components/Timer';
import TimerActions from 'components/TimerActions';
import Laps from 'components/Laps';
import store from 'store';
import { StoreContext } from 'redux-react-hook';

const useStyles = createUseStyles({
  root: {

  },
  title: {
    fontSize: 32,
    marginBottom: 64,
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 32,
  }
});

function App() {
  const classes = useStyles();


  return (
    <StoreContext.Provider value={store}>
      <div className={classes.root}>
        <h1 className={classes.title}>Stopwatch</h1>
        <Timer />
        <TimerActions />
        <Laps />
      </div>
    </StoreContext.Provider>
  );
}

export default App;