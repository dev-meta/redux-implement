export default function createStore(initialState) {
    let state = initialState;
    let listeners = [];
    function getState() {
        return state;
    }
    function subscribe(cb) {
        listeners.push(cb);
    }
    function changeState(newState) {
        state = newState;
        for(let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    return {
        subscribe,
        getState,
        changeState
    }
}
