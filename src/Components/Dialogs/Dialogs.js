import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {reduxForm} from "redux-form";
import DialogForm from "./DialogsForm/DialogsForm";

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogForm)

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.addMessage(formData.dialogAnswer);
    }

    let dialogsElements = props.dialogsData.dialogsNames.map( dialog =>
        <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
    );

    let messagesElements = props.dialogsData.messagesData.map( messages =>
        <Message name={messages.name} key={messages.id}  message={messages.message} />
    );

    return (
        <div className={classes.dialogs}>
            <h3>Dialogs with users</h3>
            <div className={classes.all_dialogs}>
                {dialogsElements}
            </div>
            <h3>Dialog</h3>
            <div>
                {messagesElements}
            </div>
            <div className={classes.form_dialog}>
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );

}


export default Dialogs;
