import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import List from "@material-ui/core/List";

import menus from "./menus";
import Icon from "@material-ui/core/Icon";

const SideMenuItems = (props)=>{
    const {classes}=props;
    const menuItems= menus.map(menu=>{
        return(<ListItem key={menu.url}
                         button onClick={()=>props.itemClicked(menu.url)}>
            <Icon className={classes.menuItemIcon}>{menu.icon}</Icon>
            <ListItemText primary={menu.title}/>
        </ListItem>)
    });
    return(
        <List>
            <div>
                {menuItems}
            </div>
        </List>
    );
};

export default SideMenuItems;
