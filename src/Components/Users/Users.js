import classes from "./User/User.module.css";
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";

const Users = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged,
                   usersInfo, isFetching, ...props
               }) => {

    return <div className={classes.list_of_users}>
        <h3>Users</h3>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {
            usersInfo.map(user => <User user={user} followingProgress={props.followingProgress} follow={props.follow}
                                        unfollow={props.unfollow}/>)
        }
        {isFetching ? <Preloader/> : null}
    </div>
}

export default Users;