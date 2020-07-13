import React from 'react';
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";
import EditComponentContainer from "./components/EditComponent/EditComponentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import PanelContainer from "./components/Panel/PanelContainer";
import {CSSTransitionGroup} from "react-transition-group";
import fadeTransition from "./transitions/fade.module.scss";

function App({editMode}) {
  return (
    <div>
        <CSSTransitionGroup transitionName={fadeTransition} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {editMode && <EditComponentContainer/>}
        </CSSTransitionGroup>
        <HeaderContainer/>
        <div className={c.container}>
            <PanelContainer/>
            <div className={c.content}>
                <TasksListContainer/>
            </div>
        </div>

    </div>
  );
}

export default App


