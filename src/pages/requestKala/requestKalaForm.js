import React, {Component} from "react"
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import axios from "../../services/axiosInstance";
import {styles} from "./requestKalaFormStyle";
import {requestFromServerAction, serverCalledBackAction, showSnackBar} from "../../store/actions/global";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/styles";

class RequestKalaForm extends Component{
    state = {
        requestKalaId:0,
        requestKalaType:null,
        requestKalaTypeId:0,
        requestDate:'',
        requestTime:'',
        needDate:'',
        orderSummaryDescId:0,
        description:''
    };
    componentWillMount() {
        if (this.props.userToken===null){
            this.props.history.push("signIn");
        }
    }

    onRequetTypeChanged=(event)=>{
        this.setState({requestKalaType:event,
            requestKalaTypeId:event.value });
        console.log(`Option selected:`, event);
    };

    loadSummeryDescryptions = (inputValue, callback) => {
        this.props.requestAction();
        axios.get(`RequestKala/GetOrderDescs/${this.props.userToken}`)
            .then(resp => {
                if (resp.data.result === "200") {
                    callback(resp.data.message);
                } else {
                    this.props.showSnackbar(
                        {
                            visibleSnackbar: true,
                            snackbarMessage: resp.data.message,
                            snackbarType: "error"
                        }
                    );
                }
                this.props.callbackAction();
            })
            .catch(err => {
                this.props.showSnackbar(
                    {
                        visibleSnackbar: true,
                        snackbarMessage: err.message,
                        snackbarType: "error"
                    }
                );
            });
    };

    render() {
        const { requestKalaType } = this.state;
        const {classes} = this.props;

        const list =[{
            value:1,
            label:"کالا"
        },{
            value:2,
            label:"خدمات"
        }];
        return (
            <form className={classes.formLayout}>
                <Grid className={classes.formLayoutGrid} container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                            <InputLabel htmlFor="rqsType">نوع درخواست</InputLabel>
                            <Select
                                id={"rqsType"}
                                isRtl={true}
                                placeholder={"انتخاب کنید..."}
                                value={requestKalaType}
                                onChange={this.onRequetTypeChanged}
                                options={list}
                            />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <InputLabel htmlFor="summeryDesc">شرح مختصر درخواست</InputLabel>
                        <AsyncSelect
                            id={"summeryDesc"}
                            isRtl={true}
                            placeholder={"انتخاب کنید..."}
                            isSearchable={true}
                            cacheOptions
                            loadOptions={this.loadSummeryDescryptions}
                            defaultOptions
                        />
                    </Grid>
                </Grid>
            </form>
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

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(RequestKalaForm));
