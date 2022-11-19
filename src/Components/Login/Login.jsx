import React, {useEffect} from "react";
import classes from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Navigate} from "react-router-dom";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaURL}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={classes.wrapper}>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaURL: state.Auth.captchaURL,
    isAuth: state.Auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);