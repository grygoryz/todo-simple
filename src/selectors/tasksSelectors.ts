import {SortingMethods, SortingMethodsType, VisibilityFilters, VisibilityFiltersType} from "../redux/showing-reducer";
import {createSelector} from "reselect"
import {compose} from "redux";
import {AppState} from "../redux/redux-store";
import {TasksListType} from "../types/types";

export const getTasks = (state: AppState) => state.tasks.tasksList;
export const getVisibilityFilter = (state: AppState) => state.showing.visibilityFilter;
export const getSortingMethod = (state: AppState) => state.showing.sortingMethod;

export const getSuitableTasks = createSelector(
    getTasks, getVisibilityFilter, getSortingMethod,
    (tasks, filter, method) => {
        const options = {tasks, filter, method};
        type Options = typeof options

        const {tasks: newTasks} = compose<Options>(getSortedTasks, getFilteredTasks)(options);
        return newTasks;
    }
);

const getFilteredTasks = ({tasks, filter, ...rest}: {tasks: TasksListType, filter: VisibilityFiltersType}) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL: {
            return {tasks, ...rest}
        }
        case VisibilityFilters.SHOW_IMPORTANT: {
            return {tasks: tasks.filter((t) => t.important), ...rest}
        }
        case VisibilityFilters.SHOW_ACTIVE: {
            return {tasks: tasks.filter((t) => !t.completed), ...rest}
        }
        case VisibilityFilters.SHOW_COMPLETED: {
            return {tasks: tasks.filter((t) => t.completed), ...rest}
        }
        default: {
            throw new Error("Unknown filter: " + filter)
        }
    }
};

const getSortedTasks = ({tasks, method, ...rest}: {tasks: TasksListType, method: SortingMethodsType}) => {
    switch (method) {
        case SortingMethods.OLDEST_FIRST: {
            return {tasks: [...tasks].sort((a, b) => a.timestamp - b.timestamp), ...rest}
        }
        case SortingMethods.NEWEST_FIRST: {
            return {tasks: [...tasks].sort((a, b) => b.timestamp - a.timestamp), ...rest}
        }
        default: {
            throw new Error("Unknown method: " + method)
        }
    }
};



