import {localStorageAPI} from "../api/localStorage";
import {CommonActions, CommonActionsType} from "./common-actions";
import {BaseThunkType, InferredActionTypes} from "./redux-store";

const SET_EDIT_MODE = "app-reducer/SET_EDIT_MODE";
const SET_INITIALIZED = "app-reducer/SET_INITIALIZED";

const initialState = {
    editMode: false,
    initialized: false
};

const appReducer = (state = initialState, action: ActionsType): State => {
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

export const AppActions = {
    setEditMode: (value: boolean) => ({type: SET_EDIT_MODE, editMode: value} as const),
    setInitialized: (value: boolean) => ({type: SET_INITIALIZED, value} as const)
};

export const initializeApp = (): Thunk => (dispatch) => {
  const state = localStorageAPI.loadState();

  state && dispatch(CommonActions.loadPersistedState(state));
  dispatch(AppActions.setInitialized(true));
};

export default appReducer;

type State = typeof initialState

export type ActionsType = InferredActionTypes<typeof AppActions>

type Thunk = BaseThunkType<ActionsType | CommonActionsType>