import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
const RequestKalaList=()=>{
  return(
      <Paper>
      <Button>
          <Icon>add</Icon>
      </Button>
          <Button>
              <Icon>remove</Icon>
          </Button>
      </Paper>
  )
};

export default RequestKalaList;
