import React from "react";
import {Field} from "redux-form";
import {CreateField, Element} from "../../Common/FormsControls/FormsControls";
import {Required} from "../../../Utils/Validators/Validators";
import classes from "./LoginForm.module.css"

const Input = Element("input")

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            {CreateField("Email", "email", [Required], Input)}
            {CreateField("Password", "password", [Required], Input, {type: "password"})}
            {CreateField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>
                <button type={"submit"}>go</button>
            </div>
        </form>
    );
}

export default LoginForm;