import formatDate from "../utils/formatDate";
import {setEditMode} from "./app-reducer";

const ADD_TASK = "tasks-reducer/ADD_TASK";
const REMOVE_TASK = "task-reducer/REMOVE_TASK";
const TOGGLE_COMPLETED = "task-reducer/TOGGLE_COMPLETED";
const TOGGLE_IMPORTANT = "task-reducer/TOGGLE_IMPORTANT";
const EDIT_TASK = "task-reducer/EDIT_TASK";
const SET_EDITING_TASK = "task-reducer/SET_EDITING_TASK";

const initialState = {
    tasksList: [
        {
            id: 1,
            date: '05.07.2020',
            title: "Some title",
            description: "This is the first testing todo. Some text, some text, some text....",
            completed: true,
            important: false,
            timestamp: 10
        },
        {
            id: 2,
            date: '05.07.2020',
            title: "Local Storage",
            description: "Need to learn Local Storage. Because i need this API for this project",
            completed: false,
            important: true,
            timestamp: 20
        },
        {
            id: 3,
            date: '06.07.2020',
            title: "Choose design ui library",
            description: "Ant Design vs Material UI vs ... millions of these",
            completed: false,
            important: false,
            timestamp: 30
        },
        {
            id: 4,
            date: '06.07.2020',
            title: "Choose design ui library",
            description: "The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.",
            completed: true,
            important: false,
            timestamp: 40
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

export default tasksReducer;