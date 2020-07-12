export const localStorageAPI = {
    loadState() {
        try{
            const state = localStorage.getItem("state");
            if (!state) return undefined;
            return JSON.parse(state)
        } catch (e) {
            return undefined;
        }
    },

    saveState(state) {
        try {
            localStorage.setItem('state', JSON.stringify(state));
        } catch {
            return undefined
        }
    }
};