import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import showingReducer from "./showing-reducer";

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

export default store;