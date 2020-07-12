import React from 'react';
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";
import EditComponentContainer from "./components/EditComponent/EditComponentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Panel from "./components/Panel/Panel";

// мб сделать так, чтобы editComponentContainer сам брал editingTask из стейта. лишнее прокидывание

function App({editMode}) {
  return (
    <div>
        {editMode && <EditComponentContainer/>}
        <HeaderContainer/>
        <div className={c.content}>
            <Panel/>
            <div className={c.list}>
                <TasksListContainer/>
            </div>
        </div>
    </div>
  );
}

export default App


