import {getAuth} from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }

    return state;
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default AppReducer;