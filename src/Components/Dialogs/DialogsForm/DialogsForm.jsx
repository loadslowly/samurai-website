import classes from "../Dialogs.module.css";
import React from "react";
import {Field} from "redux-form";
import {MaxLengthCreator, Required} from "../../../Utils/Validators/Validators";
import {Element} from "../../Common/FormsControls/FormsControls";

const Input = Element("input")

const MaxLength100 = MaxLengthCreator(100);

const DialogsForm = (props) => {
    return (
        <form className={classes.message_answer} onSubmit={props.handleSubmit}>
            <Field placeholder={"you can write your own text"}
                   name={"dialogAnswer"}
                   component={Input}
                   validate={[Required,MaxLength100]}
                   className={classes.input}/>
            <button type={"submit"} >submit</button>
        </form>
    );
}

export default DialogsForm;