import {SortingMethods, VisibilityFilters} from "../redux/showing-reducer";
import {createSelector} from "reselect"
import {compose} from "redux";

export const getTasks = (state) => state.tasks.tasksList;
export const getVisibilityFilter = (state) => state.showing.visibilityFilter;
export const getSortingMethod = (state) => state.showing.sortingMethod;

export const getSuitableTasks = createSelector(
    getTasks, getVisibilityFilter, getSortingMethod,
    (tasks, filter, method) => {
        const options = {tasks, filter, method};

        const {tasks: newTasks} = compose(getSortedTasks, getFilteredTasks)(options);
        return newTasks;
    }
);

const getFilteredTasks = ({tasks, filter, ...rest}) => {
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

const getSortedTasks = ({tasks, method, ...rest}) => {
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



