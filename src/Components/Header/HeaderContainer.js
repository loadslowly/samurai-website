import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component{
    render() {
        return <Header {...this.props}/>
    }
}
const mapToStateProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect(mapToStateProps, {logout})(HeaderContainer);
