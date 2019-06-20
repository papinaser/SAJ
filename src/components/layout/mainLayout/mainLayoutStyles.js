const drawerWidth = 240;

export const styles = theme=>({
    root: {
        display: 'flex',
        fontFamily:"normal"
    },
    toolbar: {
        paddingLeft: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 12,
        marginLeft: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    menuItemIcon:{
        marginLeft:'16px'
    },
    pageTitle: {
        flexGrow:1,
        display: "flex",
        flexFlow:"row"
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 7,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        height: '100vh',
        overflow: 'auto',
    },
    cover:{
        position: "absolute",
        height: "85%",
        width: "95%",
        zIndex: 1,
        backgroundColor: "#ddd",
        opacity: 0.3
    },

    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});
