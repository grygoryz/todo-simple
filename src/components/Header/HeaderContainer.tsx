import Header from "./Header";
import {connect} from "react-redux";
import {AppActions} from "../../redux/app-reducer";
import React from "react";
import {AppState} from "../../redux/redux-store";

const HeaderContainer: React.FC<Props> = ({setEditMode}) => {

    return <Header openEditWindow={() => setEditMode(true)}/>
};

const dispatchProps = {setEditMode: AppActions.setEditMode};

export default connect<{}, MapDispatchProps, {}, AppState>(null, dispatchProps)(HeaderContainer);

type MapDispatchProps = {
    setEditMode: (value: boolean) => void
}

type Props = MapDispatchProps