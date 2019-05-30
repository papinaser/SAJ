import React,{Component} from "react"
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom"
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Divider from "@material-ui/core/Divider";
import SideMenuItems from "./sideMenuItems";

class SideMenu extends Component{
    onItemClicked=(url)=>{
        this.props.history.push(url);
    };
    render() {
        const {classes} = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
                }}
                open={this.props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={() => this.props.onDrawerClose()}>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <SideMenuItems itemClicked={this.onItemClicked} classes={classes}/>
            </Drawer>
        )
    }
}

SideMenu.propTypes={
    classes:PropTypes.object.isRequired,
    open:PropTypes.bool.isRequired,
    onDrawerClose:PropTypes.func.isRequired
};
export default withRouter(SideMenu);
