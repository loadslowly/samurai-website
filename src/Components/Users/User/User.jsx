import classes from "./User.module.css";
import ava from "../../../Resource/Images/post_girl.jpg"
import {NavLink} from "react-router-dom";

const User = ({user, followingProgress, unfollow, follow}) => {
    return (
        <div key={user.id}>
            <div className={classes.user}>
                <div className={classes.pic}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : ava}/>
                    </NavLink>
                    {
                        user.followed
                            ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>
                    }
                </div>
                <div className={classes.description}>
                    <h3>{user.name}</h3>
                    <p>{user.status}</p>
                </div>
                <div className={classes.geolocation}>
                    <h3>Country</h3>
                    <p>City</p>
                </div>
            </div>
        </div>
    );
}

export default User;