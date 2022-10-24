import {connect} from "react-redux";
import {addMessageActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import React from "react";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
