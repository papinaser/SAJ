import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import LinearProgress from "@material-ui/core/LinearProgress";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Snackbar from "@material-ui/core/Snackbar";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

import {styles} from "./mainLayoutStyles";
import SnackbarContentWrapper from "../../tools/sanckbarContentWrapper";
import PagesRouter from "../../routing/pagesRouter";
import SideMenu from "../sideMenu/sideMenu";
import PageTitle from "./pageTitle";
import {sideMenuCloseAction} from "../../../store/actions/sideMenu";
import {showSnackBar} from "../../../store/actions/global";
import hasUserAccess from "../../../services/accessManager";
import {SALARAY_STRAP_AC,CAR_REQUEST_AC,TANKHAH_FACTOR_AC,REQUEST_KALA_AC} from "../../../services/enums";
import {updateUserPermits} from "../../../store/actions/auth";




class MainLayout extends React.Component {
    actionNames=[SALARAY_STRAP_AC,REQUEST_KALA_AC,TANKHAH_FACTOR_AC,CAR_REQUEST_AC];

    handleDrawerOpen = () => {
        this.props.closeSideMenu(false);
    };

    handleDrawerClose = () => {
        this.props.closeSideMenu(true);
    };

    handleSnackbarClose=(event, reason)=> {
        if (reason === 'clickaway') {
            return;
        }
        this.props.showSnackbar({visibleSnackbar:false,snackbarMessage:""});
    };
    componentWillMount() {
        hasUserAccess(this.actionNames).then(result => {
            this.props.updateUserPermits({
                currentPermits:this.props.userPermits,
                actionNames:this.actionNames,
                permits:result
            })
        }).catch((err)=>{
            this.props.showSnackbar({visibleSnackbar:true,
                snackbarMessage:err,
                snackbarType:"error"});
            this.props.updateUserPermits({
                currentPermits:this.props.userPermits,
                actions:this.actionNames,
                permits:[false,false,false,false]
            })
        });
    }

    render() {
        const {classes}=this.props;
        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="absolute"
                        className=
                            {classNames(classes.appBar,
                                !this.props.sideMenuIsClose && classes.appBarShift)}>
                        <Toolbar disableGutters={this.props.sideMenuIsClose} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    !this.props.sideMenuIsClose && classes.menuButtonHidden,
                                )}>
                                <Icon>menu</Icon>
                            </IconButton>
                            <PageTitle classes={classes}/>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <SideMenu classes={classes} open={!this.props.sideMenuIsClose}
                              onDrawerClose={this.handleDrawerClose}/>
                    <main className={classes.content} aria-disabled={true}>
                        <div className={classes.appBarSpacer} />
                        {
                            this.props.isLoading?
                                <div>
                                    <LinearProgress/>
                                    <div id={"loading"}
                                         className={classes.cover} style={{display:"block"}}>

                                    </div>
                                </div>
                                :null
                        }
                        {this.props.visibleSnackbar?
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={this.props.visibleSnackbar}
                                autoHideDuration={3000}
                                onClose={this.handleSnackbarClose}
                            >
                                <SnackbarContentWrapper
                                    message={this.props.snackbarMessage}
                                    onClose={this.handleSnackbarClose}
                                    variant={this.props.snackbarType}/>
                            </Snackbar>
                            :null
                        }
                        <PagesRouter userPermits={this.props.userPermits} />
                    </main>
                </div>

            </BrowserRouter>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps=state=>({
    ...state

});
const mapActionsToProps=dispatch=>({
    closeSideMenu: (payload)=> dispatch(sideMenuCloseAction(payload)),
    showSnackbar: (payload)=>dispatch(showSnackBar(payload)),
    updateUserPermits:(payload)=>dispatch(updateUserPermits(payload))
});


export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(MainLayout));

