import spinner from "../../../Resource/Images/Spinner.svg";
import classes from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={classes.body}>
            <img src={spinner} />
        </div>
    );
}

export  default  Preloader;