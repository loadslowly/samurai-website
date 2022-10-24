import classes from './MyPost.module.css';
import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm/PostForm";
import {reduxForm} from "redux-form";

const PostReduxForm = reduxForm({form:'post'})(PostForm)

function MyPost(props) {
    console.log("RENDER MYPOST")
    let onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    }

    let MyPostsElement = props.profileData.map(posts =>
        <Post message={posts.message} key={posts.id} countLikes={posts.countLikes} imagePath={posts.imagePath}
              imageOfPost={posts.imageOfPost}/>
    )

    return (
        <div>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={classes.all_posts}>
                {MyPostsElement}
            </div>
        </div>
    );
}

export default MyPost;
