const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogsNames: [
        {id: 1, name: 'yeat'},
        {id: 2, name: 'plaboi carti'},
        {id: 3, name: 'flaywo'},
        {id: 4, name: 'load slowly'},
    ],
    messagesData: [
        {id: 1, name: "yeat", message: 'yeyo yeyo'},
        {id: 2, name: "me", message: 'no no no'},
    ]
};

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                name: "me",
                message: action.text,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        default:
            return state;
    }
    return state;
}

export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, text})

export default DialogsReducer;