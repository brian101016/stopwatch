import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: ({variant}) => ({
        backgroundColor: variant === 'action' ? '#50699A' : '#A35151',
        color: 'white',
        fontSize: 14,
        border: 'none',
        padding: '9px 17px',
        fontWeight: 600,
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'background-color 0.05s',
        '&:hover': {
            backgroundColor: variant === 'action' ? '#435881' : '#934B4B',
        },

    }),
});

function Button({children, onClick, variant = 'action', ...rest}) {
    const classes = useStyles({variant});
    return (
        <button {...rest} className={classes.root} onClick={onClick} >
            {children}
        </button>
    );
}

export default Button;