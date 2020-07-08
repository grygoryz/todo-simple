const ADD_TASK = "tasks-reducer/ADD_TASK";
const REMOVE_TASK = "task-reducer/REMOVE_TASK";
const TOGGLE_TASK = "task-reducer/TOGGLE_TASK";

const initialState = {
    tasksList: [
        {
            id: 1,
            date: '05.07.2020',
            title: "Some title",
            description: "This is the first testing todo. Some text, some text, some text....",
            completed: true
        },
        {
            id: 2,
            date: '05.07.2020',
            title: "Local Storage",
            description: "Need to learn Local Storage. Because i need this API for this project",
            completed: false
        },
        {
            id: 3,
            date: '06.07.2020',
            title: "Choose design ui library",
            description: "Ant Design vs Material UI vs ... millions of these",
            completed: false
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
        default:
            return state;
    }
};

export const addTask = (task) => ({type: ADD_TASK, task});
export const removeTask = (id) => ({type: REMOVE_TASK, id});
export const toggleTask = (id) => ({type: TOGGLE_TASK, id});

export default tasksReducer;