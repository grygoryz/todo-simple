import {SortingMethods, VisibilityFilters} from "../redux/showing-reducer";
import {createSelector} from "reselect"

export const getTasks = (state) => state.tasks.tasksList;
export const getVisibilityFilter = (state) => state.showing.visibilityFilter;
export const getSortingMethod = (state) => state.showing.sortingMethod;

export const getSuitableTasks = createSelector(
    getTasks, getVisibilityFilter, getSortingMethod,
    (tasks, filter, method) => {
         tasks = getFilteredTasks(tasks, filter);
         return getSortedTasks(tasks, method);
    }
);

const getFilteredTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL: {
            return tasks
        }
        case VisibilityFilters.SHOW_IMPORTANT: {
            return tasks.filter((t) => t.important)
        }
        case VisibilityFilters.SHOW_ACTIVE: {
            return tasks.filter((t) => !t.completed)
        }
        case VisibilityFilters.SHOW_COMPLETED: {
            return tasks.filter((t) => t.completed)
        }
        default: {
            throw new Error("Unknown filter: " + filter)
        }
    }
};

const getSortedTasks = (tasks, method) => {
    switch (method) {
        case SortingMethods.OLDEST_FIRST: {
            return [...tasks].sort((a, b) => a.timestamp - b.timestamp)
        }
        case SortingMethods.NEWEST_FIRST: {
            return [...tasks].sort((a, b) => b.timestamp - a.timestamp)
        }
        default: {
            throw new Error("Unknown method: " + method)
        }
    }
};


