import {LOAD_PERSISTED_STATE} from "./common-actions";

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
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    sortingMethod: SortingMethods.NEWEST_FIRST
};

const showingReducer = (state = initialState, action) => {
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

export const setVisibilityFilter = (filter) => ({type: SET_VISIBILITY_FILTER, filter});
export const setSortingMethod = (method) => ({type: SET_SORTING_METHOD, method});

export default showingReducer;