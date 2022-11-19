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
import {Navigate} from "react-router";
import {catchUnhandledError} from "../../Redux/ErrorHandling/ErrorHandlingReducer";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        this.props.catchUnhandledError(promiseRejectionEvent.reason.message);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Routes >
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/findusers/*" element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<div className={classes.notfound}><h1>404 NOT FOUND</h1></div>}/>
                    </Routes>
                    </Suspense>
                    <Sidebar></Sidebar>
                    {this.props.unhandledError.ErrorWasMade ? <div className={"unhandledError"}><h3>Something goes wrong ҂ `з´)  {this.props.unhandledError.reasonMessage}</h3></div> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized,
    unhandledError: state.ErrorHandling.unhandledError
});

export default connect(mapStateToProps, {initializeApp,catchUnhandledError})(App);
