import React from "react"
import PropTypes from 'prop-types';
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Divider from "@material-ui/core/Divider";
import SideMenuItems from "./sideMenuItems";

const SideMenu=(props)=>{
    const {classes}=props;
    return(
      <Drawer
          variant="permanent"
          classes={{
              paper: classNames(classes.drawerPaper, !props.open && classes.drawerPaperClose),
          }}
          open={props.open}
      >
          <div className={classes.toolbarIcon}>
              <IconButton onClick={()=>props.onDrawerClose()}>
                  <ChevronRightIcon />
              </IconButton>
          </div>
          <Divider />
          <SideMenuItems classes={classes}/>
      </Drawer>
  )
};
SideMenu.propTypes={
    classes:PropTypes.object.isRequired,
    open:PropTypes.bool.isRequired,
    onDrawerClose:PropTypes.func.isRequired
};
export default SideMenu;
