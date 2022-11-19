import classes from "../MyPost.module.css";
import React from "react";
import {Field} from "redux-form";

const PostForm = (props) => {
    const onMainPhotoSelected = (e) => {
        const target = e.target;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = () => {
            props.checkPostPhoto(target,fileReader.result);
        }

        if (!target.files.length) {
            alert('Ничего не загружено');
            return;
        }
    }

    return (
        <form className={classes.message_answer} onSubmit={props.handleSubmit}>
            <div className={classes.content_input}>
                <Field name={"newPostText"}
                       component={"input"}
                       placeholder={"Enter your text for the post"}
                       className={classes.input}
                />
                <div className={classes.input__wrapper}>
                    <input type="file" name="file" id="input__file" className={classes.input__file}
                           onChange={onMainPhotoSelected}></input>
                    <label className={classes.input__file_button} htmlFor="input__file">Select an image</label>
                </div>
            </div>
            {props.imagePostChooseMode ? <button type={"submit"} className={'buttonStyle'}>Submit</button> : <h1>Picture not selected</h1>}
        </form>
    );
}

export default PostForm;