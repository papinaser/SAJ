import React,{Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from "react-router-dom";
import {styles} from "./signInStyles";
import axios from "../../services/axiosInstance";
import {requestFromServerAction, serverCalledBackAction, showSnackBar} from "../../store/actions/global";
import {userLoggedInAction} from "../../store/actions/auth"


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange=(fieldName,value)=>{
        var model = Object.assign({},this.state);
        model[fieldName]=value;
        this.setState(model);
    };

    onSubmit=()=>{
        this.props.requestAction();
        var model = Object.assign({},this.state);
        axios.post("login",model).then((resp)=>{
            if (resp.data.result==="200"){
                this.props.userLoggedInAction(resp.data.message);
                this.props.showSnackbar({visibleSnackbar:true,
                    snackbarMessage:"خانم/آثای "+resp.data.message.title+" خوش آمدید",
                    snackbarType:"success"});
                this.props.history.push("/dashboard");
            }
            else {
                this.props.showSnackbar({visibleSnackbar:true,
                    snackbarMessage:"نام کاربری/رمزعبور نامعتبر است",
                    snackbarType:"error"});
            }
            this.props.callbackAction();
        }).catch((err)=>{
            this.props.showSnackbar({visibleSnackbar:true,
                snackbarMessage:err.message,
                snackbarType:"error"});
            this.props.callbackAction();
        });
    };


    render() {

        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ورود به سیستم
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="userName">نام کاربری</InputLabel>
                            <Input onChange={(event)=>this.handleInputChange("username",event.target.value)}
                                   value={this.state.username} id="userName" name="userName" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">رمز عبور</InputLabel>
                            <Input onChange={(event)=>this.handleInputChange("password",event.target.value)}
                                   value={this.state.password} name="password" type="password" id="password"
                                    autoComplete="current-password"/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="مرا به خاطر بسپار"
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSubmit}
                        >
                            ورود
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapActionsToProps=(dispatch)=>({
   requestAction:(payload)=>dispatch(requestFromServerAction(payload)),
   callbackAction:(payload)=>dispatch(serverCalledBackAction(payload)),
    showSnackbar:(payload)=>dispatch(showSnackBar(payload)),
    userLoggedInAction:(payload)=>dispatch(userLoggedInAction(payload))

});
export default connect(null,mapActionsToProps)(withRouter(withStyles(styles)(SignIn)));
