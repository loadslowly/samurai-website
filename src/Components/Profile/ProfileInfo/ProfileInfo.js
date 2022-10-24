import classes from './ProfileInfo.module.css';
import ava from './../../../Resource/Images/ava_girl.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, ...props}) => {
    if(!profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile_body}>
            <div className={classes.profile_left}>
                <img
                    src={profile.photos.large ? profile.photos.large : ava}/>
            </div>
            <div className={classes.profile_right}>
                <div className={classes.description}>
                    <h3>{profile.fullName}</h3>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <li>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</li>
                    <li>Description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "nothing" }</li>
                    <li>WebSite: {profile.contacts.website ? profile.contacts.website : "nope :("}</li>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
