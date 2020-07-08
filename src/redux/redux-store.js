import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";

const reducers = combineReducers({
    tasks: tasksReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;