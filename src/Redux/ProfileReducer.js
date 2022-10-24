import {profileAPI, usersAPI} from "../Api/Api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    MyPostsData: [{
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt enim, sed ullamcorper lacus. Aliquam lacus libero, sollicitudin vitae fermentum at, pulvinar vel nisi. Ut non lorem lacus. Cras scelerisque faucibus diam id porta. Nullam porta bibendum tincidunt. Nulla eget ipsum at nisi consectetur maximus sit amet vitae risus. Morbi fermentum quis ante id eleifend.',
        countLikes: 5,
        imagePath: 'https://i.pinimg.com/564x/72/56/66/725666541ce4ba45a497decc6ad442be.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/ba/f7/59/baf759e2180e7670ebc119705a99fc1a.jpg'
    }, {
        id: 2,
        message: "Nulla vehicula tortor id lectus consequat consequat. Maecenas mattis at est a placerat. Vestibulum finibus ligula nec ex ullamcorper, a pellentesque quam finibus?",
        countLikes: 12,
        imagePath: 'https://i.pinimg.com/736x/27/1d/e9/271de994e713f2e0e0b7262a6abb8b19.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/79/39/71/793971701429c49984a09e18a6b796e6.jpg'
    }, {
        id: 3,
        message: "Ut egestas ex eget nibh auctor, id tincidunt odio suscipit. Nullam euismod pretium libero a ornare. Vivamus ac eros urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
        countLikes: 2,
        imagePath: 'https://i.pinimg.com/564x/f8/f3/96/f8f39673d73f3e0ff80ba4c58c1e7277.jpg',
        imageOfPost: 'https://i.pinimg.com/564x/23/34/1c/23341c674f758267c82db38c6a18314f.jpg'
    },], ProfileInfoData: null, Status: ''
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.text,
                countLikes: 0,
                imagePath: 'https://i.pinimg.com/564x/44/dd/f8/44ddf88d0a215e0d1a0ad512adfdcc24.jpg',
                imageOfPost: 'https://i.pinimg.com/564x/ee/6f/56/ee6f561e6ea377601a6b647948a00d65.jpg'
            };
            return {
                ...state, MyPostsData: [...state.MyPostsData, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state, MyPostsData: state.MyPostsData.filter(p => p.id != action.id)
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
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default ProfileReducer;