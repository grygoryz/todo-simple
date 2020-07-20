import React from 'react';
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";
import EditComponentContainer from "./components/EditComponent/EditComponentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import PanelContainer from "./components/Panel/PanelContainer";
function App({editMode}) {

  return (
    <div>
        {editMode && <EditComponentContainer/>}
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


