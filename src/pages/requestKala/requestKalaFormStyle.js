export const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    formLayout: {
        width: '100%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop:theme.spacing(1),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: "100%",
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    formLayoutGrid:{

    },
    paper: {

    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    formControl:{
        margin: theme.spacing(3),
        minWidth: 120,
    }
});
