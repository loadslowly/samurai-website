import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../Redux/ProfileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.userID;
            if (!userId) {
                // TODO: ДАТЬ ПРОСМОТР СТРАНИЦ ПОЛЬЗОВАТЕЛЕЙ БЕЗ ВХОДА НА САЙТ
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.ProfileInfoData,
    status: state.profileData.Status,
    userID: state.Auth.id,
    userIsAuth: state.Auth.isAuth
});

export default compose(
    connect(mapStateToProps,{setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
