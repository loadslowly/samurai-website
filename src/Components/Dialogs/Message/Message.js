import classes from './Message.module.css';
import ava from './../../../Resource/Images/ava_girl.jpg'

const Message = (props) => {

    return (
        <div className={classes.messages}>
            <div className={classes.dialog_user}>
                <a><img src={ava}/></a>
                <a><p>{props.name}</p></a>
            </div>
            <div className={classes.answer}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Message;
