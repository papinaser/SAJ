import React from "react";
import Typography from "@material-ui/core/Typography";
const PageTitle=(props)=>{
    const {classes}= props;
  return(

      <div className={classes.pageTitle}>
      <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap

      >
          سامانه خدمات الکترونیک->
      </Typography>
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
          >
              صفحه جاری
          </Typography>
      </div>
  )
};

export default PageTitle;
