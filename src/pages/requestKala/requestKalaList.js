import React,{Component} from "react";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import { AgGridReact } from 'ag-grid-react';
import axios from "../../services/axiosInstance";
import localText from "../../assets/agGrid/localText"

import {requestFromServerAction, serverCalledBackAction, showSnackBar} from "../../store/actions/global";

class RequestKalaList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: null,
            rowData: null,
            localText:localText,
            userInfo: null
        }
    }

    componentWillMount() {
        if (this.props.userToken===null){
            this.props.history.push("signIn");
        }
        this.props.requestAction();
        axios.get("RequestKala/GetAllByUserName/"+this.props.userToken)
            .then(resp=>{
                if (resp.data.result==="200"){
                    this.setState({
                        columnDefs:resp.data.message.columnDefs,
                        rowData:resp.data.message.rowData
                    });
                    this.props.callbackAction();
                }
                else{
                    this.props.showSnackbar(
                        {
                            visibleSnackbar: true,
                            snackbarMessage: resp.data.message,
                            snackbarType: "error"
                        }
                    );
                    this.props.callbackAction();
                }
            })
    }

    onActionClick(action){
        this.props.history.push("rqsKala/0");
    };

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Paper>
                        <Button onClick={()=> this.onActionClick("0")}>
                            <Icon>add</Icon>
                        </Button>
                        <Button>
                            <Icon>edit</Icon>
                        </Button>
                        <Button>
                            <Icon>remove</Icon>
                        </Button>
                        <Button>
                            <Icon>attachment</Icon>
                        </Button>
                    </Paper>
                </Grid>
                {
                    this.state.columnDefs !== null ?
                        <Grid item xs={12}>
                            <Paper style={{width: '100%'}}
                                   className="ag-theme-blue">
                                <AgGridReact
                                    domLayout='autoHeight'
                                    enableRtl={true}
                                    localeText={this.state.localText}
                                    columnDefs={this.state.columnDefs}
                                    rowData={this.state.rowData}>
                                </AgGridReact>
                            </Paper>
                        </Grid>

                        : null
                }

            </Grid>
        )
    }
}

const mapStateToProps=state=>({
    ...state
});

const mapActionsToProps=(dispatch)=>({
    requestAction:(payload)=>dispatch(requestFromServerAction(payload)),
    callbackAction:(payload)=>dispatch(serverCalledBackAction(payload)),
    showSnackbar:(payload)=>dispatch(showSnackBar(payload)),
});

export default connect(mapStateToProps,mapActionsToProps)(RequestKalaList);
