import React from 'react';
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";
import EditComponentContainer from "./components/EditComponent/EditComponentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

// убрать лишние контейнерные: HeaderContainer. Просто передать пропсы через App

function App({editMode}) {
  return (
    <div>
        {editMode && <EditComponentContainer/>}
        <HeaderContainer/>
        <div className={c.content}>
            <div className={c.list}>
                <TasksListContainer/>
            </div>
        </div>
    </div>
  );
}

export default App


