import classes from './ProfileInfo.module.css';
import ava from './../../../Resource/Images/ava_girl.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {reduxForm} from "redux-form";

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm)

const ProfileInfo = ({profile, savePhoto, saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div className={classes.profile_body}>
            <div className={classes.profile_body_children}>
                <div className={classes.profile_left}>
                    <img src={profile.photos.large ? profile.photos.large : ava}/>
                    {props.isOwner && <div className={classes.editPanel}>
                        <button className={'buttonStyle'} onClick={() => {setEditMode(true)}}>Edit</button>
                        {editMode && <button className={'buttonStyle'} onClick={() => {setEditMode(false)}}>Back</button> }
                    </div>}
                </div>
                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile} profile={profile}/>
                    : <ProfileData profile={profile} props={props}/>}
            </div>
            <div className={classes.profile_right}>
                {props.isOwner &&
                    <div className={classes.inputWrapper}>
                        <input type="file" name="file" id="inputFile" className={classes.inputFile} onChange={onMainPhotoSelected}></input>
                        <label className={classes.input_file_button} htmlFor="inputFile">Change ava</label>
                    </div>
                }
            </div>
        </div>
    );
}

const ProfileData = ({profile, props}) => {
    return (
        <div className={classes.profile_center}>
            <div className={classes.description}>
                <h3>{profile.fullName}</h3>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <li><span className={'allocator'}>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}</li>
                <li><span className={'allocator'}>My skills:</span> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "nothing"}</li>
                <li><span className={'allocator'}>About me:</span> {profile.aboutMe ? profile.aboutMe : "nothing"}</li>
                <li><span className={'allocator'}>Contacts:</span> </li>
                <li>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}</li>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        contactValue ? <div className={classes.contacts}><span className={'allocator'}>{contactTitle}:</span> {contactValue}</div> : null
    );
}

export default ProfileInfo;
