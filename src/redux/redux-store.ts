import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from "./app-reducer";
import showingReducer from "./showing-reducer";
import throttle from "../utils/throttle";
import {localStorageAPI} from "../api/localStorage";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    app: appReducer,
    showing: showingReducer,
    form: formReducer
});
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

store.subscribe(throttle(() => {
    localStorageAPI.saveState({
        tasksList: store.getState().tasks.tasksList,
        showing: store.getState().showing
    })
}, 1000));

export default store;

export type AppState = ReturnType<typeof rootReducer>;

export type InferredActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppState, unknown, A>