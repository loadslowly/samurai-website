import classes from './App.module.css';
import {Route, Routes,} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../Redux/AppReducer";
import Preloader from "../Common/Preloader/Preloader";
import React, { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={classes.wrapper}>
                <HeaderContainer/>
                <div className={classes.content}>
                    <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/findusers/*" element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </Suspense>
                    <Sidebar></Sidebar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
