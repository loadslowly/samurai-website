import classes from './DialogsItem.module.css';
import ava from './../../../Resource/Images/post_girl.jpg'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path =  "/dialogs/" + props.id;
    const activeLink = ({isActive}) => isActive ? classes.active : classes.item;

    return (
        <div className={classes.user_of_dialogs}>
            <a><img src={ava}/></a>
            <li><NavLink className={activeLink} to={path}>{props.name}</NavLink></li>
        </div>
    );
}

export default DialogsItem;
