import classes from "../ProfileInfo.module.css";
import {CreateField, Element} from "../../../Common/FormsControls/FormsControls";
import React from "react";

const Input = Element("input");

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div className={classes.profile_center}>
            <div className={classes.description}>
                <form onSubmit={handleSubmit}>
                    <h2 className={classes.titleOfEditPanel}>Basic information:</h2>
                    <div className={classes.editPanel}>
                        <li>Full name: {CreateField("Full name","fullName",[],Input)}</li>
                        <li>Looking for a job: {CreateField("","lookingForAJob",[],Input, {type:"checkbox"})}</li>
                        <li className={classes.separateLine}>My skills: {CreateField("","lookingForAJobDescription",[],Element("textarea") )}</li>
                        <li>About me: {CreateField("About me","aboutMe",[],Element("textarea") )}</li>
                        <div>
                            <h2>Contacts:</h2>
                            <li className={classes.editPanel}>{Object.keys(profile.contacts).map(key => {
                                return <li>{key}:{CreateField(key,"contacts." + key,[],Element("input") )}</li>
                            })}</li>
                        </div>
                    </div>
                    <button className={'buttonStyle'}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default ProfileDataForm;