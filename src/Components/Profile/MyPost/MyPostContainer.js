import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPostAC, checkPostPhoto} from "../../../Redux/ProfileReducer";

let mapStateToProps = (state,props) => {
    return {
        profileData: state.profileData.MyPostsData,
        imagePostChooseMode: state.profileData.imagePostChooseMode,
        pathToTheImagePost: state.profileData.pathToTheImagePost,
        isOwner: props.isOwner
    }
}

const MyPostContainer = connect(mapStateToProps, {addPostAC,checkPostPhoto})(MyPost)

export default MyPostContainer;
