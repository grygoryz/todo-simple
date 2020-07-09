const SET_EDIT_MODE = "app-reducer/SET_EDIT_MODE";

const initialState = {
    editMode: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDIT_MODE: {
            return {...state, editMode: action.editMode};
        }
        default:
            return state;
    }
};

export const setEditMode = (value) => ({type: SET_EDIT_MODE, editMode: value});

export default appReducer;