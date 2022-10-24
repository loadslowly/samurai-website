import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addNewTextPostActionCreator, addPostActionCreator} from "../../../Redux/ProfileReducer";

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData.MyPostsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;
