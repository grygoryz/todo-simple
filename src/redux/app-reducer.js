import {localStorageAPI} from "../api/localStorage";
import {loadPersistedState} from "./common-actions";

const SET_EDIT_MODE = "app-reducer/SET_EDIT_MODE";
const SET_INITIALIZED = "app-reducer/SET_INITIALIZED";

const initialState = {
    editMode: false,
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDIT_MODE: {
            return {...state, editMode: action.editMode};
        }
        case SET_INITIALIZED: {
            return {...state, initialized: action.value}
        }
        default:
            return state;
    }
};

export const setEditMode = (value) => ({type: SET_EDIT_MODE, editMode: value});
export const setInitialized = (value) => ({type: SET_INITIALIZED, value});

export const initializeApp = () => (dispatch) => {
  const state = localStorageAPI.loadState();

  state && dispatch(loadPersistedState(state));
  dispatch(setInitialized(true));
};

export default appReducer;