import classes from "./Header.module.css";
import ava from "../../Resource/Images/ava_girl.jpg";
import logo from "../../Resource/Images/logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.profile_head}>
                <div className={classes.logo}>
                    <img src={logo}/>
                    <h3>Opium</h3>
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
                        <a><h5>{props.login}</h5></a>
                        <a><img src={ava}/></a>
                        <a><button onClick={props.logout}>logout</button></a>
                    </div>
                    :
                    <div className={classes.profile_user_info}>
                        <NavLink to={'/login'}><h5>Login</h5></NavLink>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;
