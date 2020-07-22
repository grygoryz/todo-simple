import {TasksListType} from "../types/types";
import {State as ShowingState} from "../redux/showing-reducer"

export const localStorageAPI = {
    loadState() {
        try{
            const state = localStorage.getItem("state");
            if (!state) return undefined;
            return JSON.parse(state) as PersistedState
        } catch (e) {
            return undefined;
        }
    },
    saveState(state: PersistedState) {
        try {
            localStorage.setItem('state', JSON.stringify(state));
        } catch {
            return undefined
        }
    }
};

type PersistedState ={
    tasksList: TasksListType
    showing: ShowingState
}
