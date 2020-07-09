import formatDate from "../utils/formatDate";
import {setEditMode} from "./app-reducer";

const ADD_TASK = "tasks-reducer/ADD_TASK";
const REMOVE_TASK = "task-reducer/REMOVE_TASK";
const TOGGLE_TASK = "task-reducer/TOGGLE_TASK";
const TOGGLE_IMPORTANT = "task-reducer/TOGGLE_IMPORTANT";

const initialState = {
    tasksList: [
        {
            id: 1,
            date: '05.07.2020',
            title: "Some title",
            description: "This is the first testing todo. Some text, some text, some text....",
            completed: true,
            important: false
        },
        {
            id: 2,
            date: '05.07.2020',
            title: "Local Storage",
            description: "Need to learn Local Storage. Because i need this API for this project",
            completed: false,
            important: true
        },
        {
            id: 3,
            date: '06.07.2020',
            title: "Choose design ui library",
            description: "Ant Design vs Material UI vs ... millions of these",
            completed: false,
            important: false
        },
    ]
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            return {...state, tasksList: [...state.tasksList, action.task]};
        }
        case REMOVE_TASK: {
            return {...state, tasksList: state.tasksList.filter(t => t.id !== action.id)};
        }
        case TOGGLE_TASK: {
            return {...state, tasksList: state.tasksList.map(t => t.id === action.id ? {...t, completed: !t.completed} : t)};
        }
        case TOGGLE_IMPORTANT: {
            return {...state, tasksList: state.tasksList.map(t => t.id === action.id ? {...t, important: !t.important} : t)};
        }
        default:
            return state;
    }
};

export const addTask = (task) => ({type: ADD_TASK, task});
export const removeTask = (id) => ({type: REMOVE_TASK, id});
export const toggleTask = (id) => ({type: TOGGLE_TASK, id});
export const toggleImportant = (id) => ({type: TOGGLE_IMPORTANT, id});

export const createTask = (formData) => (dispatch) => {
    const newTask = {
        ...formData,
        date: formatDate(new Date()),
        id: Date.now(),
        completed: false
    };

    dispatch(setEditMode(false));
    dispatch(addTask(newTask))
};


export default tasksReducer;