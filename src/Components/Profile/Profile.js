import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import classes from "./Profile.module.css"
import React from "react";

const Profile = (props) => {
    return (
        <div className={classes.wrapper}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
            />
            <MyPostContainer isOwner={props.isOwner}/>
        </div>
    )
}

export default  Profile;
