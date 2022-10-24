import React from "react";
import classes from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Navigate} from "react-router-dom";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={classes.wrapper}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);