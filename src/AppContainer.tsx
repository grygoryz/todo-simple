import {connect} from "react-redux";
import App from "./App";
import React, {useEffect} from "react";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {AppState} from "./redux/redux-store";

const AppContainer: React.FC<Props> = ({editMode, initializeApp, initialized}) => {
    useEffect(initializeApp, []);

    if (!initialized) return <Preloader/>;

    return <App editMode={editMode}/>
};

const mapStateToProps = (state: AppState) => {
    return {
        editMode: state.app.editMode,
        initialized: state.app.initialized
    }
};

const dispatchProps = {initializeApp};

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateToProps, dispatchProps)(AppContainer);

type MapStateProps = {
    editMode: boolean
    initialized: boolean
}

type MapDispatchProps = {
    initializeApp: () => void
}

type Props = MapStateProps & MapDispatchProps
