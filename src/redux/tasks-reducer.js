import formatDate from "../utils/formatDate";
import {setEditMode} from "./app-reducer";
import {LOAD_PERSISTED_STATE} from "./common-actions";

const ADD_TASK = "tasks-reducer/ADD_TASK";
const REMOVE_TASK = "task-reducer/REMOVE_TASK";
const TOGGLE_COMPLETED = "task-reducer/TOGGLE_COMPLETED";
const TOGGLE_IMPORTANT = "task-reducer/TOGGLE_IMPORTANT";
const EDIT_TASK = "task-reducer/EDIT_TASK";
const SET_EDITING_TASK = "task-reducer/SET_EDITING_TASK";

const initialState = {
    tasksList: [
        {
            id: 0,
            date: '05.07.2020',
            title: "Some Title",
            description: "This is the example task. Create your own!",
            completed: false,
            important: false,
            timestamp: 99999999999
        },
    ],
    editingTask: null
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            return {...state, tasksList: [...state.tasksList, action.task]};
        }
        case REMOVE_TASK: {
            return {...state, tasksList: state.tasksList.filter(t => t.id !== action.id)};
        }
        case EDIT_TASK: {
            return {...state, tasksList: state.tasksList.map(t => t.id === action.id ? {...t, ...action.payload} : t)};
        }
        case SET_EDITING_TASK: {
            return {...state, editingTask: action.payload}
        }
        case TOGGLE_COMPLETED: {
            return {...state, tasksList: state.tasksList.map(t => t.id === action.id ? {...t, completed: !t.completed} : t)};
        }
        case TOGGLE_IMPORTANT: {
            return {...state, tasksList: state.tasksList.map(t => t.id === action.id ? {...t, important: !t.important} : t)};
        }
        case LOAD_PERSISTED_STATE: {
            return {...state, tasksList: action.payload.tasksList}
        }
        default:
            return state;
    }
};

export const addTask = (task) => ({type: ADD_TASK, task});
export const removeTask = (id) => ({type: REMOVE_TASK, id});
export const editTask = (id, payload) => ({type: EDIT_TASK, id, payload});
export const toggleCompleted = (id) => ({type: TOGGLE_COMPLETED, id});
export const toggleImportant = (id) => ({type: TOGGLE_IMPORTANT, id});
export const setEditingTask = (payload) => ({type: SET_EDITING_TASK, payload});

const getNextId = (tasksList) =>  tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1;

export const createTask = (formData) => (dispatch, getState) => {
    const date = new Date();

    const newTask = {
        ...formData,
        date: formatDate(date),
        timestamp: date.getTime(),
        id: getNextId(getState().tasks.tasksList),
        completed: false
    };

    dispatch(setEditMode(false));
    dispatch(addTask(newTask))
};

export const openEditWindow = (task) => (dispatch) => {
    dispatch(setEditingTask(task));
    dispatch(setEditMode(true));
};

export const closeEditWindow = () => (dispatch) => {
    dispatch(setEditMode(false));
    dispatch(setEditingTask(null));
};

export const applyEdits = (id, payload) => (dispatch) => {
    dispatch(closeEditWindow());
    dispatch(editTask(id, payload));
};

export default tasksReducer;