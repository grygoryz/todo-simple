import {CommonActions, LOAD_PERSISTED_STATE} from "./common-actions";
import {InferredActionTypes} from "./redux-store";

const SET_VISIBILITY_FILTER = "showing-reducer/SET_VISIBILITY_FILTER";
const SET_SORTING_METHOD = "showing-reducer/SET_SORTING_METHOD";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_IMPORTANT: "SHOW_IMPORTANT",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
};

export const SortingMethods = {
    NEWEST_FIRST: "NEWEST_FIRST",
    OLDEST_FIRST: "OLDEST_FIRST"
};

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL as VisibilityFiltersType,
    sortingMethod: SortingMethods.NEWEST_FIRST as SortingMethodsType
};

const showingReducer = (state = initialState, action: ActionsType): State => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER: {
            return {...state, visibilityFilter: action.filter};
        }
        case SET_SORTING_METHOD: {
            return {...state, sortingMethod: action.method};
        }
        case LOAD_PERSISTED_STATE: {
            return {...state, ...action.payload.showing}
        }
        default:
            return state;
    }
};

export const ShowingActions = {
    setVisibilityFilter: (filter: VisibilityFiltersType) => ({type: SET_VISIBILITY_FILTER, filter} as const),
    setSortingMethod: (method: SortingMethodsType) => ({type: SET_SORTING_METHOD, method} as const)
};

export default showingReducer;

export type State = typeof initialState;

type ActionsType = InferredActionTypes<typeof ShowingActions & typeof CommonActions>

export type VisibilityFiltersType = keyof typeof VisibilityFilters;
export type SortingMethodsType = keyof typeof SortingMethods