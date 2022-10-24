import classes from "../MyPost.module.css";
import React from "react";
import {Field} from "redux-form";
import {MaxLengthCreator, Required} from "../../../../Utils/Validators/Validators";
import {Element} from "../../../Common/FormsControls/FormsControls";

const MaxLength20 = MaxLengthCreator(20);

const Input = Element("input")

const PostForm = (props) => {
    return (
        <form  className={classes.message_answer} onSubmit={props.handleSubmit}>
            <Field name={"newPostText"}
                   component={Input}
                   placeholder={"input your text"}
                   className={classes.input}
                   validate={[Required,MaxLength20]}
            />
            <button type={"submit"}>submit</button>
        </form>
    );
}

export default PostForm;