import {NavLink} from "react-router-dom";
import classes from './Sidebar.module.css';
import account from './../../Resource/Images/account.png'
import messages from './../../Resource/Images/message.png'
import music from './../../Resource/Images/music.png'
import news from './../../Resource/Images/news.png'
import search from './../../Resource/Images/search.png'
import settings from './../../Resource/Images/settings.png'

const Sidebar = () => {
    const activeLink = ({isActive}) => isActive ? classes.active : classes.item;

    return (
        <div className={classes.sidebar}>
            <ul className={classes.navigation}>
                <div>
                    <img src={account}/>
                    <NavLink className={activeLink} to={'/profile'}>Profile</NavLink>
                </div>
                <div>
                    <img src={messages}/>
                    <NavLink className={activeLink} to={'/dialogs'}>Messages</NavLink>
                </div>
                <div>
                    <img src={news}/>
                    <NavLink className={activeLink} to={'/news'}>News</NavLink>
                </div>
                <div>
                    <img src={music}/>
                    <NavLink className={activeLink} to={'/music'}>Music</NavLink>
                </div>
                <div className={classes.findUsers}>
                    <img src={search}/>
                    <NavLink className={activeLink} to={'/findusers'}>Find users</NavLink>
                </div>
                <div className={classes.settings}>
                    <img src={settings}/>
                    <NavLink className={activeLink} to={'/settings'}>Settings</NavLink>
                </div>
            </ul>
        </div>
    );
}

export default Sidebar;
