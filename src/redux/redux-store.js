import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import showingReducer from "./showing-reducer";
import throttle from "../utils/throttle";
import {localStorageAPI} from "../api/localStorage";

const reducers = combineReducers({
    tasks: tasksReducer,
    app: appReducer,
    showing: showingReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

store.subscribe(throttle(() => {
    localStorageAPI.saveState({
        tasksList: store.getState().tasks.tasksList,
        showing: store.getState().showing
    })
}, 1000));

export default store;