import React from 'react';
import Header from "./components/Header/Header";
import c from "./App.module.scss"
import TasksListContainer from "./components/TasksList/TasksListContainer";

function App() {
  return (
    <div>
        <Header/>
        <div className={c.content}>
            <div className={c.list}>
                <TasksListContainer/>
            </div>
        </div>
    </div>
  );
}


export default App;


