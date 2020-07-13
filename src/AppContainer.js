import {connect} from "react-redux";
import App from "./App";
import React, {useEffect} from "react";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const AppContainer = ({editMode, initializeApp, initialized}) => {

    useEffect(initializeApp, []);

    if (!initialized) return <Preloader/>

    return <App editMode={editMode}/>
};

const mapStateToProps = (state) => {
    return {
        editMode: state.app.editMode,
        initialized: state.app.initialized
    }
};

const dispatchProps = {initializeApp};

export default connect(mapStateToProps, dispatchProps)(AppContainer);