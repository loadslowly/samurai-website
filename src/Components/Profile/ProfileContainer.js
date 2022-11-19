import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    savePhoto,
    saveProfile,
    setUserProfileAC,
    updateStatus
} from "../../Redux/ProfileReducer";
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

    refreshProfile() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.userID;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.router.params.userId} savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, {setUserProfileAC, getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
