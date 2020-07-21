import {InferredActionTypes} from "./redux-store";

export const LOAD_PERSISTED_STATE = "LOAD_PERSISTED_STATE";

export const CommonActions = {
    loadPersistedState: (payload: any) => ({type: LOAD_PERSISTED_STATE, payload} as const)
};

export type CommonActionsType = InferredActionTypes<typeof CommonActions>
