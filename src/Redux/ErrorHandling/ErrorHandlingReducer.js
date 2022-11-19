const UNHANDLED_ERROR_WAS_MADE = "UNHANDLED_ERROR_WAS_MADE";

let initialState = {
    unhandledError: {ErrorWasMade: false, reasonMessage: null},
};

const ErrorHandlingReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNHANDLED_ERROR_WAS_MADE: {
            return {
                ...state,
                unhandledError: {...state.unhandledError,reasonMessage: action.reasonMessage, ErrorWasMade: action.errorStatus }
            };
        }
        default:
            return state;
    }
}

export const UnhandledErrorAC = (reasonMessage,errorStatus) => ({type: UNHANDLED_ERROR_WAS_MADE, reasonMessage, errorStatus})

export const catchUnhandledError = (reasonMessage) => (dispatch) => {
    dispatch(UnhandledErrorAC(reasonMessage,true));

    setTimeout(function(){
        dispatch(UnhandledErrorAC(null,false));
    }, 5000);
}

export default ErrorHandlingReducer;