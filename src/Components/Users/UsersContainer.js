import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    pageChanged,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../Redux/UsersReducer";
import Users from "./Users";
import {compose} from "redux";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {
    followingProgress,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersInfo,
} from "../../Redux/Selectors/UsersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.pageChanged(pageNumber, pageSize);
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersInfo={this.props.usersInfo}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
                   followingProgress={this.props.followingProgress}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        usersInfo: getUsersInfo(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: followingProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, pageChanged}),
    WithAuthRedirect
)(UsersContainer);
