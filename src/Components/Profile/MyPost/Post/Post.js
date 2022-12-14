import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <div className={classes.post_image}>
                    <img src={props.imageOfPost}/>
                </div>
                <div>
                    <div className={classes.profile_post}>
                        <a><img src={props.imagePath}/></a>
                        <a><h5>{props.nameOfUser ? props.nameOfUser : "no name user"}</h5></a>
                        <button>{props.countLikes} likes</button>
                    </div>
                </div>
            </div>
            <div className={classes.post_text}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Post;
