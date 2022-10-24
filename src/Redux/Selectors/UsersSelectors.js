import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.UsersPage.usersInfo
}

export const getUsersInfo = createSelector(getUsers, (usersInfo) => {
    return usersInfo.filter(a => true)
});

export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}

export const followingProgress = (state) => {
    return state.UsersPage.followingProgress
}