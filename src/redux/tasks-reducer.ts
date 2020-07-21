import formatDate from "../utils/formatDate";
import {AppActions, ActionsType as AppActionsType} from "./app-reducer";
import {CommonActions, LOAD_PERSISTED_STATE} from "./common-actions";
import {BaseThunkType, InferredActionTypes} from "./redux-store";
import {Task, TasksList} from "../types/types";

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
    ] as TasksList,
    editingTask: null as Task | null
};

const tasksReducer = (state = initialState, action: ActionsType): State => {
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

export const TasksActions = {
    addTask: (task: Task) => ({type: ADD_TASK, task} as const),
    removeTask: (id: number) => ({type: REMOVE_TASK, id} as const),
    editTask: (id: number, payload: Partial<Task>) => ({type: EDIT_TASK, id, payload} as const),
    toggleCompleted: (id: number) => ({type: TOGGLE_COMPLETED, id} as const),
    toggleImportant: (id: number) => ({type: TOGGLE_IMPORTANT, id} as const),
    setEditingTask: (payload: Task | null) => ({type: SET_EDITING_TASK, payload} as const)
};

const getNextId = (tasksList: TasksList) =>  tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1;
// todo: настроить тип EditFormValues
export const createTask = (formData: any): Thunk => (dispatch, getState) => {
    const date = new Date();

    const newTask = {
        ...formData,
        date: formatDate(date),
        timestamp: date.getTime(),
        id: getNextId(getState().tasks.tasksList),
        completed: false
    };

    dispatch(AppActions.setEditMode(false));
    dispatch(TasksActions.addTask(newTask))
};

export const openEditWindow = (task: Task): Thunk => (dispatch) => {
    dispatch(TasksActions.setEditingTask(task));
    dispatch(AppActions.setEditMode(true));
};

export const closeEditWindow = (): Thunk => (dispatch) => {
    dispatch(AppActions.setEditMode(false));
    dispatch(TasksActions.setEditingTask(null));
};

export const applyEdits = (id: number, payload: Partial<Task>): Thunk => (dispatch) => {
    dispatch(closeEditWindow());
    dispatch(TasksActions.editTask(id, payload));
};

export default tasksReducer;

type State = typeof initialState

type ActionsType = InferredActionTypes<typeof TasksActions & typeof CommonActions>

type Thunk = BaseThunkType<ActionsType | AppActionsType>