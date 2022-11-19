import classes from './MyPost.module.css';
import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm/PostForm";
import {reduxForm, reset} from "redux-form";

const afterSubmit = (result, dispatch) => dispatch(reset('post'));
const PostReduxForm = reduxForm({form: 'post', onSubmitSuccess: afterSubmit})(PostForm)

function MyPost(props) {
    let onSubmit = (formData) => {
        props.addPostAC(formData.newPostText);
    }

    let MyPostsElement = props.profileData.map(posts =>
        <Post key={posts.id} message={posts.message} ountLikes={posts.countLikes} imagePath={posts.imagePath}
              imageOfPost={posts.imageOfPost} nameOfUser={posts.nameOfUser}/>
    )

    return (
        <div>
            <h1>All posts</h1>
            {props.isOwner && <PostReduxForm pathToTheImagePost={props.pathToTheImagePost} onSubmit={onSubmit}
                                             checkPostPhoto={props.checkPostPhoto} imagePostChooseMode={props.imagePostChooseMode}/>}
            <div className={classes.all_posts}>
                {MyPostsElement}
            </div>
        </div>
    );
}

export default MyPost;
