import classes from "./Header.module.css";
import ava from "../../Resource/Images/ava_girl.jpg";
import logo from "../../Resource/Images/logo.png";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = (props) => {
    let [menuMode, setMenuMode] = useState(false);
    // TODO: ОТОБРАЖАТЬ АКТИВНУЮ ФОТОГРАФИЮ ПРОФИЛЯ
    return (
        <div className={classes.header}>
            <div className={classes.profile_head}>
                <div className={classes.logo}>
                    <img src={logo}/>
                    <h3 className={classes.logo_text}>Opium</h3>
                </div>
                <form action="" method="post" className={classes.search}>
                    <input type="search" name="" placeholder="Search" className={classes.input}/>
                    <a className={classes.submit}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2319/2319177.png" name="send" border="0"/>
                    </a>
                </form>
                {props.isAuth
                    ?
                    <div className={classes.profile_user_info}>
                        <a className={classes.menu_creator} onClick={() => {setMenuMode(!menuMode)}}><h4>Menu</h4></a>
                        <a className={classes.login}><h5>{props.login}</h5></a>
                        <a><img src={ava}/></a>
                        <a>
                            <button onClick={props.logout}>logout</button>
                        </a>
                    </div>
                    :
                    <div className={classes.profile_user_info}>
                        <NavLink to={'/login'}><h5>Login</h5></NavLink>
                    </div>
                }
            </div>
            {menuMode ?
                <div className={classes.menu_phones}>
                    <ul className={classes.navigation}>
                        <li><NavLink  to={'/profile'}>Profile</NavLink></li>
                        <li><NavLink  to={'/dialogs'}>Messages</NavLink></li>
                        <li><NavLink  to={'/findusers'}>Find users</NavLink></li>
                    </ul>
                </div>
                : null
            }
        </div>
    );
}

export default Header;
