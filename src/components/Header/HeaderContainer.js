import Header from "./Header";
import {connect} from "react-redux";
import {setEditMode} from "../../redux/app-reducer";
import React from "react";

const HeaderContainer = ({setEditMode}) => {

    return <Header openEditWindow={() => setEditMode(true)}/>
};

const dispatchProps = {setEditMode};

export default connect(null, dispatchProps)(HeaderContainer);