import {SortingMethods, VisibilityFilters} from "../redux/showing-reducer";

export const getFilteredTasks = (tasks, filter) => {
    // const tasks = state.tasks.tasksList;
    // const filter = state.showing.visibilityFilter;

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

export const getSortedTasks = (tasks, method) => {
    // const tasks = state.tasks.tasksList;
    // const method = state.showing.sortingMethod;

    switch (method) {
        case SortingMethods.NEWEST_FIRST: {
            return [...tasks].sort((a, b) => a.timestamp - b.timestamp)
        }
        case SortingMethods.OLDEST_FIRST: {
            return [...tasks].sort((a, b) => b.timestamp - a.timestamp)
        }
        default: {
            throw new Error("Unknown method: " + method)
        }
    }
};

export const getSuitableTasks = (state) => {
    let tasks = state.tasks.tasksList;
    const method = state.showing.sortingMethod;
    const filter = state.showing.visibilityFilter;

    tasks = getFilteredTasks(tasks, filter);
    tasks = getSortedTasks(tasks, method);
    return tasks;
};

