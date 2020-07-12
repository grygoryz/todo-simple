import React from 'react';
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";
import EditComponentContainer from "./components/EditComponent/EditComponentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import PanelContainer from "./components/Panel/PanelContainer";

// rename dispatches everywhere
// try to remove div c.list. insert styles inside TasksList (maybe it's will be better)

function App({editMode}) {
  return (
    <div>
        {editMode && <EditComponentContainer/>}
        <HeaderContainer/>
        <div className={c.content}>
            <PanelContainer/>
            <div className={c.list}>
                <TasksListContainer/>
            </div>
        </div>
    </div>
  );
}

export default App


