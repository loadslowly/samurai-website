import {profileAPI, usersAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";
import {catchUnhandledError} from "./ErrorHandling/ErrorHandlingReducer";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const SAVE_POST_PHOTO_SUCCESS = "SAVE_POST_PHOTO_SUCCESS";

let initialState = {
    MyPostsData: [
        {
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt enim, sed ullamcorper lacus. Aliquam lacus libero, sollicitudin vitae fermentum at, pulvinar vel nisi. Ut non lorem lacus. Cras scelerisque faucibus diam id porta. Nullam porta bibendum tincidunt. Nulla eget ipsum at nisi consectetur maximus sit amet vitae risus. Morbi fermentum quis ante id eleifend.',
        countLikes: 5,
        imagePath: 'https://i.pinimg.com/564x/72/56/66/725666541ce4ba45a497decc6ad442be.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/ba/f7/59/baf759e2180e7670ebc119705a99fc1a.jpg'
        },
        {
        id: 2,
        message: "Nulla vehicula tortor id lectus consequat consequat. Maecenas mattis at est a placerat. Vestibulum finibus ligula nec ex ullamcorper, a pellentesque quam finibus?",
        countLikes: 12,
        imagePath: 'https://i.pinimg.com/736x/27/1d/e9/271de994e713f2e0e0b7262a6abb8b19.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/79/39/71/793971701429c49984a09e18a6b796e6.jpg'
        },
        {
        id: 3,
        message: "Ut egestas ex eget nibh auctor, id tincidunt odio suscipit. Nullam euismod pretium libero a ornare. Vivamus ac eros urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
        countLikes: 2,
        imagePath: 'https://i.pinimg.com/564x/f8/f3/96/f8f39673d73f3e0ff80ba4c58c1e7277.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/23/34/1c/23341c674f758267c82db38c6a18314f.jpg'
        },
    ],
    ProfileInfoData: null,
    Status: '',
    PathToTheImagePost: '',
    imagePostChooseMode: false
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let profilePostsCopy = {...state, MyPostsData: [...state.MyPostsData]};
            let newPost = {
                id: profilePostsCopy.MyPostsData.pop().id + 1,
                message: action.text,
                nameOfUser: state.ProfileInfoData.fullName,
                countLikes: 0,
                imagePath: state.ProfileInfoData.photos.large,
                imageOfPost: state.PathToTheImagePost
            };
            return {
                ...state, imagePostChooseMode: false, MyPostsData: [...state.MyPostsData, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state, MyPostsData: state.MyPostsData.filter(p => p.id !== action.id)
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, ProfileInfoData: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state, Status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, ProfileInfoData: {...state.ProfileInfoData, photos: action.photos}
            }
        }
        case SAVE_POST_PHOTO_SUCCESS: {
            debugger;
            return {
                ...state,
                imagePostChooseMode: true,
                PathToTheImagePost: action.photoPath
            }
        }
        default:
            return state;
    }
}

// POST

export const addPostAC = (text) => ({type: ADD_POST, text})
export const savePhotoPostSuccessAC = (photoPath) => ({type: SAVE_POST_PHOTO_SUCCESS, photoPath})

// PROFILE

export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(response));
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().Auth.id;
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ?  dispatch(catchUnhandledError(response.data.messages[0])) : "Some error"
        dispatch(stopSubmit("profileData", {_error: message}));
        return Promise.reject(response.data.messages[0]);
    }
}

// STATUS WORK

export const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status})
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(response));
}
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status));
        }
        else {
            dispatch(catchUnhandledError(response.data.messages[0]));
        }
    } catch (error) {
        dispatch(catchUnhandledError(error));
    }
}

// PHOTO

export const savePhotoSuccessAC = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const savePhoto = (file) => async (dispatch) => {
    let response = await usersAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos));
    } else {
        dispatch(catchUnhandledError(response.data.messages[0]));
    }
}
export const checkPostPhoto = (target,result) => async (dispatch) => {
    if (target.files[0].type === "image/jpeg" || target.files[0].type === "image/png" || target.files[0].type === "image/jpg") {
        dispatch(savePhotoPostSuccessAC(result));
    }
    else {
        dispatch(catchUnhandledError("File should has .jpg, .jpeg or .png extendion"));
    }
}



export default ProfileReducer;